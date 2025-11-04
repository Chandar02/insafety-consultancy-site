// components/ContactFooter.js
"use client";
import Link from 'next/link';
import Image from 'next/image'; 

// Define colors once for clean maintenance
const primaryColor = '#1e3a62'; // Dark Blue background
const secondaryColor = '#2a4d79'; // Slightly lighter dark blue for container
const whiteText = '#ffffff';
const yellowAccent = '#ffc107'; // Yellow for accents/highlights
const linkColor = '#80bfff'; // A brighter blue for links against the dark background

export default function ContactFooter() {

    const handleSubmit = async (e) => {
        // Form submission logic would go here
        e.preventDefault();
    };

    return (
        <footer style={{ 
            backgroundColor: primaryColor, 
            color: whiteText, 
            padding: '50px 5%', 
            borderTop: '5px solid #007bff'
        }}>
            <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto', 
                display: 'grid', 
                gridTemplateColumns: '1fr 1.2fr 1fr', // Layout: Info | Form | Contact
                gap: '50px', 
                textAlign: 'left' 
            }}>
                
                {/* Column 1: Company Info & Address */}
                <div>
                    {/* FIXED: Logo is displayed alone, followed by text. */}
                    <div style={{ marginBottom: '15px', width: '80px', height: '80px', position: 'relative' }}>
                        <Image 
                            src="/InSafety_Logo_Full.svg" // Adjust path if needed
                            alt="InSafety Services Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    
                    <h3 style={{ fontSize: '1.4em', marginBottom: '10px', color: whiteText }}>
                        InSafety Services
                    </h3>
                    
                    {/* FIXED: Highlighting 'safety is built-in, not bolted on.' */}
                    <p style={{ lineHeight: '1.6', color: whiteText, marginBottom: '20px' }}>
                        InSafety Services provides strategic HSSEF expertise across the globe, ensuring 
                        <span style={{ fontWeight: 'bold', color: yellowAccent }}> safety is built-in, not bolted on.</span>
                    </p>
                    
                    <p style={{ fontWeight: 'bold', color: yellowAccent, marginBottom: '5px' }}>
                        Address:
                    </p>
                    <p style={{ color: whiteText }}>
                        B-2/502, Green Acres-2 CHS Ltd, Wagbhil Road, <br/>
                        Kavesar, Thane-Maharashtra-400615
                    </p>
                </div>

                {/* Column 2: Contact Form */}
                <div style={{ backgroundColor: secondaryColor, padding: '25px', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.4em', marginBottom: '15px', color: whiteText, borderBottom: `2px solid ${yellowAccent}`, paddingBottom: '5px' }}>
                        Start Your Safety Transformation
                    </h3>
                    <p style={{ color: whiteText, marginBottom: '20px', fontSize: '0.9em' }}>
                        Get in touch for a confidential consultation on your risk and compliance challenges.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" style={formInputStyle} />
                        <input type="email" placeholder="Work Email" style={formInputStyle} />
                        <input type="text" placeholder="Mobile / Whatsapp" style={formInputStyle} />
                        <textarea placeholder="Tell us about your project or challenge..." rows="4" style={formInputStyle} />
                        <button type="submit" style={buttonStyle}>
                            Request Consultation
                        </button>
                    </form>
                </div>

                {/* Column 3: Direct Contact & Compliances */}
                <div>
                    <h3 style={{ fontSize: '1.4em', marginBottom: '15px', color: whiteText, borderBottom: `2px solid ${yellowAccent}`, paddingBottom: '5px' }}>
                        Direct Contact
                    </h3>
                    
                    {/* FIXED: Removed asterisks and used standard text/link tags. */}
                    <p style={{ margin: '8px 0', color: whiteText }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>Email:</span> 
                        <Link href="mailto:chandarsingh@live.com" style={{ color: linkColor, textDecoration: 'none' }}>chandarsingh@live.com</Link>
                    </p>
                    <p style={{ margin: '8px 0', color: whiteText }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>Mobile:</span> +91 90827 66847
                    </p>
                    <p style={{ margin: '8px 0', color: whiteText }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>WhatsApp:</span> +91 90827 66847
                    </p>
                    <p style={{ margin: '8px 0', color: whiteText }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>LinkedIn:</span> 
                        <Link href="https://linkedin.com/in/chandarsingh-mehta-3232516" target="_blank" rel="noopener noreferrer" style={{ color: linkColor, textDecoration: 'none' }}>View Profile</Link>
                    </p>

                    <h3 style={{ fontSize: '1.4em', marginBottom: '15px', color: whiteText, borderBottom: `2px solid ${yellowAccent}`, paddingBottom: '5px', marginTop: '30px' }}>
                        Regulatory Compliances:
                    </h3>
                    <p style={{ margin: '5px 0', color: whiteText, fontSize: '0.9em' }}>
                        Shop & Establishment License: 2510 2003 2043 0562
                    </p>
                    <p style={{ margin: '5px 0', color: whiteText, fontSize: '0.9em' }}>
                        GSTIN: 27 ABXPM 5408 L1 ZK
                    </p>
                    <p style={{ margin: '5px 0', color: whiteText, fontSize: '0.9em' }}>
                        Udyam-MSME: MH-33-0070 049
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px', borderTop: `1px solid ${secondaryColor}`, paddingTop: '15px' }}>
                <p style={{ fontSize: '0.8em', color: whiteText }}>
                    &copy; 2025 InSafety Services. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

// Inline styles for form elements
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