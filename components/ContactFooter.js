// components/ContactFooter.js

import Link from 'next/link';
import ContactForm from './ContactForm';

const primaryColor = '#1e3a62'; 
const secondaryColor = '#2a4d79'; 
const whiteText = '#ffffff';
const yellowAccent = '#ffc107'; 
const linkColor = '#80bfff';

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '50px',
    textAlign: 'left'
}}>

                
                {/* Column 1: Header Text */}
                <div>
                    <h3 style={{ fontSize: '1.8em', marginBottom: '8px', color: whiteText, fontWeight: '700' }}>
                        InSafety Services
                    </h3>
                    <p style={{ 
                        fontSize: '0.88em', 
                        color: yellowAccent, 
                        marginBottom: '22px', 
                        lineHeight: '1.3',
                        fontWeight: '500'
                    }}>
                        SOLUTIONS FOR TODAY'S CHALLENGES, ASSURANCE FOR TOMORROW
                    </p>
                    
                    <p style={{ lineHeight: '1.7', color: whiteText, marginBottom: '20px', fontSize: '1.02em' }}>
                        InSafety Services provides strategic HSSEF expertise across the globe, ensuring 
                        <span style={{ fontWeight: 'bold', color: yellowAccent }}> safety is built-in, not bolted on.</span>
                    </p>
                    
                    <p style={{ fontWeight: 'bold', color: yellowAccent, marginBottom: '8px', fontSize: '1.02em' }}>
                        Address:
                    </p>
                    <p style={{ color: whiteText, lineHeight: '1.6', fontSize: '0.98em' }}>
                        B-2/502, Green Acres-2 CHS Ltd, Wagbhil Road, <br/>
                        Kavesar, Thane-Maharashtra-400615
                    </p>
                </div>

                {/* Column 2: Contact Form */}
                <div style={{ backgroundColor: secondaryColor, padding: '28px', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: whiteText, borderBottom: `2px solid ${yellowAccent}`, paddingBottom: '8px' }}> 
                        Start a Risk Conversation
                    </h3>
                    <p style={{ color: whiteText, marginBottom: '20px', fontSize: '1.02em', lineHeight: '1.6' }}>
                        Get in touch for a confidential consultation on your risk and compliance challenges.
                    </p>

                    <ContactForm />
                </div>

                {/* Column 3: Direct Contact & Compliance */}
                <div>
                    <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: whiteText, borderBottom: `2px solid ${yellowAccent}`, paddingBottom: '8px' }}>
                        Contact US
                    </h3>
                    
                    <p style={{ margin: '10px 0', color: whiteText, fontSize: '1.02em', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>Email:</span> 
                        <Link href="mailto:chandarsingh@live.com" style={{ color: linkColor, textDecoration: 'none' }}>chandarsingh@live.com</Link>
                    </p>
                    <p style={{ margin: '10px 0', color: whiteText, fontSize: '1.02em', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>Mobile:</span> +91 90827 66847
                    </p>
                    <p style={{ margin: '10px 0', color: whiteText, fontSize: '1.02em', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>WhatsApp:</span> +91 90827 66847
                    </p>
                    <p style={{ margin: '10px 0', color: whiteText, fontSize: '1.02em', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold', color: whiteText, marginRight: '5px' }}>LinkedIn:</span> 
                        <Link href="https://linkedin.com/in/chandarsingh-mehta-3232516" target="_blank" rel="noopener noreferrer" style={{ color: linkColor, textDecoration: 'none' }}>View Profile</Link>
                    </p>

                    <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: whiteText, borderBottom: `2px solid ${yellowAccent}`, paddingBottom: '8px', marginTop: '35px' }}>
                        Regulatory Compliances
                    </h3>
                    <p style={{ margin: '8px 0', color: whiteText, fontSize: '0.98em', lineHeight: '1.6' }}>
                        Shop & Establishment License: 2510 2003 2043 0562
                    </p>
                    <p style={{ margin: '8px 0', color: whiteText, fontSize: '0.98em', lineHeight: '1.6' }}>
                        GSTIN: 27 ABXPM 5408 L1 ZK
                    </p>
                    <p style={{ margin: '8px 0', color: whiteText, fontSize: '0.98em', lineHeight: '1.6' }}>
                        Udyam-MSME: MH-33-0070 049
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '35px', borderTop: `1px solid ${secondaryColor}`, paddingTop: '18px' }}>
                <p style={{ fontSize: '0.9em', color: whiteText, lineHeight: '1.5' }}>
                    &copy; 2025 InSafety Services. All rights reserved.
                </p>
            </div>
        </footer>
    );
}