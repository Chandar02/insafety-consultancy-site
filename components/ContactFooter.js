// components/ContactFooter.js (UPDATED CODE)
"use client";
import Link from 'next/link';
import { useState } from 'react'; // <--- ADD THIS

const ContactFooter = () => {
    // Define color variables 
    const accentColor = '#ffc107'; 
    const primaryColor = '#1f3e66'; 
    const footerTextColor = 'white';
    const linkColor = '#4A8EB1'; 

    // --- ADD THESE STATE VARIABLES ---
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    // Handler for input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Success! Your request has been sent.');
                setFormData({ name: '', email: '', mobile: '', message: '' }); // Clear form
            } else {
                setStatus(`Failed: ${result.message}`);
            }
        } catch (error) {
            setStatus('Failed to connect to the server.');
        }
    };
    // ------------------------------------

    // Define common input style for re-use
    const inputStyle = {
        width: '100%', 
        padding: '10px', 
        marginBottom: '10px', 
        borderRadius: '4px', 
        border: '1px solid #ccc',
        boxSizing: 'border-box'
    };

    const textareaStyle = {
        ...inputStyle,
        height: '100px',
        resize: 'none'
    };

    const paragraphStyle = { 
        lineHeight: '1.6', 
        marginBottom: '15px' 
    };

    return (
        <footer id="contact" style={{ backgroundColor: primaryColor, color: footerTextColor, padding: '40px 5%', }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', gap: '40px' }}>

                {/* Column 1: Logo and Company Info */}
                <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <img src="/InSafety_Logo_Full.svg" alt="InSafety Services Logo" style={{ height: '50px', marginBottom: '10px' }} />
                        <h2 style={{ color: footerTextColor, fontSize: '1.2em', marginBottom: '5px' }}>InSafety Services</h2>
                    </div>
                    <p style={paragraphStyle}>
                        InSafety Services provides strategic HSSEF expertise across the globe, ensuring safety is built-in, not bolted on.
                    </p>
                    <p style={{ fontWeight: 'bold', color: accentColor, marginBottom: '5px' }}>Address:</p>
                    <p style={paragraphStyle}>
                        B-2/502, Green Acres-2 CHS Ltd., Wagbhil Road, Kavesar, Thane-Maharashtra-400615
                    </p>
                </div>

                {/* Column 2: Contact Form - UPDATED FORM LOGIC */}
                <div style={{ flex: '1 1 350px', padding: '20px', backgroundColor: '#2f5180', borderRadius: '8px', minWidth: '300px' }}>
                    <h3 style={{ color: footerTextColor, borderBottom: `2px solid ${accentColor}`, paddingBottom: '10px', marginTop: '5px', marginBottom: '20px' }}>
                        Start Your Safety Transformation
                    </h3>
                    <p style={{ fontSize: '0.9em', marginBottom: '15px', lineHeight: '1.5' }}>
                        Get in touch for a confidential consultation on your risk and compliance challenges.
                    </p>

                    <form onSubmit={handleSubmit}> 
                        <input type="text" placeholder="Your Name" style={inputStyle} name="name" value={formData.name} onChange={handleChange} required/>
                        <input type="email" placeholder="Work Email" style={inputStyle} name="email" value={formData.email} onChange={handleChange} required/>
                        <input type="text" placeholder="Mobile / Whatsapp" style={inputStyle} name="mobile" value={formData.mobile} onChange={handleChange}/>
                        <textarea placeholder="Tell us about your project or challenge..." style={textareaStyle} name="message" value={formData.message} onChange={handleChange}></textarea>

                        <button 
                            type="submit" 
                            style={{ 
                                backgroundColor: accentColor, 
                                color: primaryColor, 
                                padding: '10px 20px', 
                                border: 'none', 
                                borderRadius: '4px', 
                                cursor: 'pointer',
                                width: '100%', 
                                marginTop: '5px',
                                fontWeight: 'bold',
                                opacity: status === 'Submitting...' ? 0.7 : 1, 
                            }}
                            disabled={status === 'Submitting...'}
                        >
                            Request Consultation
                        </button>
                    </form>

                    {/* Status Message */}
                    {status && (
                        <p style={{ marginTop: '15px', color: status.startsWith('Success') ? '#4CAF50' : '#FF5722', fontWeight: 'bold', textAlign: 'center' }}>
                            {status}
                        </p>
                    )}
                </div>

                {/* Column 3: Direct Contact */}
                <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
                    <h3 style={{ color: footerTextColor, borderBottom: `2px solid ${accentColor}`, paddingBottom: '10px', marginBottom: '20px' }}>
                        Direct Contact
                    </h3>
                    <p style={paragraphStyle}>
                        **Email:** <span style={{ color: linkColor }}>chandarsingh@live.com</span>
                    </p>
                    <p style={paragraphStyle}>
                        **Mobile:** <span style={{ color: linkColor }}>+91 90827 66847</span>
                    </p>
                    <p style={paragraphStyle}>
                        **WhatsApp:** <span style={{ color: linkColor }}>+91 90827 66847</span>
                    </p>
                    <p style={paragraphStyle}>
                        **LinkedIn:** <Link href="[YOUR_LINKEDIN_URL]" style={{ color: linkColor, textDecoration: 'underline' }}>View Profile</Link>
                    </p>

                    <h3 style={{ color: footerTextColor, borderBottom: `2px solid ${accentColor}`, paddingBottom: '10px', marginBottom: '20px' }}>
                        Regulatory Compliances:
                    </h3>
                    <p style={paragraphStyle}>
                        Shop & Establishment License: 2510 2003 2043 0562
                    </p>
                    <p style={paragraphStyle}>
                        GSTIN: 27 ABXPM 5408 L1 ZK
                    </p>
                    <p style={paragraphStyle}>
                        Udyam-MSME: MH-33-0070 049
                    </p>
                </div>

            </div>

            {/* Copyright */}
            <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #4A8EB1', marginTop: '10px', fontSize: '0.8em' }}>
                © 2025 InSafety Services. All rights reserved.
            </div>
        </footer>
    );
};

export default ContactFooter;