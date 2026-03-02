import { ObjectId } from 'mongodb'

export interface QuoteFormData {
    name: string
    phone: string
    companyName: string
    enquiryFor: string
    product?: string[]
    email: string
    message: string
    captcha?: string
    attachments?: string[]
}

export interface QuoteDocument extends QuoteFormData {
    submittedAt: Date
    _id?: ObjectId
    attachments?: string[]
}

export interface ApiResponse {
    success: boolean
    message: string
    error?: string
}
