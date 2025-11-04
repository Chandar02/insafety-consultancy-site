// components/LeadershipSection.js
import Link from 'next/link';
// Import the Image component from Next.js for optimized images
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
    const primaryTextColor = '#333';
    const secondaryTextColor = '#666';
    // Using a yellow accent for contrast in the heading underline
    const accentColor = '#007bff'; 
    const yellowAccent = '#ffc107'; 

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

            {/* 1. MAIN CONTENT GRID (REMAINS THE SAME) */}
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
                    
                    {/* PROFILE IMAGE INTEGRATION */}
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

                    {/* BOLD TEXT FIXES */}
                    <p style={{ lineHeight: '1.7', color: secondaryTextColor, marginBottom: '20px' }}>
                        A recognized leader in occupational health, safety, and environment, Mr. Mehta has led enterprise-wide EHS transformations for multinational organizations such as <strong>UBS/Credit Suisse, Maersk, IBM, and Nokia</strong> over a <strong>34+ year international career</strong>.
                    </p>
                    <p style={{ lineHeight: '1.7', color: secondaryTextColor, marginBottom: '20px' }}>
                        His global experience across <strong>APAC and AMEA</strong> spans chemicals, logistics, manufacturing, IT, and banking sectors, bringing proven solutions that work in any regulatory environment.
                    </p>

                    {/* MOVED: Removed the old logo block from here */}

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
                                    paddingLeft: '20px', 
                                    position: 'relative', 
                                    color: primaryTextColor 
                                }}
                            >
                                <span style={{ position: 'absolute', left: 0, color: accentColor }}>
                                    ✅
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* 2. COMPANY LOGO SECTION (FULL WIDTH) - INSERTED HERE */}
            {/* This block is OUTSIDE the grid, allowing it to be full-width and centered */}
            <div style={{ 
                width: '100%', 
                maxWidth: '1200px', // Match main grid width
                margin: '0 auto', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                paddingTop: '60px', 
                paddingBottom: '30px',
                textAlign: 'center'
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
                
                {/* Image Container for Next/Image */}
                <div style={{ 
                    width: '100%', 
                    maxWidth: '900px', // Image area, wider than the 600px of the old container
                    height: 'auto', 
                    padding: '20px', 
                    backgroundColor: '#f8f8f8', // Added a slight background for contrast
                    borderRadius: '8px', 
                    margin: '0 auto' 
                }}>
                    <Image 
                        src="/Companies.png" // Confirmed file name/path
                        alt="Companies Trusted By" 
                        layout="responsive"
                        width={900} // Increase width for larger display area
                        height={300} // Adjust height accordingly
                        objectFit="contain"
                    />
                </div>
            </div>

            {/* 3. CONTACT INFORMATION BLOCK (REMAINS THE SAME) */}
            <div 
                style={{ 
                    marginTop: '60px', 
                    padding: '30px', 
                    backgroundColor: '#f8f8f8', 
                    borderRadius: '8px', 
                    border: `1px solid ${accentColor}`,
                    maxWidth: '800px',
                    margin: '60px auto 0'
                }}
            >
                <h3 style={{ color: primaryTextColor, marginBottom: '15px' }}>
                    Connect Directly
                </h3>
                {/* BOLD TEXT FIXES */}
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