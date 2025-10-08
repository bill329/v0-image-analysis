import { Resend } from "resend"

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(to: string, subject: string, body: string, replyTo?: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Stone Concepts <no-reply@stoneconcepts.net>", // Update with your verified domain
      to: [to],
      subject: subject,
      text: body,
      reply_to: replyTo,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error(`Failed to send email: ${error.message}`)
    }

    return data
  } catch (error) {
    console.error("Error in sendEmail function:", error)
    throw error
  }
}
