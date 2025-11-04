// components/ContactForm.js

"use client"; // CRITICAL: Enables interactivity (useState, onSubmit)

import { useState } from 'react';

// --- Form-Specific Styles (Inputs and Button) ---
const primaryColor = '#1e3a62'; 
const whiteText = '#ffffff';
const yellowAccent = '#ffc107'; 

const formInputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: 'none',
    borderRadius: '4px',
    boxSizing: 'border-box'
};

const buttonStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: yellowAccent,
    color: primaryColor,
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
};
// ------------------------------------------------

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // 'success', 'error', 'loading', or null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Sends data to the API route (app/api/contact/route.js)
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', mobile: '', message: '' });
            } else {
                const errorData = await response.json();
                console.error("Submission API Error:", errorData);
                setStatus('error');
            }
        } catch (error) {
            console.error("Server Connection Error:", error);
            setStatus('error');
        }
    };

    const renderStatusMessage = () => {
        if (status === 'loading') {
            return <p style={{ color: whiteText, textAlign: 'center', marginTop: '10px' }}>Processing request...</p>;
        }
        if (status === 'success') {
            return <p style={{ color: yellowAccent, fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>Success! Your request has been sent.</p>;
        }
        if (status === 'error') {
            return <p style={{ color: '#ff4d4d', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>Failed: Error processing request.</p>;
        }
        return null;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} style={formInputStyle} required/>
            <input type="email" placeholder="Work Email" name="email" value={formData.email} onChange={handleChange} style={formInputStyle} required/>
            <input type="text" placeholder="Mobile / Whatsapp" name="mobile" value={formData.mobile} onChange={handleChange} style={formInputStyle} required/>
            <textarea placeholder="Tell us about your project or challenge..." rows="4" name="message" value={formData.message} onChange={handleChange} style={formInputStyle} required/>
            <button type="submit" style={buttonStyle} disabled={status === 'loading'}>
                Request Consultation
            </button>
            {renderStatusMessage()}
        </form>
    );
}