// components/WhyChooseUs.js
import React from 'react';

const primaryColor = '#1f3e66'; 
const accentColor = '#ffc107'; 
const lightBgColor = '#e9f1fa';

const cardData = [
    {
        title: 'Unmatched Global Expertise & Leadership',
        description:
            "InSafety Services is founded and led by Mr. Chandarsingh Mehta, a global HSE leader with over 34 years of experience across high-risk, highly regulated, and operationally complex environments. Our leadership experience spans strategy, design, operations, crisis response, and regulatory engagement — ensuring decisions made at the top translate into protection where work actually happens.",
    },
    {
        title: 'Strategic Integration: Safety is Built-In, Not Bolted On',
        description:
            "We embed safety and risk at the earliest possible stage — strategy, policy, and design — while remaining equally effective in operational, corrective, and post-incident environments. From concept and planning to governance, operations, and audits, our approach reduces systemic risk, avoids costly rework, and strengthens long-term resilience.",
    },
    {
        title: 'Standard Where Required. Customised Where It Matters.',
        description:
            "We deliver proven, industry-accepted HSE frameworks — and tailor their depth, focus, and execution to your business, risk profile, and operating reality. Whether implementing standard compliance programs or designing bespoke risk controls, our solutions are practical, scalable, and grounded in how work is actually performed.",
    },
    {
        title: 'Direct Impact on Business & Risk Outcomes',
        description: null,
        listItems: [
            'Reducing high-consequence safety and operational risks',
            'Protecting people, assets, and business continuity',
            'Improving operational efficiency and decision quality',
            'Strengthening credibility with regulators, clients, and stakeholders'
        ]
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" style={{ padding: '80px 5%', backgroundColor: 'white' }}>
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5em', color: primaryColor, margin: '0 0 20px 0' }}>
                    Why Choose InSafety Services?
                </h2>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.08em', color: '#555', lineHeight: '1.7', marginBottom: '12px' }}>
                        Choosing a safety partner is not just about compliance — it is about how risk is understood, designed out, managed, and controlled across your business.
                    </p>
                    <p style={{ fontSize: '1.08em', color: '#555', lineHeight: '1.7', marginBottom: '0' }}>
                        Organisations choose InSafety Services because we connect leadership intent, regulatory expectations, and frontline realities into one integrated, risk-led HSE approach.
                    </p>
                </div>
            </div>

            {/* Cards Grid */}
            <div 
                className="two-column"
                style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '30px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                {cardData.map((card, index) => (
                    <div 
    key={index}
    className="why-card"
    style={{
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: lightBgColor,
        display: 'flex',
        flexDirection: 'column'
    }}
>
                        <h3 
                            style={{ 
                                color: primaryColor, 
                                fontSize: '1.4em', 
                                marginTop: 0, 
                                marginBottom: '18px',
                                fontWeight: '600'
                            }}
                        >
                            {card.title}
                        </h3>

                        {/* Regular description or list */}
                        {card.description ? (
                            <p style={{ 
                                color: '#555', 
                                fontSize: '1.05em', 
                                lineHeight: '1.7', 
                                margin: '0' 
                            }}>
                                {card.description}
                            </p>
                        ) : (
                            <div>
                                <p style={{ 
                                    color: '#555', 
                                    fontSize: '1.05em', 
                                    lineHeight: '1.7', 
                                    marginBottom: '12px' 
                                }}>
                                    Our work delivers measurable value by:
                                </p>
                                <ul style={{ 
                                    margin: '0', 
                                    paddingLeft: '20px',
                                    color: '#555',
                                    fontSize: '1.05em',
                                    lineHeight: '1.7'
                                }}>
                                    {card.listItems.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '10px' }}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Closing Line */}
            <div style={{ 
                textAlign: 'center', 
                maxWidth: '950px', 
                margin: '50px auto 40px',
                padding: '25px 30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px'
            }}>
                <p style={{ 
                    fontSize: '1.08em', 
                    color: '#555', 
                    lineHeight: '1.7', 
                    margin: '0',
                    fontWeight: '500'
                }}>
                    We operate across the full risk spectrum — from boardroom decisions to frontline execution — ensuring risk is controlled where it is created and where it is experienced.
                </p>
            </div>

            {/* CTA Button */}
            <div style={{ textAlign: 'center', margin: '0' }}>
                <a 
                    href="#contact-form-anchor"
                    className="cta-btn"
                >
                    Start a Risk Conversation
                </a>
            </div>
        </section>
    );
}