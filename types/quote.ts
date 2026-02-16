import { ObjectId } from 'mongodb'

export interface QuoteFormData {
    name: string
    phone: string
    companyName: string
    enquiryFor: string
    email: string
    message: string
}

export interface QuoteDocument extends QuoteFormData {
    submittedAt: Date
    _id?: ObjectId
}

export interface ApiResponse {
    success: boolean
    message: string
    error?: string
}
