// components/Methodology.js
import React from 'react';

const primaryColor = '#1f3e66'; 
const secondaryBgColor = '#e9f1fa'; 

const methodologySteps = [
    {
        letter: 'P',
        title: 'P: Strategic Plan & Design',
        coreFocus: 'Safety is Designed In',
        description: "We begin by integrating safety into your project's DNA, assessing risks from concept through detailed design. This proactive approach minimizes hazards, ensures regulatory compliance, and avoids costly fixes later.",
        keyServices: 'Risk Quantification, Life Safety Design, and HAZOP studies.',
        bgColor: '#e3f2fd' 
    },
    {
        letter: 'D',
        title: 'D: Execute & Implement',
        coreFocus: 'Policy to Practice',
        description: "We focus on establishing robust HSSEF Management Systems (like ISO 45001) and operational procedures. This stage converts strategic plans into measurable, standardized daily practice, supported by training and comprehensive documentation.",
        keyServices: 'SMS Implementation and Product Stewardship.',
        bgColor: '#cfe8fc' 
    },
    {
        letter: 'C',
        title: 'C: Audit & Check Assurance',
        coreFocus: 'Measurable Compliance',
        description: "Continuous auditing, monitoring, and performance benchmarking ensure your systems are effective and resilient. We perform rigorous compliance checks against local, national, and international standards, identifying gaps and measuring performance.",
        keyServices: 'Compliance Audits, Performance Benchmarking, and Incident Investigation.',
        bgColor: '#b2d9ff' 
    },
    {
        letter: 'A',
        title: 'A: Act for Continuous Improvement',
        coreFocus: 'Building Resilience',
        description: "This is the final loop where lessons learned from audits, incidents, and performance data are used to drive system enhancement. We prepare your organization for the unexpected, ensuring rapid recovery and organizational learning to future-proof safety culture.",
        keyServices: 'Crisis Resilience Planning and Technical Upgrades.',
        bgColor: '#94c8ff' 
    },
];

export default function Methodology() {
    return (
        <section id="methodology" style={{ padding: '80px 5%', backgroundColor: secondaryBgColor }}>
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5em', color: primaryColor, margin: '0 0 10px 0' }}>
                    Our Strategic Methodology
                </h2>
                <p style={{ fontSize: '1.1em', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
                    The Plan-Do-Check-Act (PDCA) Cycle for Safety Transformation
                </p>
            </div>
            
            {/* PDCA Steps Grid */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '20px', 
                maxWidth: '1200px', 
                margin: '0 auto' 
            }}>
                {methodologySteps.map((step, index) => (
                    <div 
                        key={index}
                        style={{
                            padding: '25px',
                            border: `1px solid ${step.bgColor}`,
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        <div style={{
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: primaryColor, 
                            marginBottom: '10px'
                        }}>
                            {step.letter}
                        </div>
                        <h3 style={{ color: primaryColor, fontSize: '1.2em', marginTop: 0, marginBottom: '5px' }}>
                            {step.title}
                        </h3>
                        <p style={{ color: primaryColor, fontWeight: 'bold', marginBottom: '10px', fontSize: '0.95em' }}>
                            Core Focus: {step.coreFocus}
                        </p>
                        <p style={{ color: '#555', fontSize: '0.9em', lineHeight: '1.4', flexGrow: 1 }}>
                            {step.description}
                        </p>
                        <div style={{ 
                            marginTop: '15px', 
                            paddingTop: '15px', 
                            borderTop: '1px solid #eee', 
                            fontSize: '0.85em', 
                            color: '#777' 
                        }}>
                            <strong>Key Services:</strong> {step.keyServices}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}