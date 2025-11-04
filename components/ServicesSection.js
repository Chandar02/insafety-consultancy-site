// components/ServicesSection.js
"use client";

import { useState } from 'react';
// We will reuse the AccordionItem component from the Industries section
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
            {description && <p style={{ fontSize: '0.9em', color: '#555', marginBottom: '10px' }}>{description}</p>}
            <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '20px', 
                margin: '0', 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '5px'
            }}>
                {items.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.9em', color: '#666' }}>{item}</li>
                ))}
            </ul>
        </div>
    );

    // Full Content Data Structure
    const servicesData = [
        // 1. Strategic Design & Risk Integration (Plan)
        { 
            icon: '📐', 
            title: '1. Strategic Design & Risk Integration', 
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
                    items: [] // No list items here, description covers it
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
        
        // 2. Compliance Assurance & Operational Systems (Do/Check)
        { 
            icon: '✅', 
            title: '2. Compliance Assurance & Operational Systems', 
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

        // 3. Emergency & Crisis Resilience (Check/Act)
        { 
            icon: '🚨', 
            title: '3. Emergency & Crisis Resilience', 
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

        // 4. Specialized Assets & Technical Services
        { 
            icon: '💻', 
            title: '4. Specialized Assets & Technical Services', 
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
                    items: [] // No list items here, description covers it
                }
            ]
        },
    ];

    return (
        <section id="services" style={{ padding: '80px 5%', textAlign: 'center', backgroundColor: lightBackground }}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '10px', color: primaryColor }}>
                Services & Solutions
            </h2>
            <p style={{ fontSize: '1.1em', color: '#555', maxWidth: '900px', margin: '0 auto 50px' }}>
                Transforming Your Safety Lifecycle: The following categories group our specialized services to reflect our strategic approach to safety transformation (Plan-Do-Check-Act).
            </p>

            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
                {servicesData.map((category, index) => (
                    <AccordionItem
                        key={index}
                        index={index}
                        title={category.title}
                        icon={category.icon}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        content={
                            <div style={{ padding: '10px 0' }}>
                                <p style={{ color: accentColor, fontWeight: 'bold', fontSize: '1em', marginBottom: '10px' }}>{category.subtitle}</p>
                                <p style={{ fontSize: '0.95em', color: '#333', marginBottom: '20px', borderLeft: '4px solid #ccc', paddingLeft: '10px' }}>{category.summary}</p>
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
                ))}
            </div>
        </section>
    );
}