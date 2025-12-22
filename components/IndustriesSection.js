// components/IndustriesSection.js
"use client"; 

import { useState } from 'react';
import AccordionItem from './AccordionItem'; 

export default function IndustriesSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const primaryColor = '#1f3e66';
    const accentColor = '#007bff';
    
    // Helper component to format the detailed bullet points
    const DetailedIndustryList = ({ items, note }) => (
        <div>
            <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '20px', 
                margin: '0 0 15px 0', 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px'
            }}>
                {items.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.98em', color: '#555', lineHeight: '1.65' }}>{item}</li>
                ))}
            </ul>
            {note && (
                <div style={{ 
                    marginTop: '15px', 
                    padding: '12px 15px', 
                    backgroundColor: '#f8f9fa', 
                    borderLeft: `3px solid ${accentColor}`,
                    borderRadius: '4px'
                }}>
                    <p style={{ fontSize: '0.95em', color: '#666', margin: '0', fontStyle: 'italic', lineHeight: '1.6' }}>
                        <strong>Note:</strong> {note}
                    </p>
                </div>
            )}
        </div>
    );

    // Risk-Based Industry Clusters
    const industriesData = [
        { 
            title: '1. High-Hazard & Highly Regulated Industries',
            subtitle: 'Top priority section',
            industries: [
                'Oil & Gas (Upstream, Midstream, Downstream)',
                'Petrochemical Refineries & Distillation Units',
                'Chemical & Specialty Chemical Manufacturing',
                'Industrial Gas Manufacturing',
                'Power Plants (Thermal, Nuclear, Hydro)',
                'Mining (Open Cast & Underground)',
                'Ammunition Depots, Explosives & Defense Installations'
            ]
        },
        { 
            title: '2. Complex Built Environments & Infrastructure',
            subtitle: 'Design-led risk environments',
            industries: [
                'Airports, ATC Towers & Cargo Terminals',
                'Metro Rail, Railways & Stations',
                'Hospitals, Healthcare Campuses & Labs',
                'Data Centers & Mission-Critical Facilities',
                'High-Rise Commercial & Residential Developments',
                'Ports, Shipyards & Terminals',
                'Educational Campuses & Institutional Buildings'
            ],
            note: 'Life Safety Code (NFPA 101 / NBC) applied at design, retrofit, audit, and compliance stages.'
        },
        { 
            title: '3. Manufacturing, Warehousing & Supply Chain',
            subtitle: 'Worker, contractor & logistics-intensive environments',
            industries: [
                'General & Heavy Manufacturing',
                'Automotive & EV Manufacturing',
                'FMCG, Food & Beverage Processing',
                'Warehouses & Fulfillment Centers',
                'Dangerous Goods & Chemical Storage',
                'Cold Storage & Logistics Hubs'
            ]
        },
        { 
            title: '4. People-Dense & Public-Facing Environments',
            subtitle: 'Evacuation, crowd safety & reputation risk',
            industries: [
                'Retail Stores, Malls & Markets',
                'Hospitality, Hotels & Resorts',
                'Entertainment Venues & Theatres',
                'Religious & Community Institutions',
                'Events, Exhibitions & Temporary Structures',
                'Stadia, Arenas & Public Gathering Spaces'
            ]
        },
        { 
            title: '5. Mobility, Transport & Distributed Operations',
            subtitle: 'Mobile and decentralised risk exposure',
            industries: [
                'Fleet & Transportation Operations',
                'Fuel Transport & Dangerous Goods Transit',
                'Bus Terminals & Depots',
                'Airport Ground Operations',
                'Last-Mile & Logistics Transport'
            ]
        },
        { 
            title: '6. Institutions, Governance & Sensitive Assets',
            subtitle: 'Compliance-driven & trust-critical environments',
            industries: [
                'Government & Public Administration Buildings',
                'Financial Institutions & Secure Facilities',
                'Banks, Vaults & Currency Chests',
                'Embassies, Consulates & Prisons',
                'Regulatory & Judicial Infrastructure'
            ]
        },
        { 
            title: '7. Emerging, Hybrid & Non-Traditional Risk Environments',
            subtitle: 'Where standards evolve slower than risk',
            industries: [
                'Renewable Energy & Solar Farms',
                'Battery Energy Storage Systems (BESS)',
                'Waste Management & Recycling Facilities',
                'E-Waste & Hazardous Disposal Sites',
                'Smart Cities & Integrated Infrastructure',
                'R&D, Biotechnology & Advanced Labs'
            ]
        }
    ];

    return (
        <section id="industries" style={{ padding: '80px 5%', textAlign: 'center', backgroundColor: 'white' }}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '20px', color: primaryColor }}>
                Industries We Serve
            </h2>
            
            {/* Intro Paragraphs */}
            <div style={{ maxWidth: '950px', margin: '0 auto 15px' }}>
                <p style={{ fontSize: '1.08em', color: '#555', lineHeight: '1.7', marginBottom: '12px' }}>
                    We support organisations across diverse industries by addressing risk where it is created, managed, and experienced — from leadership intent and regulatory obligations to frontline operations and emergency response.
                </p>
                <p style={{ fontSize: '1.08em', color: '#555', lineHeight: '1.7', marginBottom: '0' }}>
                    Our HSSEF solutions span the full business and risk lifecycle, combining proven frameworks with customised execution aligned to each industry's operating reality.
                </p>
            </div>

            {/* Sub-line */}
            <p style={{ fontSize: '0.98em', color: '#777', fontStyle: 'italic', maxWidth: '900px', margin: '20px auto 50px', lineHeight: '1.6' }}>
                Industries are grouped by risk environment and asset complexity, not just sector labels.
            </p>

            {/* Industry Clusters */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
                {industriesData.map((cluster, index) => (
                    <div key={index} style={{ marginBottom: '15px' }}>
                        <AccordionItem
                            index={index}
                            title={
                                <div>
                                    <div>
                                        <span style={{ fontSize: '1.1em', fontWeight: '600' }}>{cluster.title}</span>
                                    </div>
                                    <div style={{ fontSize: '0.88em', color: '#666', fontWeight: '400', marginTop: '6px' }}>
                                        {cluster.subtitle}
                                    </div>
                                </div>
                            }
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            content={
                                <div style={{ padding: '15px 0' }}>
                                    <h4 style={{ color: primaryColor, fontSize: '1.08em', marginTop: '0', marginBottom: '12px', fontWeight: '600' }}>
                                        Includes:
                                    </h4>
                                    <DetailedIndustryList items={cluster.industries} note={cluster.note} />
                                </div>
                            }
                        />
                    </div>
                ))}
            </div>

            {/* Closing Statement */}
            <div style={{ 
                maxWidth: '1000px', 
                margin: '60px auto 0', 
                padding: '30px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <p style={{ fontSize: '1.08em', lineHeight: '1.7', color: '#555', margin: '0', fontWeight: '500' }}>
                    If your industry is not listed, our risk-led HSSEF principles remain fully applicable — every engagement begins with understanding your business, risk exposure, and operating context.
                </p>
            </div>
        </section>
    );
}