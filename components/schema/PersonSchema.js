// components/schema/PersonSchema.js
// JSON-LD for Chandarsingh Mehta – builds E-E-A-T authority signals

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.insafetyservices.com/#chandarsingh-mehta",
    "name": "Chandarsingh Mehta",
    "alternateName": "Chandar Mehta",
    "jobTitle": "Founder & Principal Consultant – HSE",
    "description": "Chandarsingh Mehta is a globally recognised HSE leader with 34+ years of international experience in safety consulting, process safety, risk management, and operational resilience. He has advised multinational organisations including UBS, Credit Suisse, Maersk, IBM, and Nokia, and has delivered safety solutions across APAC, EMEA, and India.",
    "url": "https://www.insafetyservices.com/",
    "image": "https://www.insafetyservices.com/Chandar Profile Image.jpg",
    "email": "chandarsingh@live.com",
    "telephone": "+91-90827-66847",
    "sameAs": [
      "https://www.linkedin.com/in/chandarsingh-mehta-3232516"
    ],
    "worksFor": {
      "@type": "Organization",
      "@id": "https://www.insafetyservices.com/#organization",
      "name": "InSafety Services"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "Quantitative Risk Assessment (QRA)",
      "HAZOP Study",
      "Process Safety Management",
      "DISH CIMAH PNGRB Regulatory Compliance India",
      "ISO 45001 Occupational Health and Safety",
      "Industrial Hygiene",
      "Emergency Response Planning",
      "Business Continuity Planning",
      "Safety Culture Transformation",
      "Behavioural Based Safety (BBS)",
      "Work at Height Safety",
      "Permit to Work Systems",
      "Incident Investigation Root Cause Analysis",
      "Fire and Life Safety Engineering",
      "NFPA 101 Life Safety Code",
      "OISD Compliance India",
      "Transportation and Fleet Safety",
      "Contractor Safety Management",
      "Safety Governance",
      "Crisis Management",
      "Machine Safety",
      "Electrical Safety Audits",
      "MSIHC Rules India",
      "Factory Act Safety Compliance India"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "34+ Years Global HSE Experience",
        "description": "Over 34 years of hands-on experience in health, safety, security, environment and fire consulting across high-hazard industries globally."
      }
    ],
    "alumniOf": [],
    "nationality": "Indian"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}