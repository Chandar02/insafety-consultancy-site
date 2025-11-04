// app/api/contact/route.js (FINAL CODE WITH MONGODB AND SENDGRID)
import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; 

// --- MONGODB SETUP (Existing) ---
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = 'InSafetyDB'; 

// --- NODEMAILER SETUP (FOR SENDGRID) ---
const transporter = nodemailer.createTransport({
    service: 'SendGrid', // <--- Use the service name here!
    auth: {
        user: process.env.EMAIL_USER, // The value 'apikey'
        pass: process.env.EMAIL_PASS, // The SendGrid API Key
    },
});

export async function POST(request) {
    if (request.method !== 'POST') {
        return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
    }

    try {
        const formData = await request.json();
        const { name, email, mobile, message } = formData;
        
        // 1. SAVE DATA TO MONGODB
        await client.connect();
        const db = client.db(dbName);
        const contacts = db.collection('ContactSubmissions');

        const submission = { name, email, mobile, message, date: new Date() };
        
        await contacts.insertOne(submission);
        
        // 2. SEND EMAIL NOTIFICATION (This runs right after saving to the DB)
        const mailOptions = {
            // This MUST be the exact email address you verified in SendGrid
            from: 'chandarsingh@live.com', 
            // This is the address that receives the notification
            to: 'chandarsingh@live.com', 
            subject: `NEW CONSULTATION REQUEST: ${name}`,
            html: `
                <h2>New Website Submission Received!</h2>
                <p>A new consultation request has arrived from your website.</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p>-- Please follow up immediately. --</p>
            `,
        };
        
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Consultation request received successfully!', }, 
            { status: 201 }
        );
    } catch (error) {
        // If the email fails, the MongoDB insertion will still complete.
        // If the DB fails, the email will not be attempted.
        console.error('API Error (DB or Email):', error); 
        return NextResponse.json(
            { message: 'Error processing request.' }, 
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}