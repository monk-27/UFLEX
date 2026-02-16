import nodemailer from 'nodemailer'

export interface QuoteEmailData {
    name: string
    phone: string
    companyName: string
    enquiryFor: string
    email: string
    message: string
    submittedAt: string
}

// Create reusable transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
})

export async function sendQuoteEmail(data: QuoteEmailData): Promise<void> {
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #117ABA;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          background-color: #f9f9f9;
          padding: 30px;
          border: 1px solid #ddd;
          border-top: none;
        }
        .field {
          margin-bottom: 15px;
        }
        .label {
          font-weight: bold;
          color: #117ABA;
          display: inline-block;
          width: 150px;
        }
        .value {
          color: #333;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Quote Request</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value">${data.phone}</span>
          </div>
          <div class="field">
            <span class="label">Company Name:</span>
            <span class="value">${data.companyName}</span>
          </div>
          <div class="field">
            <span class="label">Enquiry For:</span>
            <span class="value">${data.enquiryFor}</span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${data.email}</span>
          </div>
          <div class="field">
            <span class="label">Message:</span>
            <div class="value" style="margin-top: 10px; padding: 15px; background: white; border-radius: 5px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div class="field">
            <span class="label">Submitted At:</span>
            <span class="value">${data.submittedAt}</span>
          </div>
        </div>
        <div class="footer">
          <p>This is an automated email from UFlex Quote Form</p>
        </div>
      </div>
    </body>
    </html>
  `

    const mailOptions = {
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_TO,
        subject: `New Quote Request - ${data.enquiryFor}`,
        html: htmlContent,
        text: `
New Quote Request

Name: ${data.name}
Phone: ${data.phone}
Company Name: ${data.companyName}
Enquiry For: ${data.enquiryFor}
Email: ${data.email}
Message: ${data.message}
Submitted At: ${data.submittedAt}
    `,
    }

    await transporter.sendMail(mailOptions)
}
