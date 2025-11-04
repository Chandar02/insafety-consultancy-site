// app/api/contact/route.js
// Use this clean code to test the API connection.

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        
        // This log confirms the server received the data
        console.log('✅ FORM CONNECTION SUCCESSFUL. Data Received:', data); 

        // CRITICAL: Return a 200 (Success) response for the client form.
        return NextResponse.json(
            { message: 'Submission received successfully.' }, 
            { status: 200 }
        );

    } catch (error) {
        console.error('🛑 API Error: Could not process request.', error);
        // If an error happens, this ensures the client receives a proper error code
        return NextResponse.json(
            { message: 'Internal Server Error during form processing.' }, 
            { status: 500 }
        );
    }
}

// Optional: Block other methods for security
export function GET() {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}