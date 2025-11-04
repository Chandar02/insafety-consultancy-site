// components/ContactFooter.js
"use client"; 

import Image from 'next/image';

export default function ContactFooter() {
    // Define Colors
    const primaryColor = '#1f3e66'; // Dark blue for the contact form block
    const accentColor = '#ffc107'; // Yellow accent for buttons/highlights
    const backgroundColor = '#2c4a6c'; // Darker blue for the footer background

    const contactDetailStyle = {
        fontSize: '0.9em',
        marginBottom: '8px',
        color: 'white'
    };
    
    const linkStyle = {
        color: 'white',
        textDecoration: 'underline'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box'
    };

    return (
        <footer id="contact" style={{ backgroundColor: backgroundColor, color: 'white', padding: '40px 5%' }}>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1.5fr 1fr', 
                gap: '40px', 
                maxWidth: '1200px', 
                margin: '0 auto' 
            }}>
                
                {/* 1. Logo and Motto/Address (Left Column) */}
                <div style={{ textAlign: 'left', paddingRight: '20px' }}>
                    
                    {/* LOGO: Using Image component with the correct file name */}
                    <div style={{ 
                        marginBottom: '20px', 
                        width: '100px', 
                        height: '35px', 
                        backgroundColor: 'transparent'
                    }}>
                        <Image 
                            src="/InSafety_Logo.png" // Assumes logo is in the public directory
                            alt="InSafety Services Logo"
                            width={100} 
                            height={35} 
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    
                    {/* Motto (FIXED: Clean bolding) */}
                    <p style={{ fontSize: '0.9em', lineHeight: '1.4', marginBottom: '15px' }}>
                        InSafety Services provides strategic HSSEF expertise across the globe, ensuring safety is <strong>built-in, not bolted on</strong>.
                    </p>
                    
                    <strong style={{ color: accentColor, fontSize: '1em' }}>Address:</strong>
                    <p style={{ fontSize: '0.9em', lineHeight: '1.4' }}>
                        B-2 / 502, Green Acres-2 CHS Ltd., Waghbil Road, Kavesar, Thane-Maharashtra-400615
                    </p>
                </div>

                {/* 2. Contact Form (Middle Column) */}
                <div style={{ 
                    backgroundColor: primaryColor, 
                    padding: '30px', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)' 
                }}>
                    <h3 style={{ color: 'white', fontSize: '1.4em', marginTop: '0', marginBottom: '10px' }}>Start Your Safety Transformation</h3>
                    <p style={{ fontSize: '0.9em', color: '#ccc', marginBottom: '20px' }}>
                        Get in touch for a confidential consultation on your risk and compliance challenges.
                    </p>
                    <form>
                        <input type="text" placeholder="Your Name" style={inputStyle} required />
                        <input type="email" placeholder="Work Email" style={inputStyle} required />
                        <input type="text" placeholder="Mobile / WhatsApp" style={inputStyle} />
                        <textarea placeholder="Tell us about your project or challenge..." rows="4" style={{...inputStyle, resize: 'none'}}></textarea>
                        <button type="submit" style={{ 
                            width: '100%', 
                            padding: '12px', 
                            backgroundColor: accentColor, 
                            color: primaryColor, 
                            border: 'none', 
                            borderRadius: '4px', 
                            cursor: 'pointer', 
                            fontSize: '1em', 
                            fontWeight: 'bold', 
                            marginTop: '10px' 
                        }}>
                            Request Consultation
                        </button>
                    </form>
                </div>
                
                {/* 3. Direct Contact & Regulatory (Right Column) */}
                <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
                    
                    {/* Direct Contact Heading (FIXED: Short yellow separator) */}
                    <h3 style={{ color: 'white', fontSize: '1.2em', marginTop: '0', marginBottom: '15px' }}>Direct Contact</h3>
                    <div style={{ width: '80px', height: '3px', backgroundColor: accentColor, marginBottom: '15px' }}></div> 
                    
                    {/* Contact Details */}
                    <p style={contactDetailStyle}><strong>Email:</strong> <a href="mailto:chandarsingh@live.com" style={linkStyle}>chandarsingh@live.com</a></p>
                    <p style={contactDetailStyle}><strong>Mobile:</strong> +91 90827 66847</p>
                    <p style={contactDetailStyle}><strong>WhatsApp:</strong> +91 90827 66847</p>
                    <p style={contactDetailStyle}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/chandarsingh-mehta-3232516" style={linkStyle} target="_blank" rel="noopener noreferrer">View Profile</a></p>

                    {/* Regulatory Compliances Heading */}
                    <h4 style={{ color: accentColor, fontSize: '1em', marginTop: '25px', marginBottom: '10px' }}>Regulatory Compliances:</h4>
                    
                    {/* Compliance Details (License number assumed correct now) */}
                    <p style={contactDetailStyle}><strong>Shop & Establishment License:</strong> 25 10 2003 2043 0562</p>
                    <p style={contactDetailStyle}><strong>GSTIN:</strong> 27 ABXPM 5408 L1 ZK</p>
                    <p style={contactDetailStyle}><strong>Udyam-MSME:</strong> MH-33-0670 049</p>
                </div>

            </div>
            {/* Copyright Line */}
            <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '10px', borderTop: '1px solid #3d6796', fontSize: '0.8em', color: '#aaa' }}>
                © 2025 InSafety Services. All rights reserved.
            </div>
        </footer>
    );
}