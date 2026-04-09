// components/Methodology.js
import React from 'react';

const primaryColor = '#1f3e66'; 
const secondaryBgColor = '#e9f1fa'; 

const methodologySteps = [
    {
        letter: 'P',
        title: 'P: Strategic Plan & Design',
        coreFocus: 'Risk is Designed Out Early',
        description: "We integrate safety and risk into your project's DNA, assessing exposure from concept through detailed design and early decision-making. This approach reduces high-consequence risk, ensures regulatory compliance, and prevents costly retrofits later.",
        keyServices: 'Safety by Design, Life Safety Code (NFPA-101 and NBC) Design & Audit, Risk Management (QRA & HAZOP), Process Safety Management (PSM).',
        bgColor: '#e3f2fd' 
    },
    {
        letter: 'D',
        title: 'D: Execute & Implement',
        coreFocus: 'Translating Risk Controls into Daily Operations',
        description: "We implement HSSEF management systems, procedures, supervision models, and training that translate strategy into consistent operational practice — across employees, contractors, and transport operations.",
        keyServices: 'Safety Management System (SMS), Permit to Work System (PTW), Work at Height, Transportation Safety.',
        bgColor: '#cfe8fc' 
    },
    {
        letter: 'C',
        title: 'C: Audit & Check Assurance',
        coreFocus: 'Risk Assurance & Performance Verification',
        description: "We verify that risk controls are working as intended through audits, inspections, performance benchmarking, and incident analysis across sites, assets, and operations.",
        keyServices: 'Safety Audits, Incident Management, Performance Benchmarking.',
        bgColor: '#b2d9ff' 
    },
    {
        letter: 'A',
        title: 'A: Act for Continuous Improvement',
        coreFocus: 'Resilience, Recovery & Learning',
        description: "We strengthen organisational resilience by converting incidents, audits, and disruptions into system improvements — ensuring rapid recovery, stronger controls, and sustained risk reduction.",
        keyServices: 'Safety Leadership, Cultural Transformation, Training & Education, Emergency & Crisis Management.',
        bgColor: '#94c8ff' 
    },
];

export default function Methodology() {
    return (
        <section id="methodology" style={{ padding: '80px 5%', backgroundColor: secondaryBgColor }}>
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5em', color: primaryColor, margin: '0 0 15px 0' }}>
                    Our Strategic Methodology
                </h2>
                <p style={{ fontSize: '1.15em', color: '#555', fontWeight: '500', margin: '0 auto 10px', maxWidth: '900px', lineHeight: '1.6' }}>
                    A Risk-Led, End-to-End Approach to HSSEF Transformation
                </p>
                <p style={{ fontSize: '1.08em', color: '#666', margin: '0 auto', maxWidth: '900px', lineHeight: '1.7' }}>
                    From leadership intent and design decisions to frontline execution, incident response, and continuous improvement.
                </p>
            </div>
            
            {/* PDCA Steps Grid */}
            <div style={{ 
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto 50px'
}}>

                {methodologySteps.map((step, index) => (
                    <div 
                        key={index}
                        style={{
                            padding: '28px',
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
                            marginBottom: '12px'
                        }}>
                            {step.letter}
                        </div>
                        <h3 style={{ color: primaryColor, fontSize: '1.2em', marginTop: 0, marginBottom: '10px', fontWeight: '600' }}>
                            {step.title}
                        </h3>
                        <p style={{ color: primaryColor, fontWeight: 'bold', marginBottom: '14px', fontSize: '0.98em' }}>
                            Core Focus: {step.coreFocus}
                        </p>
                        <p style={{ color: '#555', fontSize: '1.02em', lineHeight: '1.7', flexGrow: 1, margin: '0' }}>
                            {step.description}
                        </p>
                        <div style={{ 
                            marginTop: '18px', 
                            paddingTop: '18px', 
                            borderTop: '1px solid #eee', 
                            fontSize: '0.92em', 
                            color: '#777',
                            lineHeight: '1.6'
                        }}>
                            <strong>Key Services:</strong> {step.keyServices}
                        </div>
                    </div>
                ))}
            </div>

            {/* Closing Line */}
            <div style={{ 
                textAlign: 'center', 
                maxWidth: '950px', 
                margin: '0 auto',
                padding: '28px 35px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
                <p style={{ 
                    fontSize: '1.08em', 
                    color: '#555', 
                    lineHeight: '1.7', 
                    margin: '0',
                    fontWeight: '500'
                }}>
                    This methodology allows us to operate across the full risk spectrum — from boardroom decisions to frontline exposure — managing risk where it is created and where it is experienced.
                </p>
            </div>
        </section>
    );
}