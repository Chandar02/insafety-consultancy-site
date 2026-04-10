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
        bgColor: '#e3f2fd',
        // NEW: Professional Clipboard/Blueprint Icon
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        )
    },
    {
        letter: 'D',
        title: 'D: Execute & Implement',
        coreFocus: 'Translating Risk Controls into Daily Operations',
        description: "We implement HSSEF management systems, procedures, supervision models, and training that translate strategy into consistent operational practice — across employees, contractors, and transport operations.",
        keyServices: 'Safety Management System (SMS), Permit to Work System (PTW), Work at Height, Transportation Safety.',
        bgColor: '#cfe8fc',
        // NEW: Professional Gears/Execution Icon
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
        )
    },
    {
        letter: 'C',
        title: 'C: Audit & Check Assurance',
        coreFocus: 'Risk Assurance & Performance Verification',
        description: "We verify that risk controls are working as intended through audits, inspections, performance benchmarking, and incident analysis across sites, assets, and operations.",
        keyServices: 'Safety Audits, Incident Management, Performance Benchmarking.',
        bgColor: '#b2d9ff',
        // NEW: Professional Audit/Checklist Icon
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
        )
    },
    {
        letter: 'A',
        title: 'A: Act for Continuous Improvement',
        coreFocus: 'Resilience, Recovery & Learning',
        description: "We strengthen organisational resilience by converting incidents, audits, and disruptions into system improvements — ensuring rapid recovery, stronger controls, and sustained risk reduction.",
        keyServices: 'Safety Leadership, Cultural Transformation, Training & Education, Emergency & Crisis Management.',
        bgColor: '#94c8ff',
        // NEW: Professional Refresh/Continuous Improvement Icon
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
        )
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
                        {/* POLISHED AND ALIGNED: Icon and Title side-by-side */}
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', /* Aligns icon to the top so it doesn't float down if title is 3 lines */
                            gap: '16px', 
                            marginBottom: '18px',
                            minHeight: '80px' /* ALIGNMENT FIX 1: Forces all title rows to reserve the same space */
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '46px',
                                height: '46px',
                                backgroundColor: primaryColor,
                                color: 'white',
                                borderRadius: '8px',
                                flexShrink: 0, /* Prevents the box from squishing */
                                boxShadow: '0 4px 6px rgba(31, 62, 102, 0.2)',
                                marginTop: '2px' /* Tweaks the icon to align perfectly with the first line of text */
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ color: primaryColor, fontSize: '1.15em', margin: 0, fontWeight: '700', lineHeight: '1.3' }}>
                                {step.title}
                            </h3>
                        </div>

                        {/* Softened Subtitle - ALIGNED */}
                        <p style={{ 
                            color: '#2a4d79', 
                            fontWeight: '600', 
                            marginBottom: '15px', 
                            fontSize: '0.92em',
                            minHeight: '45px' /* ALIGNMENT FIX 2: Forces all Core Focus subtitles to reserve space for 2 lines */
                        }}>
                            Core Focus: <span style={{ fontWeight: 'normal', color: '#555' }}>{step.coreFocus}</span>
                        </p>
                        
                        <p style={{ color: '#555', fontSize: '1.02em', lineHeight: '1.7', margin: '0' }}>
                            {/* REMOVED flexGrow: 1 from this line */}
                            {step.description}
                        </p>
                        <div style={{ 
                            marginTop: 'auto', 
                            paddingTop: '18px', 
                            borderTop: '1px solid #eee', 
                            fontSize: '0.92em', 
                            color: '#777',
                            lineHeight: '1.6',
                            minHeight: '190px' /* Increased from 130px to 190px */
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