import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const contactSchema = new mongoose.Schema({
  name: String, email: String, mobile: String, message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export async function POST(req) {
  const URI = process.env.MONGODB_URI || process.env.MONGO_URI;
 
  console.log("🔍 URI found:", !!URI);

  try {
    const { name, email, mobile, message } = await req.json();
    console.log("✅ Request parsed");

    if (!URI) {
      console.log("❌ No URI!");
      return NextResponse.json({ success: false, error: "No DB URI" }, { status: 500 });
    }

    console.log("🔌 Attempting DB connection...");
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(URI);
      console.log("✅ DB connected");
    }

    console.log("💾 Saving to DB...");
    await Contact.create({ name, email, mobile, message });
    console.log("✅ Saved to DB");

    console.log("📧 Sending email...");
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
    console.log("✅ Email sent");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log("❌ ERROR:", err.message);
    console.log("❌ STACK:", err.stack);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
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