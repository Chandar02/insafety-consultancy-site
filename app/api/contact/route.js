// app/api/contact/route.js
import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = 'InSafetyDB'; // The database name we will use

export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    // Extract data from the form submission
    const { name, email, mobile, message } = await request.json();

    await client.connect();
    const db = client.db(dbName);
    const contacts = db.collection('ContactSubmissions'); // The collection (table) name

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
      { message: 'Error processing request.' }, 
      { status: 500 }
    );
  } finally {
    // Ensure the connection is closed after every request
    await client.close();
  }
}