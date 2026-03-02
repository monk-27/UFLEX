import nodemailer from 'nodemailer'

export interface QuoteEmailData {
  name: string
  phone: string
  companyName: string
  enquiryFor: string
  product?: string
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
          ${data.product ? `
          <div class="field">
            <span class="label">Product:</span>
            <span class="value">${data.product}</span>
          </div>` : ''}
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
    from: `"${data.name}" <${data.email}>`,
    replyTo: data.email,
    to: process.env.SMTP_TO,
    subject: `New Quote Request - ${data.enquiryFor}`,
    html: htmlContent,
    text: `
New Quote Request

Name: ${data.name}
Phone: ${data.phone}
Company Name: ${data.companyName}
Enquiry For: ${data.enquiryFor}
${data.product ? `Product: ${data.product}\n` : ''}Email: ${data.email}
Message: ${data.message}
Submitted At: ${data.submittedAt}
    `,
  }

  await transporter.sendMail(mailOptions)
}

export async function sendConfirmationEmail(data: QuoteEmailData): Promise<void> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #117ABA 0%, #0F6AA0 100%); color: white; padding: 40px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px; }
        .content { padding: 40px; background-color: #ffffff; }
        .greeting { font-size: 18px; font-weight: 600; color: #117ABA; margin-bottom: 20px; }
        .message { color: #555; margin-bottom: 30px; font-size: 15px; }
        .details-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 30px; }
        .details-title { font-weight: 700; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
        .detail-row { display: flex; margin-bottom: 10px; font-size: 14px; }
        .detail-label { font-weight: 600; color: #117ABA; width: 120px; flex-shrink: 0; }
        .detail-value { color: #334155; }
        .footer { background-color: #f1f5f9; padding: 25px; text-align: center; color: #64748b; font-size: 13px; border-top: 1px solid #e2e8f0; }
        .cta-button { display: inline-block; padding: 12px 25px; background-color: #117ABA; color: white !important; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 10px; transition: background 0.3s; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Enquiry Received!</h1>
        </div>
        <div class="content">
          <div class="greeting">Hi ${data.name},</div>
          <div class="message">
            Thank you for reaching out to **UFlex Limited**. We have successfully received your quote request for **${data.enquiryFor}**. 
            <br><br>
            Our team is currently reviewing your requirements and will get back to you with a detailed proposal within 24-48 business hours.
          </div>
          
          <div class="details-box">
            <div class="details-title">Summary of your Enquiry</div>
            <div class="detail-row">
              <span class="detail-label">Division:</span>
              <span class="detail-value">${data.enquiryFor}</span>
            </div>
            ${data.product ? `
            <div class="detail-row">
              <span class="detail-label">Product:</span>
              <span class="detail-value">${data.product}</span>
            </div>` : ''}
            <div class="detail-row">
              <span class="detail-label">Company:</span>
              <span class="detail-value">${data.companyName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Submitted:</span>
              <span class="detail-value">${data.submittedAt}</span>
            </div>
          </div>

          <div class="message">
            In the meantime, feel free to visit our website to explore more about our products and solutions.
          </div>
          
          <div style="text-align: center;">
            <a href="https://www.uflexltd.com" class="cta-button text-white">Visit Our Website</a>
          </div>
        </div>
        <div class="footer">
          <strong>UFlex Limited</strong><br>
          A-107-110, Sector-IV, Noida-201301 (U.P.) India<br>
          <p style="margin-top: 10px; font-style: italic;">This is an automated confirmation. Please do not reply directly to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: `"UFlex Limited" <${process.env.SMTP_FROM}>`,
    to: data.email,
    subject: `Confirmation: Your Quote Request for ${data.enquiryFor}`,
    html: htmlContent,
    text: `
Hi ${data.name},

Thank you for reaching out to UFlex Limited. We have received your quote request for ${data.enquiryFor}.

Summary:
- Division: ${data.enquiryFor}
- Company: ${data.companyName}
- Submitted: ${data.submittedAt}

Our team will get back to you shortly.

Best Regards,
UFlex Limited Team
    `,
  }

  await transporter.sendMail(mailOptions)
}
