import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, mobile, message } = await req.json();

    // 1️⃣ Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("contactdb"); // you can rename later
    const collection = db.collection("contacts");

    // 2️⃣ Save form data
    await collection.insertOne({
      name,
      email,
      mobile,
      message,
      createdAt: new Date(),
    });

    // 3️⃣ Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"InSafety Services" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Inquiry: ${name}`,
      text: `Name: ${name}
Email: ${email}
Mobile: ${mobile}
Message: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ API ERROR:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
