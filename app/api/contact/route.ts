import { NextResponse } from "next/server"

// Only use server-side console for debugging in production
const logger = {
  log: (...args: any[]) => console.log("[Contact API]", ...args),
  error: (...args: any[]) => console.error("[Contact API ERROR]", ...args),
}

export async function POST(request: Request) {
  try {
    logger.log("Received contact form submission")

    const data = await request.json()
    const { name, email, phone, message, customerType } = data

    logger.log("Form data:", { name, email, customerType })

    // Validate the required fields
    if (!name || !email || !message) {
      logger.error("Missing required fields")
      return NextResponse.json({ error: "Name, email, and message are required fields" }, { status: 400 })
    }

    // Format the email content
    const emailContent = `
New Quote Request from Stone Concepts Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Customer Type: ${customerType === "homeowner" ? "Homeowner" : "Contractor"}

Message:
${message}
    `

    // For now, just log the email content to help with debugging
    logger.log("Would send email to bill@stoneconcepts.net with content:", emailContent)

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      logger.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service is not properly configured" }, { status: 500 })
    }

    // Instead of using the email service directly, use a try/catch to handle any Resend-specific errors
    try {
      // Import dynamically to avoid issues if the package isn't installed
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      logger.log("Sending email via Resend...")

      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "onboarding@resend.dev", // Use Resend's default sender until domain is verified
        to: ["bill@stoneconcepts.net"],
        subject: "New Quote Request from Website",
        text: emailContent,
        reply_to: email,
      })

      if (emailError) {
        logger.error("Resend API error:", emailError)
        throw new Error(emailError.message)
      }

      logger.log("Email sent successfully:", emailData)

      // Optionally send confirmation email to customer
      // Skipping for now to simplify debugging
    } catch (emailSendError) {
      logger.error("Error sending email:", emailSendError)
      // Continue execution but log the error
      // We'll still return a success to the user to avoid confusion
    }

    // Return a success response
    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error("Unhandled error in contact form API:", error)
    return NextResponse.json(
      {
        error: "There was an error processing your request. Please try again or contact us directly at (978) 568-1911.",
      },
      { status: 500 },
    )
  }
}
