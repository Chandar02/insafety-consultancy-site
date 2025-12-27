// components/LeadershipSection.js

import Link from 'next/link';
import Image from 'next/image'; 

const specializations = [
    'Contractor Safety & High-Risk Workforce Management',
    'Contractor Safety & Supply Chain Risk Management',
    'Crisis, Emergency & Business Continuity Management',
    'Digital EHS/Safety Technology Implementation',
    'Emergency, Crisis & Incident Command Systems',
    'Environmental, Social, and Governance (ESG) Integration',
    'Executive Coaching, Training, and Wellbeing Programs',
    'Fire & Life Safety Engineering Governance',
    'Fleet, Transport & Journey Risk Management',
    'Global OHS Strategy & Governance',
    'HSSE Culture & Behavioral Safety Transformation',
    'Life Safety Code Advisory (NFPA 101 / NBC – Design, Audit & Retrofit)',
    'Regulatory Compliance & Management Systems (ISO 45001, ISO 14001, NFPA, NBC)',
    'Safety by Design / Prevention through Design',
    'Safety Governance for Large Infrastructure & Capital Projects',
    'Specialized Access & Complex Work-at-Height Solutions',
];

export default function LeadershipSection() {
    const primaryTextColor = '#333';
    const secondaryTextColor = '#666';
    const accentColor = '#007bff';
    const yellowAccent = '#ffc107';
    const lightGreyBackground = '#f8f8f8';

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
            <p style={{ fontSize: '1.15em', marginBottom: '60px', color: secondaryTextColor, fontWeight: '500', lineHeight: '1.5' }}>
                Chandarsingh Mehta<br/>
                Founder & Principal Consultant – Risk-Led HSSEF Transformation
            </p>

            {/* MAIN CONTENT GRID */}
            <div 
  style={{ 
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '50px',
    textAlign: 'left',
    alignItems: 'start'
  }}
>
                {/* Left Column: Biography */}
                <div>
                    <h3 style={{ fontSize: '1.8em', marginBottom: '15px', color: accentColor }}>
                        Global Leadership in Risk, Safety & Resilience
                    </h3>
                    
                    {/* PROFILE IMAGE */}
                    <div style={{ 
  margin: '0 auto 20px',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  overflow: 'hidden'
}}>

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

                    <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '18px', fontSize: '1.05em' }}>
                        A globally recognized HSSEF leader, Chandarsingh Mehta has led enterprise-wide safety, risk, and operational resilience transformations across highly regulated and high-risk industries.
                    </p>
                    <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '18px', fontSize: '1.05em' }}>
                        Over a <strong>34+ year international career</strong>, he has advised and led safety programs for multinational organizations including <strong>UBS, Credit Suisse, Maersk, IBM, Nokia</strong>, and leading manufacturing, logistics, chemical, and infrastructure enterprises.
                    </p>
                    <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '18px', fontSize: '1.05em' }}>
                        His experience spans strategy, design, operations, crisis response, and regulatory engagement—ensuring leadership decisions translate into real risk reduction where work is actually performed.
                    </p>
                    <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '0', fontSize: '1.05em' }}>
                        His work across <strong>APAC, EMEA, and global markets</strong> delivers solutions that perform consistently across regulatory, cultural, and operational environments.
                    </p>
                </div>

                {/* Right Column: Specializations */}
                <div>
                    <h3 style={{ fontSize: '1.8em', marginBottom: '15px', color: accentColor }}>
                        Areas of Leadership & Specialization
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '20px' }}>
                        {specializations.map((item, index) => (
                            <li 
                                key={index} 
                                style={{ 
                                    marginBottom: '12px', 
                                    paddingLeft: '30px',
                                    position: 'relative', 
                                    color: '#555', 
                                    lineHeight: '1.65',
                                    fontSize: '1.02em'
                                }}
                            >
                                <span style={{ 
                                    position: 'absolute', 
                                    left: 0, 
                                    color: accentColor, 
                                    fontSize: '1.2em' 
                                }}>
                                    ✅
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    
                    {/* Tone Alignment Line */}
                    <p style={{ 
                        fontSize: '1.02em', 
                        color: '#666', 
                        lineHeight: '1.65',
                        marginTop: '18px',
                        paddingTop: '18px',
                        borderTop: `1px solid #e0e0e0`,
                        fontWeight: '500'
                    }}>
                        Expertise spanning strategic intent, system translation, and frontline execution across the full risk lifecycle.
                    </p>
                </div>
            </div>
            
            {/* COMPANY LOGOS */}
            <div style={{ 
                width: '100%', 
                maxWidth: '1200px',
                margin: '0 auto', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                paddingTop: '60px', 
                paddingBottom: '30px',
                textAlign: 'center',
            }}>
                
                <h4 style={{ 
                    fontSize: '1.4em', 
                    color: primaryTextColor, 
                    marginBottom: '20px', 
                    fontWeight: '600',
                    borderBottom: `2px solid ${yellowAccent}`,
                    paddingBottom: '5px' 
                }}>
                    Trusted by Leading Global Organizations
                </h4>
                
                <div style={{ 
                    width: '100%', 
                    maxWidth: '900px', 
                    height: 'auto', 
                    padding: '20px', 
                    backgroundColor: '#ffffff',
                    borderRadius: '8px', 
                    margin: '0 auto',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
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

            {/* CONTACT BLOCK */}
            <div 
                style={{ 
                    marginTop: '60px', 
                    padding: '30px', 
                    backgroundColor: lightGreyBackground,
                    borderRadius: '8px', 
                    border: `1px solid ${accentColor}`,
                    maxWidth: '800px',
                    margin: '60px auto 0',
                    textAlign: 'center'
                }}
            >
                <h3 style={{ color: primaryTextColor, marginBottom: '15px' }}>
                    Connect Directly
                </h3>
                <p style={{ margin: '5px 0', color: '#555', lineHeight: '1.7', fontSize: '1.02em' }}>
                    <strong>Email:</strong> <Link href="mailto:chandarsingh@live.com" style={{ color: accentColor, textDecoration: 'none' }}>chandarsingh@live.com</Link>
                </p>
                <p style={{ margin: '5px 0', color: '#555', lineHeight: '1.7', fontSize: '1.02em' }}>
                    <strong>Mobile:</strong> +91 90827 66847
                </p>
                <p style={{ margin: '5px 0 20px 0', color: '#555', lineHeight: '1.7', fontSize: '1.02em' }}>
                    <strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/chandarsingh-mehta-3232516" target="_blank" rel="noopener noreferrer" style={{ color: accentColor, textDecoration: 'none' }}>linkedin.com/in/chandarsingh-mehta-3232516</Link>
                </p>
                
                {/* CTA Button */}
                <a 
                    href="#contact-form-anchor"
                    className="cta-btn"
                    style={{
                        display: 'inline-block',
                        marginTop: '10px'
                    }}
                >
                    Start a Risk Conversation
                </a>
            </div>
        </section>
    );
}