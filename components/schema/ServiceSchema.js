// components/schema/ServiceSchema.js
// Individual service schemas for Google Knowledge Graph

export default function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "HSE Services by InSafety Services India",
    "description": "Comprehensive HSE consulting services for Indian industries",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Quantitative Risk Assessment (QRA) India",
          "description": "DISH, CIMAH, PNGRB, and OISD-compliant QRA studies for refineries, chemical plants, LPG/CNG facilities, and MAH units across India. Includes ALOHA/PHAST consequence modelling, risk matrices, and regulatory safety reports.",
          "provider": { "@id": "https://www.insafetyservices.com/#organization" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Process Safety Consulting"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Safety Training India – WAH, PTW, Confined Space, BBS",
          "description": "Work at Height (WAH), Permit to Work (PTW), Confined Space Entry, Behavioural Based Safety (BBS), and emergency response training delivered across India in English, Hindi, and Marathi.",
          "provider": { "@id": "https://www.insafetyservices.com/#organization" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Safety Training"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Industrial Hygiene Consultant India",
          "description": "Noise dosimetry, illumination audits (lux surveys), air quality monitoring, heat stress evaluation, and occupational health risk profiling for Indian factories per Factories Act and OSHE Code 2020.",
          "provider": { "@id": "https://www.insafetyservices.com/#organization" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Industrial Hygiene"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Emergency Response Planning India",
          "description": "Onsite Emergency Plans (OEP), Offsite Emergency Plans, mock drill coordination, Emergency Operations Centre (EOC) support, and crisis communication planning for Indian factories, refineries, and MAH units.",
          "provider": { "@id": "https://www.insafetyservices.com/#organization" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Emergency Management"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "ISO 45001 Certification Consultant India",
          "description": "Gap analysis, SMS development, documentation, internal audits, and pre-certification support for ISO 45001 occupational health and safety management system implementation across India.",
          "provider": { "@id": "https://www.insafetyservices.com/#organization" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Management System Certification"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "Business Continuity Plan (BCP) Consultant India",
          "description": "Business Impact Analysis (BIA), BCP development, Disaster Recovery Planning (DRP), crisis management integration, and tabletop exercises for Indian enterprises, MAH units, and logistics operations.",
          "provider": { "@id": "https://www.insafetyservices.com/#organization" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Business Continuity"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Service",
          "name": "Safety Culture & Behavioural Safety (BBS) Transformation India",
          "description": "Behavioural Based Safety (BBS) programmes, safety culture maturity assessment, safety leadership coaching, and Just Culture implementation for Indian manufacturing, chemical, and logistics sectors.",
          "provider": { "@id": "https://www.insafetyservices.com/#organization" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Safety Culture Consulting"
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Service",
          "name": "Transportation & Fleet Safety Management India",
          "description": "Fleet safety audits, Journey Management Plans (JMP), driver competency and wellness programmes, dangerous goods transport compliance (ADR/IMDG/IATA), and yard safety management across India.",
          "provider": { "@id": "https://www.insafetyservices.com/#organization" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Transportation Safety"
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