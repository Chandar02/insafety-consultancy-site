import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export async function POST(req) {
  // This line is the most important: it pulls the data from your Vercel Dashboard
  const MONGODB_URI = process.env.MONGODB_URI;
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_PASS = process.env.GMAIL_PASS;

  try {
    const { name, email, mobile, message } = await req.json();

    // If this fails, it means Vercel's dashboard is still not talking to the code
    if (!MONGODB_URI) {
      throw new Error("Vercel Dashboard variable MONGODB_URI is missing.");
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
    }

    await Contact.create({ name, email, mobile, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"InSafety Services" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("🛑 Error details:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}