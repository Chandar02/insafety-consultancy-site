// app/api/contact/route.js (RESTORED STABLE CODE)
import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

// --- MONGODB SETUP ---
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = 'InSafetyDB'; 

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

        const submission = { 
            name, 
            email, 
            mobile, 
            message, 
            date: new Date() 
        };

        const result = await contacts.insertOne(submission);

        return NextResponse.json(
            { 
                message: 'Consultation request received successfully!', 
                id: result.insertedId 
            }, 
            { status: 201 }
        );
    } catch (error) {
        console.error('MongoDB Error:', error); 
        return NextResponse.json(
            { message: 'Failed: Error processing request.' }, 
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}