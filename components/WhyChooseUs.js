// components/WhyChooseUs.js
import React from 'react';

const primaryColor = '#1f3e66'; 
const accentColor = '#ffc107'; 
const lightBgColor = '#e9f1fa'; // Light background for cards

const cardData = [
    {
        icon: '🏆', 
        title: 'Unmatched Global Expertise & Leadership',
        description: "Our firm is founded and led by Mr. Chandarsingh Mehta, a global safety professional with over 34 years of international experience across diverse sectors. You don't just hire a consultant; you gain access to decades of strategic insight applied across Health, Safety, Security, Environment, Fire, and Risk Management (HSSEF). We bring proven solutions that work in any regulatory environment."
    },
    {
        icon: '🔗', 
        title: 'Strategic Integration: Safety is Built-In, Not Bolted On',
        description: "Unlike firms that offer retroactive fixes, our core philosophy is to embed safety at the design stage. We work across your entire business lifecycle, from concept and planning through governance, ensuring your systems are inherently safe and compliant. This proactive, transformative approach minimizes risk, prevents costly redesigns, and future-proofs your assets."
    },
    {
        icon: '📝', 
        title: 'Comprehensive, Practical Solutions',
        description: "We deliver solutions that are not only compliant but also practical and customized for your organization's unique challenges and goals. Our focus is on achieving a sustainable, continuously improving safety culture that is manageable, effective, and fully integrated into your operations, ensuring tangible results and protected reputation."
    },
    {
        icon: '💰', 
        title: 'Direct Impact on Business Value',
        description: "Our services are an investment that goes beyond saving money on fines or accidents. We help you unlock your business's true potential by: Safeguarding key assets (people, equipment, data); Enhancing operational efficiency through well-designed safety systems; Maintaining trust with regulators, stakeholders, and the public."
    }
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" style={{ padding: '80px 5%', backgroundColor: 'white' }}>
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5em', color: primaryColor, margin: 0 }}>
                    Why Choose InSafety Services?
                </h2>
                <p style={{ fontSize: '1.1em', color: '#555', maxWidth: '800px', margin: '10px auto 0' }}>
                    Choosing a safety partner isn't just about compliance — it's about strategic advantage. We transform your safety function into a driver of operational excellence.
                </p>
            </div>
            
            {/* Cards */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                gap: '30px', 
                maxWidth: '1200px', 
                margin: '0 auto' 
            }}>
                {cardData.map((card, index) => (
                    <div 
                        key={index}
                        style={{
                            padding: '30px',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            backgroundColor: lightBgColor,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                            transition: 'box-shadow 0.3s'
                        }}
                    >
                        <div style={{ fontSize: '2.5em', marginBottom: '15px' }}>
                            {card.icon}
                        </div>
                        <h3 style={{ color: primaryColor, fontSize: '1.4em', marginTop: 0 }}>
                            {card.title}
                        </h3>
                        <p style={{ color: '#555', fontSize: '0.95em', lineHeight: '1.5' }}>
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA BUTTON – using global CTA style */}
            <div style={{ textAlign: 'center', margin: '50px 0' }}>
                <a 
                    href="#contact-form-anchor"
                    className="cta-btn"
                >
                    Contact InSafety Services Today
                </a>
            </div>
        </section>
    );
}
