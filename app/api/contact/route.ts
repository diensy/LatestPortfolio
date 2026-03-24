import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PERSONAL } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const { GMAIL_USER, GMAIL_APP_PASSWORD, OWNER_EMAIL } = process.env;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !OWNER_EMAIL) {
      console.error("Missing email configuration. Please check .env.local");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // 1. Email to Portfolio Owner (Dinesh)
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: New Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #E63946; border-bottom: 2px solid #E63946; padding-bottom: 10px;">New Message Alert 🚀</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #E63946; margin-top: 20px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #888; mt-4">Sent from dineshkumarsahoo.dev contact form</p>
        </div>
      `,
    };

    // 2. Auto-reply to Sender
    const autoReplyOptions = {
      from: `"Dinesh Kumar Sahoo" <${GMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out via my portfolio. I've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
          <p>If your inquiry is urgent, feel free to reach me on WhatsApp: ${PERSONAL.phone}.</p>
          <br/>
          <p>Best regards,<br/><strong>Dinesh Kumar Sahoo</strong><br/><span style="color: #E63946">Full Stack MERN Developer</span></p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
