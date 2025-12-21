// components/ServicesSection.js
"use client";

import { useState } from 'react';
import AccordionItem from './AccordionItem'; 

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const primaryColor = '#1f3e66';
    const accentColor = '#007bff';
    const lightBackground = '#f4f7fa';

    // Helper component to format the detailed bullet points
    const DetailedServiceList = ({ title, items, description }) => (
        <div style={{ marginBottom: '25px', padding: '15px', borderLeft: `3px solid ${accentColor}`, backgroundColor: '#fafafa', borderRadius: '4px' }}>
            <h4 style={{ color: primaryColor, fontSize: '1.1em', marginTop: '0', marginBottom: '8px' }}>{title}</h4>
            {description && <p style={{ fontSize: '1.02em', color: '#555', marginBottom: '10px', lineHeight: '1.65' }}>{description}</p>}
            <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '20px', 
                margin: '0', 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '8px'
            }}>
                {items.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.98em', color: '#666', lineHeight: '1.6' }}>{item}</li>
                ))}
            </ul>
        </div>
    );

    // Full Content Data Structure with sub-lines
    const servicesData = [
        { 
            title: '1. Strategic Design & Risk Integration',
            subLine: 'Where leadership intent and design decisions shape long-term risk.',
            subtitle: 'Core Focus: Building Safety and Resilience into Your Assets and Operations from the Concept and Planning Stages.',
            summary: `Safety that is designed in is safer, more efficient, and more compliant. Our strategic services ensure that risk is quantified, mitigated, and controlled before construction or implementation begins, reducing costly rework and ensuring long-term sustainability. We focus on the "P" (Plan) stage of your operations to avoid costly risks later.`,
            detailedServices: [
                {
                    title: 'Life Safety Code Design (NFPA-101/NBC)',
                    items: [
                        'Code Consulting and Compliance Review', 'Site Planning and Design', 'Structural Design and Analysis', 'Fire Safety Engineering', 'Accessibility Design', 'Electrical and Plumbing Design', 'Green Building Design and Sustainability', 'Construction Oversight and Inspection', 'Regulatory Compliance Assistance'
                    ]
                },
                {
                    title: 'Strategic Risk Quantification & Mitigation',
                    items: [
                        'Risk Identification', 'Risk Evaluation', 'Risk Analysis and Quantification', 'Risk Mapping and Visualization', 'Risk Assessment Methodology Development', 'Risk Mitigation Strategies', 'Business Impact Analysis (BIA)', 'Risk Monitoring and Review', 'Compliance and Regulatory Support', 'Risk Communication and Reporting', 'Training and Education'
                    ]
                },
                {
                    title: 'Design Safety Review (DSR) & HAZOP Facilitation',
                    description: 'High-level, dedicated advisory service for concept and pre-design risk reviews. Facilitation of Hazard and Operability (HAZOP) Studies. Safety in Design Workshops.',
                    items: []
                },
                {
                    title: 'Warehouse Design for Dangerous Goods',
                    description: 'Designing a hazardous material warehouse requires careful consideration of safety, compliance, and efficiency.',
                    items: [
                        'Hazardous Material Storage Consultation', 'Compliance Assessment', 'Safety Systems Design', 'Material Handling Equipment Selection', 'Emergency Response Planning', 'Environmental Impact Assessment', 'Permitting and Regulatory Compliance', 'Training and Education', 'Security Systems Design', 'Sustainability and Energy Efficiency'
                    ]
                }
            ]
        },
        { 
            title: '2. Compliance Assurance & Operational Systems',
            subLine: 'Where risk controls, systems, and governance are embedded into daily operations.',
            subtitle: 'Core Focus: Implementing, Certifying, and Governing Robust HSSEF Management Systems to Ensure Sustainable Compliance and Continuous Improvement.',
            summary: `This category moves beyond initial design to focus on the daily execution and long-term sustainability of your safety and risk programs. We provide the systems and assurance necessary to meet regulatory mandates and achieve global standards like ISO certification. We handle the "D" (Do) and "C" (Check) of your safety cycle.`,
            detailedServices: [
                {
                    title: 'Sustainable Safety Management System (SMS) Implementation',
                    items: [
                        'Safety Management System (SMS) Development (based on recognized global standards)', 'Safety Policy Development for your business', 'Safety Program Development', 'Safety Training and Education (Foundational)', 'Safety Compliance Audits', 'Incident Management and Investigation (System level)', 'Safety Performance Metrics and Reporting', 'Emergency Preparedness and Response Planning (System level)', 'Safety Culture Enhancement', 'Ongoing Support and System Maintenance'
                    ]
                },
                {
                    title: 'ISO 45001 Certification Assistance',
                    items: [
                        'Gap Analysis', 'System Development', 'Documentation Support', 'Training and Awareness', 'Internal Audits', 'Corrective Actions and Continual Improvement', 'Management Review', 'Pre-certification Assessment', 'Certification Audit Support', 'Post-certification Support'
                    ]
                },
                {
                    title: 'Product Stewardship',
                    items: [
                        'Environmental Impact Assessments', 'Lifecycle Analysis', 'Design for Environment', 'Regulatory Compliance', 'Supply Chain Management', 'Recycling and Waste Management', 'Product Take-Back Programs', 'Education and Training', 'Green Marketing and Communication', 'Auditing and Certification'
                    ]
                },
                {
                    title: 'Responsible Care',
                    items: [
                        'Compliance Assistance (Voluntary chemical industry initiative)', 'Risk Assessment and Management', 'Process Safety Management', 'Environmental Management Systems', 'Health and Safety Programs', 'Performance Metrics and Reporting', 'Auditing and Verification', 'Stakeholder Engagement and Communication', 'Supply Chain Management', 'Continuous Improvement and Best Practices'
                    ]
                },
                {
                    title: 'Compliance Assurance & Performance Benchmarking',
                    items: [
                        'Safety Audit (General Audits)', 'Hazard Identification and Risk Assessment', 'Safety Management System Development (Audit focus)', 'Compliance Monitoring and Reporting', 'Safety Culture Assessments', 'Training and Education (Audit focus)', 'Incident Investigation and Analysis', 'Emergency Preparedness and Response', 'Performance Metrics and Benchmarking', 'Continuous Improvement Support'
                    ]
                },
                {
                    title: 'C-TPAT Audit',
                    items: [
                        'Gap Analysis (Customs-Trade Partnership Against Terrorism)', 'Security Policy and Procedure Development', 'Risk Assessment', 'Security Audits and Compliance', 'Documentation and Record-Keeping'
                    ]
                },
            ]
        },
        { 
            title: '3. Emergency & Crisis Resilience',
            subLine: 'Where organisations prepare for disruption, respond effectively, and recover.',
            subtitle: 'Core Focus: Preparing for, Managing, and Rapidly Recovering from High-Impact Incidents, Crises, and Disruptions to Protect People, Assets, and Reputation.',
            summary: `Resilience is the ultimate test of an organization's safety systems. Our services move beyond simple compliance to build a robust framework that ensures rapid response, minimized impact, and swift business continuity following any crisis or emergency. We provide the definitive planning, training, and systems required for the "C" (Check) and "A" (Act) stages.`,
            detailedServices: [
                {
                    title: 'Business Continuity & Disaster Recovery Management',
                    items: [
                        'Business Impact Analysis (BIA)', 'Business Continuity Planning', 'Risk Assessment and Risk Management', 'Technology Recovery and IT Disaster Recovery Planning', 'Crisis Management Integration', 'Training and Awareness Programs', 'Business Continuity Testing and Exercises', 'Supplier and Vendor Management', 'Crisis Communication and Public Relations', 'Continuous Improvement and Recovery'
                    ]
                },
                {
                    title: 'Comprehensive Crisis Management',
                    items: [
                        'Risk Assessment and Preparedness', 'Crisis Response and Coordination', 'Crisis Communication and Public Relations', 'Stakeholder Management', 'Media Monitoring and Analysis', 'Incident Investigation and Analysis', 'Training and Simulation Exercises', 'Business Continuity Planning (Crisis focus)', 'Legal and Regulatory Compliance', 'Reputation Management and Recovery'
                    ]
                },
                {
                    title: 'Incident Management & Investigation',
                    items: [
                        'Incident Response Planning (Detailed)', 'Incident Reporting Systems', 'Incident Investigation (Root Cause Analysis)', 'Corrective Action Planning', 'Communication and Notification', 'Employee Support and Counseling', 'Regulatory Compliance (Reporting)', 'Lessons Learned and Knowledge Sharing', 'Incident Performance Metrics and Reporting', 'Integration with Health and Safety Programs', 'Continuous Improvement and Audits'
                    ]
                },
                {
                    title: 'Emergency Management (All Hazards)',
                    items: [
                        'Risk Assessment', 'Emergency Planning', 'Training and Education', 'Emergency Operations Centre (EOC) Support', 'Crisis Communication', 'Resource Management', 'Incident Command System (ICS) Implementation', 'Damage Assessment and Recovery Planning', 'Exercise and Drill Coordination', 'After-Action Reviews'
                    ]
                },
            ]
        },
        { 
            title: '4. Specialized Assets & Technical Services',
            subLine: 'Where high-risk physical assets and environments are made safe and compliant.',
            subtitle: 'Core Focus: Ensuring the Safety, Integrity, and Compliance of Complex, High-Risk Physical Assets, Equipment, and Specialized Systems.',
            summary: `These services provide the specific, in-depth technical expertise required to manage the operational risks associated with specialized infrastructure, machinery, and highly regulated physical environments. We ensure your critical assets are compliant, maintained, and safe for use.`,
            detailedServices: [
                {
                    title: 'Fire Prevention and Fire Fighting System Integrity',
                    items: [
                        'Fire Risk Assessment', 'Fire Suppression System Installation', 'Fire Detection and Alarm Systems', 'Fire Pump Installation and Maintenance', 'Fire Extinguisher Servicing and Inspection', 'Fire Suppression System Upgrades', 'Fire Safety Training', 'Emergency Lighting and Exit Signage', 'Fire Safety Plan Development', 'Fire Alarm Monitoring Services', 'AMC and emergency repairs for fire prevention and firefighting systems', 'Liaisoning with Fire Offices, certifications (Form-A, B etc.)', 'NOCs for legal compliances', 'Fireproofing and Passive Fire Protection', 'Fire Investigation and Analysis', 'Fire Safety Code Compliance', 'Fire Drill and Evacuation Exercises', 'Fire Safety Consultation'
                    ]
                },
                {
                    title: 'Management of Dangerous or Hazardous Goods',
                    items: [
                        'Classification and Labelling', 'Safety Data Sheet (SDS) Management', 'Risk Assessment and Hazard Analysis', 'Storage and Handling Procedures', 'Transportation and Logistics Planning', 'Emergency Response Planning (Specific to goods)', 'Training and Education', 'Regulatory Compliance Assistance', 'Auditing and Compliance Assessments', 'Incident Investigation and Lessons Learned'
                    ]
                },
                {
                    title: 'Electrical & Electrical Safety Audits',
                    items: [
                        'Electrical Safety Inspection', 'Code Compliance Evaluation', 'Load Analysis', 'Power Quality Assessment', 'Energy Efficiency Review', 'Emergency Power Systems Evaluation', 'Arc Flash Hazard Analysis', 'Electrical Documentation Review', 'Electrical System Maintenance Assessment', 'Electrical Safety Training'
                    ]
                },
                {
                    title: 'MHE/CHE Assessments & Certification',
                    items: [
                        'Inspection and Condition Assessment (Mobile/Counter-Balanced Handling Equipment)', 'Performance Testing', 'Safety Compliance Assessment', 'Compliance with Environmental Regulations', 'Operator Training and Certification', 'Risk Assessment and Management', 'Maintenance and Service Planning', 'Certification and Compliance Verification', 'Cost Analysis and Efficiency Improvement', 'Technical Consultation and Expert Advice'
                    ]
                },
                {
                    title: 'Elevator and Lift Safety & Maintenance',
                    items: [
                        'Installation and Safety Inspections', 'Modernization and Upgrades', 'Maintenance and Repair', 'Safety Inspections and Compliance', 'Accessibility Enhancements', 'Modern Design and Aesthetics', 'Cab Renovation and Interior Upgrades', 'Emergency Service and 24/7 Support', 'Energy Efficiency Solutions', 'Destination Control Systems', 'Modern User Interface', 'Remote Monitoring and Diagnostics', 'Elevator Consulting and Design Services', 'Compliance with Accessibility Standards', 'Training and Education'
                    ]
                },
                {
                    title: 'E-Surveillance and Intrusion Systems',
                    items: [
                        'System Design and Consultation (Intrusion System)', 'Installation and Configuration (Intrusion System)', 'Video Surveillance and Analytics', 'Access Control and Perimeter Protection', 'Alarm Monitoring and Remote Surveillance', 'Data Storage and Retrieval', 'Incident Response (Security)', 'System Auditing and Compliance', 'Virtual Guarding and Remote Monitoring', 'Maintenance and Upgrades'
                    ]
                },
                {
                    title: 'Solar System Safety & Performance',
                    items: [
                        'Solar System Design', 'Solar Panel Installation and Inverter Installation', 'Battery Storage Solutions', 'Grid Connection and Net Metering', 'Off-Grid Solar Solutions', 'Solar System Monitoring', 'Performance Upgrades and Enhancements', 'Energy Efficiency Assessments', 'Solar System Repairs and Expansion', 'Solar Financing and Incentive Guidance', 'Energy Performance Monitoring and Reporting', 'Education and Training'
                    ]
                },
                {
                    title: 'Illumination and High Mast Lighting Safety',
                    items: [
                        'High Mast Design and Planning', 'Lighting Design and Planning', 'Energy-Efficient Solutions', 'Maintenance and Upgrades', 'Lighting Controls and Automation', 'Customized Illumination Solutions', 'Compliance and Safety', 'Emergency Lighting Systems', 'Lighting Design Calculations', 'Lighting Controls Integration', 'Smart City Initiatives', 'Retrofitting and Upgrades', 'Lighting Audits and Assessments'
                    ]
                },
                {
                    title: 'Biometric and Credential Management Systems',
                    items: [
                        'Compliance Regulation and Audit Support', 'Credential Management', 'Customization and Tailoring', 'Data Management and Security', 'Emergency Response Planning (Biometrics focus)', 'Installation and Configuration', 'Integration with Other Systems', 'Maintenance and Support', 'Performance Optimization'
                    ]
                },
                {
                    title: 'ISPS Code Compliance',
                    items: [
                        'Security Plan Development (International Ship and Port Facility Security)', 'Security Training and Drills', 'Security Equipment and Systems', 'Facility Security Assessments', 'Compliance Audits', 'Certification Assistance'
                    ]
                },
                {
                    title: 'OT/IT Safety & Cyber-Physical Security',
                    description: 'Risk assessment for operational technology (OT) environments. Security integration of physical systems (CCTV, Access) with IT networks. SCADA/DCS system security review.',
                    items: []
                },
                {
                    title: 'Fleet & Transportation Safety Management',
                    items: [
                        'Logistics Risk Assurance: Comprehensive safety and compliance audits for entire vehicle fleets, including maintenance standards, route risk analysis, and telematics integration.',
                        'Driver Competency & Wellness Programs: Development and delivery of high-impact training and evaluation for driver fitness, competency, and critical fatigue management.',
                        'Journey Management Planning (JMP): Creation of customized, mandatory protocols for high-risk routes, long-haul operations, and the specialized transport of dangerous or hazardous goods.',
                        'Vehicle Integrity & Regulatory Compliance: Verification of vehicle maintenance protocols (PUIs, PMs) and assurance of full adherence to all local and international motor carrier safety laws and transportation regulations.'
                    ],
                    description: 'Your transportation fleet is the backbone of your supply chain, but it is also one of your highest risk exposures. We provide specialized safety programs to secure your mobile assets, manage road risk, and ensure that every delivery, shipment, or journey is a compliant, efficient, and reliable step in your operations. We turn transportation risk into a reliable asset.'
                }
            ]
        },
    ];

    return (
        <section id="services" style={{ padding: '80px 5%', textAlign: 'center', backgroundColor: lightBackground }}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '10px', color: primaryColor }}>
                Services & Solutions
            </h2>
            <p style={{ fontSize: '1.08em', color: '#555', maxWidth: '900px', margin: '0 auto 50px', lineHeight: '1.7' }}>
    Transforming Your Safety & Risk Lifecycle: The categories below group our HSSEF services across the full risk lifecycle — from strategy and design to operations and response — aligned with the Plan-Do-Check-Act framework and adapted to how your business actually works.
