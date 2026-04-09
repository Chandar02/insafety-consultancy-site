import { NextResponse } from "next/server";
import { Resend } from "resend";

// Basic in-memory rate limiter
const rateLimitMap = new Map();

function rateLimit(ip) {
    const now = Date.now();
    const windowSize = 60 * 1000; // 1 minute
    const maxRequests = 5;

    if (!rateLimitMap.has(ip)) {
        rateLimitMap.set(ip, []);
    }

    const timestamps = rateLimitMap.get(ip).filter(
        (time) => now - time < windowSize
    );

    if (timestamps.length >= maxRequests) {
        return false;
    }

    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);
    return true;
}

export async function POST(req) {
    try {
        const ip =
            req.headers.get("x-forwarded-for") ||
            req.headers.get("x-real-ip") ||
            "unknown";

        if (!rateLimit(ip)) {
            return NextResponse.json(
                { success: false, message: "Too many requests. Try again later." },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { name, email, message, company } = body;

        // HONEYPOT CHECK: If 'company' is filled out, it is a bot.
        // We return success: true so the bot thinks it worked, but we DO NOT send an email.
        if (company !== undefined && company !== "") {
            console.log("Spam bot blocked! Honeypot triggered by:", ip);
            return NextResponse.json({ success: true });
        }

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: "All fields are required." },
                { status: 400 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: "Contact Form <contact@insafetyservices.com>",
            to: process.env.GMAIL_USER,
            reply_to: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong." },
            { status: 500 }
        );
    }
}