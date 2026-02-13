import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.GMAIL_USER,
      subject: "Resend Test Email ✅",
      text: "If you received this, Resend is working perfectly.",
    });

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Resend test error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
