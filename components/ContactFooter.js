// components/ContactFooter.js
// This file is a Server Component.

import Link from 'next/link';
import ContactForm from './ContactForm'; // <-- Imports the client form component

// --- Define Colors and Styles (for the layout only) ---
const primaryColor = '#1e3a62'; 
const secondaryColor = '#2a4d79'; 
const whiteText = '#ffffff';
const yellowAccent = '#ffc107'; 
const linkColor = '#80bfff'; 
// ---------------------------------------------------

export default function ContactFooter() {

    return (
        <footer 
            id="contact-form-anchor" 
            style={{ 
                backgroundColor: primaryColor, 
                color: whiteText, 
                padding: '50px 5%', 
                borderTop: '5px solid #007bff'
            }}
        >
            <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto', 
                display: 'grid', 
                gridTemplateColumns: '1fr 1.2fr 1fr',
                gap: '50px', 
                textAlign: 'left' 
            }}>
                
                {/* Column 1: Header Text */}
                <div>
                    <h3 style={{ fontSize: '1.8em', marginBottom: '5px', color: whiteText, fontWeight: '700' }}>
                        InSafety Services
                    </h3>
                    <p style={{ 
                        fontSize: '0.85em', 
                        color: yellowAccent, 
                        marginBottom: '20px', 
                        lineHeight: '1.2' 
                    }}>
                        SOLUTIONS FOR TODAY'S CHALLENGES, ASSURANCE FOR TOMORROW
                    </p>
                    
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

                {/* Column 2: Contact Form (Renders the isolated client component) */}
                <div style={{ backgroundColor: secondaryColor, padding: '25px', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.4em', marginBottom: '15px', color: whiteText, borderBottom: `2px solid ${yellowAccent}`, paddingBottom: '5px` }}>
                        Contact InSafety Services Today
                    </h3>
                    <p style={{ color: whiteText, marginBottom: '20px', fontSize: '0.9em' }}>
                        Get in touch for a confidential consultation on your risk and compliance challenges.
                    </p>

                    <ContactForm />
                </div>

                {/* Column 3: Direct Contact & Compliance */}
                <div>
                    <h3 style={{ fontSize: '1.4em', marginBottom: '15px', color: whiteText, borderBottom: `2px solid ${yellowAccent}`, paddingBottom: '5px` }}>
                        Contact US
                    </h3>
                    
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
                        Request a Free Compliance Review
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