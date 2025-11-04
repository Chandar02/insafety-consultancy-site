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
    const accentColor = '#007bff';

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

            <div 
                style={{ 
                    maxWidth: '1200px', 
                    margin: '0 auto',
                    display: 'grid', 
                    gridTemplateColumns: '3fr 2fr', 
                    gap: '50px',
                    textAlign: 'left',
                    alignItems: 'start' // Align items to the top
                }}
            >
                {/* Left Column: Biography & Experience */}
                <div>
                    <h3 style={{ fontSize: '1.8em', marginBottom: '15px', color: accentColor }}>
                        Unmatched Global Experience
                    </h3>
                    
                    {/* PROFILE IMAGE INTEGRATION - Using standard HTML <img> for easier floating/circular styling and control */}
                    <div style={{ float: 'right', marginLeft: '25px', marginBottom: '15px', width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden' }}>
                        <img 
                            src="/Chandar Profile Image.jpg" 
                            alt="Chandar Profile Image" 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover', // This ensures it fills the container without stretching
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

                    {/* COMPANIES LOGO INTEGRATION */}
                    <h4 style={{ fontSize: '1.4em', color: primaryTextColor, marginBottom: '15px', marginTop: '30px' }}>
                        Trusted by Leading Global Organizations
                    </h4>
                    <div style={{ width: '100%', maxWidth: '600px', height: 'auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                        <Image 
                            src="/companies.png" 
                            alt="Companies Trusted By" 
                            layout="responsive" // Image scales with its parent container
                            width={600} // Actual width of the image
                            height={200} // Actual height of the image (adjust as needed for aspect ratio)
                            objectFit="contain" // Ensures the entire image is visible within the box
                        />
                    </div>
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

            {/* Contact Information Block (Full Width) */}
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

