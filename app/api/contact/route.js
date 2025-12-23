import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const contactSchema = new mongoose.Schema({
  name: String, email: String, mobile: String, message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export async function POST(req) {
  // Checks both common names in case of a dashboard typo
  const URI = process.env.MONGODB_URI || process.env.MONGO_URI;
// 🔍 ADD THESE LINES HERE - RIGHT AFTER URI
  console.log("🔍 Debug Info:");
  console.log("MONGODB_URI exists?", !!process.env.MONGODB_URI);
  console.log("MONGO_URI exists?", !!process.env.MONGO_URI);
  console.log("URI value:", URI ? "✅ Found" : "❌ Missing");
  // 🔍 END OF NEW CODE
  try {
    const { name, email, mobile, message } = await req.json();

    if (!URI) {
      return NextResponse.json({ success: false, error: "DB string missing on Vercel" }, { status: 500 });
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(URI);
    }

    await Contact.create({ name, email, mobile, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"InSafety Services" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Inquiry: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}