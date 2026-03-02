import { NextRequest, NextResponse } from 'next/server'
import * as ftp from 'basic-ftp'
import { Readable } from 'stream'

const ALLOWED_MIME_PREFIXES = ['image/', 'video/']
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024 // 10 MB
const MAX_FILES = 5

export const runtime = 'nodejs'
export const maxDuration = 60

function generateUniqueFilename(originalName: string): string {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8)
    const ext = originalName.split('.').pop() ?? 'bin'
    const base = originalName
        .replace(/\.[^/.]+$/, '')
        .replace(/[^a-zA-Z0-9]/g, '_')
        .substring(0, 20)
    return `${base}_${timestamp}_${random}.${ext}`
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const files = formData.getAll('files') as File[]

        if (!files || files.length === 0) {
            return NextResponse.json({ success: false, message: 'No files provided' }, { status: 400 })
        }

        if (files.length > MAX_FILES) {
            return NextResponse.json(
                { success: false, message: `Maximum ${MAX_FILES} files allowed` },
                { status: 400 }
            )
        }

        // Validate each file
        for (const file of files) {
            const isAllowed = ALLOWED_MIME_PREFIXES.some((prefix) => file.type.startsWith(prefix))
            if (!isAllowed) {
                return NextResponse.json(
                    { success: false, message: `"${file.name}" is not allowed. Only images and videos are accepted.` },
                    { status: 400 }
                )
            }
            if (file.size > MAX_FILE_SIZE_BYTES) {
                return NextResponse.json(
                    { success: false, message: `"${file.name}" exceeds the 10 MB size limit.` },
                    { status: 400 }
                )
            }
        }

        const ftpHost = process.env.FTP_HOST
        const ftpUser = process.env.FTP_USER
        // Password is base64-encoded in env to avoid dotenv $ interpolation issues
        const ftpPasswordB64 = process.env.FTP_PASSWORD_B64
        const ftpPort = parseInt(process.env.FTP_PORT ?? '21')
        const ftpUploadDir = process.env.FTP_UPLOAD_DIR ?? '/public_html/uploads/quotes'
        const publicBaseUrl = process.env.UPLOAD_PUBLIC_URL ?? ''

        if (!ftpHost || !ftpUser || !ftpPasswordB64) {
            console.error('[FTP] Missing environment variables')
            return NextResponse.json(
                { success: false, message: 'Server storage is not configured. Please contact support.' },
                { status: 500 }
            )
        }

        // Decode base64 password — this avoids ALL dotenv special character issues
        const ftpPassword = Buffer.from(ftpPasswordB64, 'base64').toString('utf8')

        const maskedPass = `${ftpPassword.substring(0, 4)}... (len:${ftpPassword.length})`
        console.log(`[FTP] Host: ${ftpHost}:${ftpPort} | User: ${ftpUser} | Pass: ${maskedPass}`)

        const client = new ftp.Client()
        client.ftp.verbose = false

        const uploadedUrls: string[] = []

        try {
            // Server is Pure-FTPd with TLS support (AUTH TLS OK confirmed)
            await client.access({
                host: ftpHost,
                user: ftpUser,
                password: ftpPassword,
                port: ftpPort,
                secure: 'implicit' as never, // Try implicit FTPS first
                secureOptions: { rejectUnauthorized: false },
            })

            console.log('[FTP] Connected ✓')
            await client.ensureDir(ftpUploadDir)

            for (const file of files) {
                const uniqueName = generateUniqueFilename(file.name)
                const arrayBuffer = await file.arrayBuffer()
                const buffer = Buffer.from(arrayBuffer)
                const readable = Readable.from(buffer)
                await client.uploadFrom(readable, uniqueName)
                console.log(`[FTP] Uploaded: ${uniqueName}`)
                uploadedUrls.push(`${publicBaseUrl}/${uniqueName}`)
            }
        } catch (ftpsErr) {
            // Fallback: try plain TLS (explicit FTPS on port 21)
            console.warn('[FTP] Implicit FTPS failed, trying explicit TLS:', (ftpsErr as Error).message)
            client.close()

            const client2 = new ftp.Client()
            client2.ftp.verbose = false

            await client2.access({
                host: ftpHost,
                user: ftpUser,
                password: ftpPassword,
                port: ftpPort,
                secure: true,
                secureOptions: { rejectUnauthorized: false },
            })

            console.log('[FTP] Connected via explicit TLS ✓')
            await client2.ensureDir(ftpUploadDir)

            for (const file of files) {
                const uniqueName = generateUniqueFilename(file.name)
                const arrayBuffer = await file.arrayBuffer()
                const buffer = Buffer.from(arrayBuffer)
                const readable = Readable.from(buffer)
                await client2.uploadFrom(readable, uniqueName)
                console.log(`[FTP] Uploaded: ${uniqueName}`)
                uploadedUrls.push(`${publicBaseUrl}/${uniqueName}`)
            }

            client2.close()
            return NextResponse.json({ success: true, urls: uploadedUrls }, { status: 200 })
        } finally {
            client.close()
        }

        return NextResponse.json({ success: true, urls: uploadedUrls }, { status: 200 })

    } catch (error) {
        console.error('Upload Error:', error)
        const message = error instanceof Error ? error.message : 'Unknown error'
        const isTimeout = message.toLowerCase().includes('timeout')
        const isAuth = message.toLowerCase().includes('530') || message.toLowerCase().includes('auth')

        return NextResponse.json(
            {
                success: false,
                message: isAuth
                    ? 'FTP authentication failed. Please check server credentials.'
                    : isTimeout
                        ? 'Connection to storage server timed out. Please try again.'
                        : 'Failed to upload files. Please try again.',
                error: message,
            },
            { status: 500 }
        )
    }
}