</p>
            {/* NEW: How We Work Section */}
            <div style={{ maxWidth: '1000px', margin: '0 auto 60px', textAlign: 'left', padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <h2 style={{ fontSize: '2em', color: primaryColor, marginBottom: '20px' }}>
                    How We Work: Risk-Led HSSEF Solutions Designed Around Your Business
                </h2>
                
                <div style={{ fontSize: '1.08em', lineHeight: '1.7', color: '#555', marginBottom: '25px' }}>
                    <p style={{ marginBottom: '12px' }}>We deliver proven safety and risk frameworks — and adapt them to fit how your business actually operates.</p>
                    <p style={{ marginBottom: '12px' }}>Every engagement begins with understanding your business model, risk exposure, operating realities, and decision environment. Only then do we design and implement HSSEF solutions that are practical, compliant, and effective.</p>
                    <p style={{ marginBottom: '0' }}>We work across the full risk journey — from intent, to translation, to impact.</p>
                </div>

                {/* 3-Line Emphasis Block */}
                <div style={{ 
                    backgroundColor: '#f8f9fa', 
                    padding: '20px 25px', 
                    borderRadius: '6px', 
                    borderLeft: `4px solid ${accentColor}`,
                    marginBottom: '20px'
                }}>
                    <p style={{ fontSize: '1.08em', fontWeight: '500', color: '#555', margin: '8px 0' }}>
                        <strong style={{ color: primaryColor }}>Intent:</strong> Leadership decisions, strategy, policy, design
                    </p>
                    <p style={{ fontSize: '1.08em', fontWeight: '500', color: '#555', margin: '8px 0' }}>
                        <strong style={{ color: primaryColor }}>Translation:</strong> Systems, processes, engineering, supervision
                    </p>
                    <p style={{ fontSize: '1.08em', fontWeight: '500', color: '#555', margin: '8px 0' }}>
                        <strong style={{ color: primaryColor }}>Impact:</strong> Operations, contractors, transport, frontline workforce
                    </p>
                </div>

                <p style={{ fontSize: '1.08em', lineHeight: '1.7', color: '#555', margin: '0' }}>
                    Our role is to connect all three — so risk is understood, controlled, and managed where it is created and where it is experienced.
                </p>
            </div>

            {/* NEW: Lifecycle Strip */}
            <div style={{ 
                maxWidth: '1000px', 
                margin: '0 auto 50px', 
                padding: '20px', 
                backgroundColor: 'white', 
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    fontSize: '1em',
                    fontWeight: '600',
                    color: primaryColor,
                    flexWrap: 'wrap',
                    gap: '10px'
                }}>
                    <span>Concept</span>
                    <span style={{ color: accentColor }}>→</span>
                    <span>Design</span>
                    <span style={{ color: accentColor }}>→</span>
                    <span>Build</span>
                    <span style={{ color: accentColor }}>→</span>
                    <span>Operate</span>
                    <span style={{ color: accentColor }}>→</span>
                    <span>Respond</span>
                    <span style={{ color: accentColor }}>→</span>
                    <span>Learn</span>
                    <span style={{ color: accentColor }}>→</span>
                    <span>Improve</span>
                </div>
            </div>

            {/* Accordion Sections with Sub-lines */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
                {servicesData.map((category, index) => (
                    <div key={index} style={{ marginBottom: '15px' }}>
                        <AccordionItem
                            index={index}
                            title={
                                <div>
                                    <div>
    <span>{category.title}</span>
</div>
                                    <div style={{ fontSize: '0.85em', color: '#666', fontWeight: '400', marginTop: '6px', marginLeft: '35px' }}>
                                        {category.subLine}
                                    </div>
                                </div>
                            }
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            content={
                                <div style={{ padding: '10px 0' }}>
                                    <p style={{ color: accentColor, fontWeight: 'bold', fontSize: '1.05em', marginBottom: '12px' }}>{category.subtitle}</p>
                                    <p style={{ fontSize: '1.05em', color: '#555', marginBottom: '20px', borderLeft: '4px solid #ccc', paddingLeft: '12px', lineHeight: '1.65' }}>{category.summary}</p>
                                    {category.detailedServices.map((service, subIndex) => (
                                        <DetailedServiceList
                                            key={subIndex}
                                            title={service.title}
                                            items={service.items}
                                            description={service.description}
                                        />
                                    ))}
                                </div>
                            }
                        />
                    </div>
                ))}
            </div>

            {/* NEW: Customization Statement */}
            <div style={{ 
                maxWidth: '1000px', 
                margin: '60px auto 0', 
                padding: '30px', 
                backgroundColor: 'white', 
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                textAlign: 'center'
            }}>
                <p style={{ fontSize: '1.08em', lineHeight: '1.7', color: '#555', margin: '0', fontWeight: '500' }}>
                    No two organisations receive the same solution. All services are tailored based on business context, risk profile, workforce realities, and regulatory environment.
                </p>
            </div>
        </section>
    );
}