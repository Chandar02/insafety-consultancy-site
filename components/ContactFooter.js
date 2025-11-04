// components/ContactFooter.js

import Link from 'next/link';
import Image from 'next/image'; 

// Assuming a default primary color (dark blue) and accent colors
const primaryColor = '#1e3a62'; // Dark Blue background
const secondaryColor = '#2a4d79'; // Slightly lighter dark blue for hover/borders
const whiteText = '#ffffff';
const yellowAccent = '#ffc107'; // Yellow for accents/highlights

// This function component likely takes props if used across different pages, 
// but we'll focus on the static content shown in the image.

export default function ContactFooter() {

    const handleSubmit = async (e) => {
        // Implement the contact form submission logic here (similar to route.js API call)
        // ... (This logic is usually handled by the parent page or form component)
        e.preventDefault();
        // Since the form is not the focus, we'll keep the visual HTML structure clean.
    };

    return (
        <footer style={{ 
            backgroundColor: primaryColor, 
            color: whiteText, 
            padding: '50px 5%', 
            borderTop: '5px solid #007bff' // Assuming blue header/theme line
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
                    {/* Logo (Centered and separate from text) */}
                    <div style={{ marginBottom: '15px', width: '80px', height: '80px', position: 'relative' }}>
                         {/* Ensure you have a clean logo SVG or PNG in your public folder */}
                        <Image 
                            src="/InSafety_Logo_Full.svg" // Example: Use a single, clean logo path
                            alt="InSafety Services Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    
                    <h3 style={{ fontSize: '1.4em', marginBottom: '10px', color: whiteText }}>
                        InSafety Services
                    </h3>
                    
                    <p style={{ lineHeight: '1.6', color: whiteText, marginBottom: '20px' }}>
                        InSafety Services provides strategic HSSEF expertise across the globe, ensuring safety is 
                        <span style={{ fontWeight: 'bold', color: yellowAccent }}> built-in, not bolted on.</span>
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
                        {/* Status Message (Example) */}
                        <p style={{ color: yellowAccent, textAlign: 'center', marginTop: '10px', fontSize: '0.9em' }}>
                            Success! Your request has been sent.
                        </p>
                    </form>
                </div>

                {/* Column 3: Direct Contact & Compliances */}
                <div>
                    <h3 style={{ fontSize: '1.4em', marginBottom: '15px', color: whiteText, borderBottom: `2px solid ${yellowAccent}`, paddingBottom: '5px' }}>
                        Direct Contact
                    </h3>
                    
                    {/* FIXED: Removed asterisks and styled labels white/link blue */}
                    <p style={{ margin: '5px 0', color: whiteText }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>Email:</span> 
                        <Link href="mailto:chandarsingh@live.com" style={{ color: whiteText, textDecoration: 'none' }}>chandarsingh@live.com</Link>
                    </p>
                    <p style={{ margin: '5px 0', color: whiteText }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>Mobile:</span> +91 90827 66847
                    </p>
                    <p style={{ margin: '5px 0', color: whiteText }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>WhatsApp:</span> +91 90827 66847
                    </p>
                    <p style={{ margin: '5px 0', color: whiteText }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>LinkedIn:</span> 
                        <Link href="https://linkedin.com/in/chandarsingh-mehta-3232516" target="_blank" rel="noopener noreferrer" style={{ color: yellowAccent, textDecoration: 'none' }}>View Profile</Link>
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