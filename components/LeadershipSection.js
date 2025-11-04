// components/LeadershipSection.js

import Link from 'next/link';
import Image from 'next/image'; 

const specializations = [
    'Global OHS Strategy & Governance',
    'HSSE Culture & Behavioral Safety Transformation',
    'Regulatory Compliance & Management Systems (ISO 45001, ISO 14001, NFPA, NBC)',
    'Environmental, Social, and Governance (ESG) Integration',
    'Digital EHS/Safety Technology Implementation',
    'Safety by Design / Prevention through Design',
    'Crisis, Emergency & Business Continuity Management',
    'Executive Coaching, Training, and Wellbeing Programs',
    'Contractor Safety & Supply Chain Risk Management',
    'Specialized Access & Complex Work-at-Height Solutions',
];

export default function LeadershipSection() {
    // Define colors once for clean maintenance
    const primaryTextColor = '#333';
    const secondaryTextColor = '#666';
    const accentColor = '#007bff'; // Blue
    const yellowAccent = '#ffc107'; // Yellow for underlines/accents
    const lightGreyBackground = '#f8f8f8'; // Light background for the contact box

    return (
        <section 
            className="leadership-section" 
            style={{ 
                padding: '80px 5%', 
                backgroundColor: '#fff', 
                textAlign: 'center'
            }}
        >
            <h2 style={{ fontSize: '2.5em', marginBottom: '10px', color: primaryTextColor }}>
                Meet Our Principal Consultant
            </h2>
            <p style={{ fontSize: '1.2em', marginBottom: '60px', color: secondaryTextColor }}>
                Chandarsingh Mehta - Founder and Principal Consultant, InSafety Services
            </p>

            {/* 1. MAIN CONTENT GRID (3fr / 2fr) */}
            <div 
                style={{ 
                    maxWidth: '1200px', 
                    margin: '0 auto',
                    display: 'grid', 
                    gridTemplateColumns: '3fr 2fr', 
                    gap: '50px',
                    textAlign: 'left',
                    alignItems: 'start'
                }}
            >
                {/* Left Column: Biography & Experience */}
                <div>
                    <h3 style={{ fontSize: '1.8em', marginBottom: '15px', color: accentColor }}>
                        Unmatched Global Experience
                    </h3>
                    
                    {/* PROFILE IMAGE INTEGRATION - Using standard HTML <img> */}
                    <div style={{ float: 'right', marginLeft: '25px', marginBottom: '15px', width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden' }}>
                        <img 
                            src="/Chandar Profile Image.jpg" 
                            alt="Chandar Profile Image" 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover', 
                                borderRadius: '50%'
                            }}
                        />
                    </div>

                    <p style={{ lineHeight: '1.7', color: secondaryTextColor, marginBottom: '20px' }}>
                        A recognized leader in occupational health, safety, and environment, Mr. Mehta has led enterprise-wide EHS transformations for multinational organizations such as <strong>UBS/Credit Suisse, Maersk, IBM, and Nokia</strong> over a <strong>34+ year international career</strong>.
                    </p>
                    <p style={{ lineHeight: '1.7', color: secondaryTextColor, marginBottom: '20px' }}>
                        His global experience across <strong>APAC and AMEA</strong> spans chemicals, logistics, manufacturing, IT, and banking sectors, bringing proven solutions that work in any regulatory environment.
                    </p>
                </div>

                {/* Right Column: Specializations */}
                <div>
                    <h3 style={{ fontSize: '1.8em', marginBottom: '15px', color: accentColor }}>
                        Areas of Specialization
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        {specializations.map((item, index) => (
                            <li 
                                key={index} 
                                style={{ 
                                    marginBottom: '10px', 
                                    paddingLeft: '30px', // INCREASED PADDING to create space
                                    position: 'relative', 
                                    color: primaryTextColor,
                                    lineHeight: '1.4' // Added line height for better spacing
                                }}
                            >
                                <span style={{ position: 'absolute', left: 0, color: accentColor, fontSize: '1.2em' }}>
                                    ✅
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* 2. COMPANY LOGO SECTION (FULL WIDTH & CENTERED) - CLEAN WHITE BACKGROUND */}
            <div style={{ 
                width: '100%', 
                maxWidth: '1200px', // Matches the width of the main content grid
                margin: '0 auto', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                paddingTop: '60px', 
                paddingBottom: '30px',
                textAlign: 'center',
            }}>
                
                {/* Heading: Neat and centered look */}
                <h4 style={{ 
                    fontSize: '1.4em', 
                    color: primaryTextColor, 
                    marginBottom: '20px', 
                    fontWeight: '600',
                    borderBottom: `2px solid ${yellowAccent}`, // Clean underline
                    paddingBottom: '5px' 
                }}>
                    Trusted by Leading Global Organizations
                </h4>
                
                {/* Image Container: Explicitly white background to fix "patchy grey" */}
                <div style={{ 
                    width: '100%', 
                    maxWidth: '900px', 
                    height: 'auto', 
                    padding: '20px', 
                    backgroundColor: '#ffffff', // FORCES CLEAN WHITE BACKGROUND
                    borderRadius: '8px', 
                    margin: '0 auto',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Optional: subtle shadow for lift
                }}>
                    <Image 
                        src="/Companies.png" 
                        alt="Logos of companies trusted by InSafety Services" 
                        layout="responsive"
                        width={900} 
                        height={300} 
                        objectFit="contain"
                    />
                </div>
            </div>

            {/* 3. CONTACT INFORMATION BLOCK (FULL WIDTH & CENTERED) - LIGHT GREY BACKGROUND */}
            <div 
                style={{ 
                    marginTop: '60px', 
                    padding: '30px', 
                    backgroundColor: lightGreyBackground, // LIGHT GREY BACKGROUND
                    borderRadius: '8px', 
                    border: `1px solid ${accentColor}`,
                    maxWidth: '800px',
                    margin: '60px auto 0', // Centers the block itself
                    textAlign: 'center' // Centers the text content inside
                }}
            >
                <h3 style={{ color: primaryTextColor, marginBottom: '15px' }}>
                    Connect Directly
                </h3>
                <p style={{ margin: '5px 0', color: secondaryTextColor }}>
                    <strong>Email:</strong> <Link href="mailto:chandarsingh@live.com" style={{ color: accentColor, textDecoration: 'none' }}>chandarsingh@live.com</Link>
                </p>
                <p style={{ margin: '5px 0', color: secondaryTextColor }}>
                    <strong>Mobile:</strong> +91 90827 66847
                </p>
                <p style={{ margin: '5px 0', color: secondaryTextColor }}>
                    <strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/chandarsingh-mehta-3232516" target="_blank" rel="noopener noreferrer" style={{ color: accentColor, textDecoration: 'none' }}>linkedin.com/in/chandarsingh-mehta-3232516</Link>
                </p>
            </div>
        </section>
    );
}