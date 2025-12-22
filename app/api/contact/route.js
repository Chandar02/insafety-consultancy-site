// app/api/contact/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// ✅ Load environment variables automatically (Next.js does this in production)
const MONGO_URI = process.env.MONGO_URI;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

// ✅ Define MongoDB schema & model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// ✅ Handle POST requests
export async function POST(req) {
  try {
    const { name, email, mobile, message } = await req.json();

    // Connect to MongoDB if not already connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGO_URI);
    }

    // Save message to database
    await Contact.create({ name, email, mobile, message });

    // Configure email transport (Gmail App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    // Email message details
    const mailOptions = {
      from: `"InSafety Services" <${GMAIL_USER}>`,
      to: GMAIL_USER, // sends to yourself
      subject: `New Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message saved and emailed successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("🛑 Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ✅ Block GET requests for safety
export function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
