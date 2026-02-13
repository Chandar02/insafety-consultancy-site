import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    // Initialize Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    const data = await resend.emails.send({
      from: "InSafety Services <info@insafetyservices.com>", // MUST use your verified domain
      to: process.env.GMAIL_USER, // your test email
      subject: "Resend Test Email ✅",
      text: "If you received this, Resend is working perfectly.",
    });

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("Resend test error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
