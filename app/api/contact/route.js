// app/api/contact/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const MONGO_URI = process.env.MONGO_URI;

// 1️⃣ Define the schema for MongoDB
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// 2️⃣ Handle POST requests (form submissions)
export async function POST(req) {
  try {
    const { name, email, mobile, message } = await req.json();

    // ✅ Connect to MongoDB
    await mongoose.connect(MONGO_URI);

    // ✅ Save data in MongoDB
    await Contact.create({ name, email, mobile, message });

    // ✅ Send you an email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your app password (not normal password)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Message:
${message}
      `,
    };

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

// 3️⃣ Optional: Block GET requests for safety
export function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
