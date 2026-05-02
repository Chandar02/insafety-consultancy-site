// components/schema/FAQSchema.js
// FAQ structured data – creates expandable rich snippets in Google search results
// These are the same questions in the visible FAQ section of page.js

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a QRA and when is it mandatory in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Quantitative Risk Assessment (QRA) is a systematic process to quantify risk from hazardous operations using mathematical consequence models. In India, QRA is mandatory under the MSIHC Rules 1989 for Major Accident Hazard units, CIMAH regulations, PNGRB Technical Standards for petroleum pipelines and facilities, and OISD guidelines for refineries and petrochemical plants. It is also required for DISH (Directorate of Industrial Safety & Health, Maharashtra) approvals for hazardous installations."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Permit to Work (PTW) system and why is it critical?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Permit to Work (PTW) system is a formal written procedure that controls high-risk non-routine work such as hot work, confined space entry, work at height, electrical isolation, and excavation. It is a legal requirement under the Factories Act 1948 for hazardous processes and is mandated by OISD-STD-105 for oil and gas facilities. A robust PTW system prevents fatalities, injuries, and regulatory violations."
        }
      },
      {
        "@type": "Question",
        "name": "Is a safety consultant required under the Factories Act in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While the Factories Act 1948 does not mandate hiring an external safety consultant, it requires designated Safety Officers for factories employing 1000 or more workers. External safety consultants are typically engaged for compliance audits, safety management system development, QRA and HAZOP studies, emergency response planning, and regulatory submissions to DISH, PESO, or PNGRB that require specialist expertise."
        }
      },
      {
        "@type": "Question",
        "name": "What does an industrial hygiene survey cover in an Indian factory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An industrial hygiene survey in India covers noise dosimetry compared against Factories Act Schedule III limits, illumination level assessments (lux surveys per IS:3646), air quality monitoring for dust, vapour, and chemical agents, heat stress evaluation, ergonomic assessments, and biological monitoring where applicable. The survey generates a Risk Profile used to prioritise health controls under the Occupational Safety, Health and Working Conditions Code 2020."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between an Onsite Emergency Plan (OEP) and an Offsite Emergency Plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An Onsite Emergency Plan (OEP) covers emergency response actions within the factory boundary and is the responsibility of the occupier under the Factories Act and MSIHC Rules. An Offsite Emergency Plan covers the area outside the factory boundary and is the responsibility of the District Collector and Local Authority, coordinated with DISH, fire services, and hospitals for Major Accident Hazard (MAH) units."
        }
      },
      {
        "@type": "Question",
        "name": "Which Indian industries need a HAZOP study?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HAZOP studies are required for oil refineries, petrochemical plants, chemical manufacturing, fertiliser plants, pharmaceutical API units, LPG and CNG storage and handling facilities, and any process covered under the MSIHC Rules 1989. OISD-GDN-206 and OISD-STD-118 reference HAZOP as a process hazard analysis tool. HAZOP is also required by insurers and lenders for capital project approvals."
        }
      },
      {
        "@type": "Question",
        "name": "Does InSafety Services work with multinational corporations entering or operating in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, and this has been a core part of our work for many years. We work with global organisations in banking, shipping, technology, chemical and heavy industry who are setting up, expanding or already running operations in India. The real challenge for most international firms is not understanding safety. It is navigating the gap between what their corporate standards require and what Indian law actually demands on the ground. That gap is exactly where we operate, working across your entire organisation from boardroom to site level. We have a dedicated Global MNC Desk for this purpose."
        }
      },
      {
        "@type": "Question",
        "name": "What is behavioural safety (BBS) training and does InSafety Services provide it in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Behavioural Based Safety (BBS) training is a structured approach to identifying and changing unsafe behaviours through observation, feedback, and positive reinforcement. InSafety Services delivers BBS programmes and safety culture transformation across Indian industries incorporating the cultural maturity model, Just Culture, and mindspace-based behavioural change strategies. Training is available in English, Hindi, and Marathi."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Business Continuity Plan (BCP) and who needs one in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Business Continuity Plan (BCP) ensures an organisation can continue critical operations during disruptions including industrial accidents, natural disasters, cyberattacks, pandemics, or supply chain failures. In India, BCPs are required by RBI guidelines for banks, insurance underwriters, and large enterprise clients as a vendor requirement, and are best practice for any MAH unit, CFS/logistics operation, or data centre."
        }
      },
      {
        "@type": "Question",
        "name": "How long does ISO 45001 implementation take in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Developing and implementing an ISO 45001 Occupational Health and Safety Management System typically takes 6 to 18 months depending on organisation size, existing system maturity, and employee readiness. The process covers gap analysis, documentation, training, internal audits, management review, and pre-certification assessment before the external certification audit by an accredited body such as Bureau Veritas, DNV, TUV, or BVQI."
        }
      },
      {
        "@type": "Question",
        "name": "How does InSafety Services help global companies meet both international standards and Indian regulations simultaneously?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most international safety frameworks and Indian statutory requirements are written for different contexts, and the gap between them is where compliance failures and incidents actually happen. We act as the technical bridge between your global standards such as ISO 45001, NFPA 101, ISO 12100 and CE marking requirements, and Indian law including the Factories Act, NBC, DISH, CIMAH, PNGRB and OISD. This covers design and risk assessment, safety management systems, audits, training, emergency planning and regulatory submissions, so your Indian operations satisfy both your global HSE auditors and local Indian inspectors without running two parallel compliance programmes."
        }
      },
      {
        "@type": "Question",
        "name": "What types of safety audits and training does InSafety Services deliver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our audits cover the full range. Statutory compliance audits as per IS 14489:2018 covering the Factories Act, DISH, OISD and state regulations. Safety management system audits against ISO 45001. Process safety audits including HAZOP and risk assessments. Electrical safety audits. Fire and life safety audits against NFPA 101 and NBC. Work at height audits as per IS 3696. And specialised IRATA rope access audits. Training is delivered in English, Hindi and Marathi across all levels from frontline workers to senior leadership, covering work at height, permit to work, confined space entry, fire safety, emergency response, behavioural safety and safety leadership. Every programme is built around how your people actually work."
        }
      },
      {
        "@type": "Question",
        "name": "How does InSafety Services approach work at height differently from conventional methods?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use IRATA industrial rope access as our standard approach for work at height, and the difference it makes to our clients is real. Less time on site. Fewer people needed. Significantly lower cost. And the facility stays operational throughout. Conventional scaffolding means months of erection, certification and dismantling before any actual work begins. IRATA gets the same job done safely, with full documentation and compliance, in a fraction of the time. Beyond the access work, we also provide dedicated emergency rescue services for every work at height engagement. If something goes wrong at elevation, you need people who can respond immediately at that height. That capability is built in from day one."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}