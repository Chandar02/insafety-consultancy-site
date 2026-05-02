// app/page.js

/* ============================
   PAGE-LEVEL SEO METADATA
   ============================ */
export const metadata = {
  title: "HSE Consultant India | Risk Management, Process Safety & Compliance – InSafety Services",
  description:
    "Safety audits, risk management, process safety, legal compliance and crisis management — strategic to executional, for Indian and global clients.",
  alternates: {
    canonical: "https://www.insafetyservices.com/",
  },
};

import React from 'react';
import HeroSection from "../components/HeroSection";
import VisionMissionSection from "../components/VisionMissionSection";
import LeadershipSection from "../components/LeadershipSection";
import IndustriesSection from "../components/IndustriesSection";
import ServicesSection from "../components/ServicesSection";
import ContactFooter from '@/components/ContactFooter';
import WhyChooseUs from '../components/WhyChooseUs';
import Methodology from '../components/Methodology';
import RiskCalculator from '../components/RiskCalculator';

export default function Home() {
    return (
        <div id="home-wrapper" style={{ overflowX: 'hidden' }}>
            <main id="home">

        {/* SECTION 1 – Hero */}
        <HeroSection />
        <VisionMissionSection />

        {/* SECTION 2 – Services */}
        <section id="services" aria-label="HSE Services">
          <ServicesSection />
        </section>

        {/* SECTION 3 – Industries */}
        <section id="industries" aria-label="Industries We Serve">
          <IndustriesSection />
        </section>

        {/* SECTION 4 – Why Choose Us */}
        <section id="why-us" aria-label="Why Choose InSafety Services">
          <WhyChooseUs />
        </section>

        {/* SECTION 5 – Methodology */}
        <section id="methodology" aria-label="Our HSE Methodology">
          <Methodology />
        </section>

        {/* SECTION 6 – Leadership */}
        <section id="leadership" aria-label="Leadership">
          <LeadershipSection />
        </section>

        {/* SAFETY RISK CALCULATOR */}
<section id="risk-calculator" style={{ padding: '40px 5%', backgroundColor: '#ffffff' }}>
    <RiskCalculator />
</section>

        
        {/* FAQ SECTION – Boosts Google Featured Snippets */}
        <section
          id="faq"
          aria-label="Frequently Asked Questions"
          style={{ padding: '80px 5%', backgroundColor: '#ffffff', maxWidth: '900px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '2em', color: '#1f3e66', marginBottom: '10px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px', fontSize: '1.1em' }}>
            Common questions from EHS heads, operations leaders, procurement teams and multinational corporations operating in India.
          </p>

          {[
            {
              q: "What is a QRA and when is it mandatory in India?",
              a: "A Quantitative Risk Assessment (QRA) is a systematic process to quantify the risk from hazardous operations using mathematical consequence models. In India, QRA is mandatory under the MSIHC Rules 1989 (Major Accident Hazard units), CIMAH regulations, PNGRB Technical Standards for petroleum pipelines and facilities, and OISD guidelines for refineries and petrochemical plants. It is also required for DISH (Directorate of Industrial Safety & Health, Maharashtra) approvals for hazardous installations.",
            },
            {
              q: "What is a Permit to Work (PTW) system and why is it critical?",
              a: "A Permit to Work (PTW) system is a formal written procedure that controls high-risk non-routine work such as hot work, confined space entry, work at height, electrical isolation, and excavation. It is a legal requirement under the Factories Act 1948 for hazardous processes and is mandated by OISD-STD-105 for oil & gas facilities. A robust PTW system prevents fatalities, injuries, and regulatory violations.",
            },
            {
              q: "Is a safety consultant required under the Factories Act in India?",
              a: "While the Factories Act 1948 does not mandate hiring an external safety consultant, it requires designated Safety Officers for factories employing 1000+ workers (or 500+ in hazardous processes). External safety consultants are typically engaged for compliance audits, safety management system development, QRA/HAZOP studies, emergency response planning, and regulatory submissions to DISH, PESO, or PNGRB that require specialist expertise.",
            },
            {
              q: "What does an industrial hygiene survey cover in an Indian factory?",
              a: "An industrial hygiene (IH) survey in India typically covers noise dosimetry (compared against Factories Act Schedule III limits), illumination level assessments (lux surveys per IS:3646), air quality monitoring for dust, vapour, and chemical agents, heat stress evaluation, ergonomic assessments, and biological monitoring where applicable. The survey generates a Risk Profile used to prioritise health controls under the Occupational Safety, Health and Working Conditions Code 2020.",
            },
            {
              q: "What is the difference between an Onsite Emergency Plan (OEP) and an Offsite Emergency Plan?",
              a: "An Onsite Emergency Plan (OEP) covers emergency response actions within the factory boundary and is the responsibility of the occupier under the Factories Act and MSIHC Rules. It includes evacuation procedures, emergency organisation, mock drills, and resource inventories. An Offsite Emergency Plan covers the area outside the factory boundary and is the responsibility of the District Collector / Local Authority, typically coordinated with DISH, fire services, and hospitals for Major Accident Hazard (MAH) units.",
            },
            {
              q: "Which Indian industries need a HAZOP study?",
              a: "HAZOP (Hazard and Operability Study) studies are required for oil refineries, petrochemical plants, chemical manufacturing, fertiliser plants, pharmaceutical API units, LPG/CNG storage and handling facilities, and any process covered under the MSIHC Rules 1989. OISD-GDN-206 and OISD-STD-118 reference HAZOP as a process hazard analysis tool. HAZOP is also increasingly required by insurers and lenders for capital project approvals.",
            },
            {
              q: "Does InSafety Services work with multinational corporations entering or operating in India?",
              a: "Yes, and this has been a core part of our work for many years. We work with global organisations in banking, shipping, technology, chemical and heavy industry who are setting up, expanding or already running operations in India. The real challenge for most international firms is not understanding safety. It is navigating the gap between what their corporate standards require and what Indian law actually demands on the ground. That gap is exactly where we operate, working across your entire organisation from boardroom to site level. We have a dedicated Global MNC Desk for this purpose.",
            },
            {
              q: "What is behavioural safety (BBS) training and does InSafety Services provide it in India?",
              a: "Behavioural Based Safety (BBS) training is a structured approach to identifying and changing unsafe behaviours in the workplace through observation, feedback, and reinforcement. InSafety Services delivers BBS programmes, safety culture transformation, and safety leadership coaching across Indian industries, incorporating frameworks such as the cultural maturity model, Just Culture, and mindspace-based behavioural change strategies. Training is available in English, Hindi, and Marathi.",
            },
            {
              q: "What is a Business Continuity Plan (BCP) and who needs one in India?",
              a: "A Business Continuity Plan (BCP) is a documented process that ensures an organisation can continue critical operations during and after a disruption — including industrial accidents, natural disasters, cyberattacks, pandemics, or supply chain failures. In India, BCPs are increasingly required by banks and financial regulators (RBI guidelines), insurance underwriters, large enterprise clients as a vendor requirement, and are best practice for any MAH unit, CFS/logistics operation, or data centre. InSafety Services provides BIA, BCP development, and tabletop exercises.",
            },
            {
              q: "How long does it take to develop a safety management system for ISO 45001 in India?",
              a: "Developing and implementing an ISO 45001 Occupational Health & Safety Management System (OHSMS) typically takes 6 to 18 months depending on the size and complexity of the organisation, existing system maturity, and employee readiness. The process covers gap analysis, documentation, training, internal audits, management review, and pre-certification assessment before the external certification audit by an accredited body such as Bureau Veritas, DNV, TUV, or BVQI.",
            },
            {
              q: "How does InSafety Services help global companies meet both international standards and Indian regulations simultaneously?",
              a: "Most international safety frameworks and Indian statutory requirements are written for different contexts, and the gap between them is where compliance failures and incidents actually happen. We act as the technical bridge between your global standards such as ISO 45001, NFPA 101, ISO 12100 and CE marking requirements, and Indian law including the Factories Act, NBC, DISH, CIMAH, PNGRB and OISD. This covers design and risk assessment, safety management systems, audits, training, emergency planning and regulatory submissions, so your Indian operations satisfy both your global HSE auditors and local Indian inspectors without running two parallel compliance programmes.",
            },
            {
              q: "What types of safety audits and training does InSafety Services deliver?",
              a: "Our audits cover the full range. Statutory compliance audits as per IS 14489:2018 covering the Factories Act, DISH, OISD and state regulations. Safety management system audits against ISO 45001. Process safety audits including HAZOP and risk assessments. Electrical safety audits. Fire and life safety audits against NFPA 101 and NBC. Work at height audits as per IS 3696. And specialised IRATA rope access audits. Training is delivered in English, Hindi and Marathi across all levels from frontline workers to senior leadership, covering work at height, permit to work, confined space entry, fire safety, emergency response, behavioural safety and safety leadership. Every programme is built around how your people actually work.",
            },
            {
              q: "How does InSafety Services approach work at height differently from conventional methods?",
              a: "We use IRATA industrial rope access as our standard approach for work at height, and the difference it makes to our clients is real. Less time on site. Fewer people needed. Significantly lower cost. And the facility stays operational throughout. Conventional scaffolding means months of erection, certification and dismantling before any actual work begins. IRATA gets the same job done safely, with full documentation and compliance, in a fraction of the time. Beyond the access work, we also provide dedicated emergency rescue services for every work at height engagement. If something goes wrong at elevation, you need people who can respond immediately at that height. That capability is built in from day one.",
            },
          ].map(({ q, a }, i) => (
            <details
              key={i}
              style={{
                borderBottom: '1px solid #e0e0e0',
                padding: '16px 0',
                cursor: 'pointer',
              }}
            >
              <summary
                style={{
                  fontSize: '1.05em',
                  fontWeight: '600',
                  color: '#1f3e66',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {q}
                <span style={{ fontSize: '1.4em', color: '#4a7dbf', marginLeft: '12px', flexShrink: 0 }}>+</span>
              </summary>
              <p style={{ marginTop: '12px', color: '#444', lineHeight: '1.8', fontSize: '0.97em' }}>
                {a}
              </p>
            </details>
          ))}
        </section>

        <ContactFooter />
      </main>
    </div>
  );
}