import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { sendQuoteEmail } from '@/lib/email'
import { QuoteFormData, QuoteDocument, ApiResponse } from '@/types/quote'

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body: QuoteFormData = await request.json()

        // Validate required fields
        const { name, phone, companyName, enquiryFor, email, message } = body

        if (!name || !phone || !companyName || !enquiryFor || !email || !message) {
            return NextResponse.json<ApiResponse>(
                {
                    success: false,
                    message: 'All fields are required',
                    error: 'Missing required fields',
                },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json<ApiResponse>(
                {
                    success: false,
                    message: 'Invalid email format',
                    error: 'Invalid email',
                },
                { status: 400 }
            )
        }

        // Create document for MongoDB
        const quoteDocument: QuoteDocument = {
            name,
            phone,
            companyName,
            enquiryFor,
            email,
            message,
            submittedAt: new Date(),
        }

        // Save to MongoDB
        try {
            const db = await getDatabase()
            const collection = db.collection('quotes')
            const result = await collection.insertOne(quoteDocument)
            console.log('Quote saved to MongoDB:', result.insertedId)
        } catch (dbError) {
            console.error('MongoDB Error:', dbError)
            // Continue even if DB fails - we'll still try to send email
        }

        // Send email notification
        try {
            await sendQuoteEmail({
                name,
                phone,
                companyName,
                enquiryFor,
                email,
                message,
                submittedAt: new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'full',
                    timeStyle: 'long',
                }),
            })
            console.log('Email sent successfully')
        } catch (emailError) {
            console.error('Email Error:', emailError)
            // Return success even if email fails, as long as DB save worked
            return NextResponse.json<ApiResponse>(
                {
                    success: true,
                    message: 'Quote submitted successfully, but email notification failed',
                },
                { status: 200 }
            )
        }

        return NextResponse.json<ApiResponse>(
            {
                success: true,
                message: 'Quote submitted successfully',
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json<ApiResponse>(
            {
                success: false,
                message: 'Failed to submit quote',
                error: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        )
    }
}
