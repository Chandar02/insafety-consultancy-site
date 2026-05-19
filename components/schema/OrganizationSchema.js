// components/schema/OrganizationSchema.js
// JSON-LD structured data for InSafety Services organisation
// Google reads this but users never see it

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://www.insafetyservices.com/#organization",
    "name": "InSafety Services",
    "legalName": "InSafety Services",
    "alternateName": [
      "InSafety",
      "InSafety Services India",
      "InSafety HSE Consulting"
    ],
    "url": "https://www.insafetyservices.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.insafetyservices.com/InSafety_Logo_Full.svg",
      "width": 300,
      "height": 100
    },
    "image": "https://www.insafetyservices.com/InSafety_Logo_Full.svg",
    "description": "InSafety Services is India's trusted HSE (Health, Safety and Environment) consulting firm, delivering risk-led safety solutions across QRA, HAZOP, process safety, industrial hygiene, emergency response planning, safety training, and ISO 45001 implementation for industries across India and global markets.",
    "slogan": "Solutions for Today's Challenges, Assurance for Tomorrow",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B-2/502, Green Acres-2 CHS Ltd, Wagbhil Road, Kavesar",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "postalCode": "400615",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.2183,
      "longitude": 72.9781
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-90827-66847",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-90827-66847",
        "contactType": "sales",
        "areaServed": "IN",
        "contactOption": "TollFree",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "email": "chandarsingh@live.com",
    "telephone": "+91-90827-66847",
    "sameAs": [
      "https://www.linkedin.com/in/chandarsingh-mehta-3232516",
      "https://www.linkedin.com/company/insafety-services"
    ],
    "vatID": "27ABXPM5408L1ZX",
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "GSTIN",
        "value": "27ABXPM5408L1ZX"
      },
      {
        "@type": "PropertyValue",
        "name": "MSME/Udyam",
        "value": "MH-33-0070049"
      },
      {
        "@type": "PropertyValue",
        "name": "Shop & Establishment License",
        "value": "2510200320430562"
      }
    ],
    "areaServed": [
      // Tier A Cities
      { "@type": "City", "name": "Mumbai", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "Country", "name": "India" } },
      { "@type": "City", "name": "Bengaluru", "containedInPlace": { "@type": "State", "name": "Karnataka" } },
      { "@type": "City", "name": "Hyderabad", "containedInPlace": { "@type": "State", "name": "Telangana" } },
      { "@type": "City", "name": "Chennai", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
      { "@type": "City", "name": "Kolkata", "containedInPlace": { "@type": "State", "name": "West Bengal" } },
      { "@type": "City", "name": "Pune", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Ahmedabad", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      // Tier B Cities
      { "@type": "City", "name": "Thane", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Navi Mumbai", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Nagpur", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Nashik", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Aurangabad", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Vadodara", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      { "@type": "City", "name": "Surat", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      { "@type": "City", "name": "Rajkot", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      { "@type": "City", "name": "Jamnagar", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      { "@type": "City", "name": "Visakhapatnam", "containedInPlace": { "@type": "State", "name": "Andhra Pradesh" } },
      { "@type": "City", "name": "Kochi", "containedInPlace": { "@type": "State", "name": "Kerala" } },
      { "@type": "City", "name": "Jaipur", "containedInPlace": { "@type": "State", "name": "Rajasthan" } },
      { "@type": "City", "name": "Lucknow", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Kanpur", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Indore", "containedInPlace": { "@type": "State", "name": "Madhya Pradesh" } },
      { "@type": "City", "name": "Bhopal", "containedInPlace": { "@type": "State", "name": "Madhya Pradesh" } },
      { "@type": "City", "name": "Raipur", "containedInPlace": { "@type": "State", "name": "Chhattisgarh" } },
      { "@type": "City", "name": "Bhubaneswar", "containedInPlace": { "@type": "State", "name": "Odisha" } },
      { "@type": "City", "name": "Guwahati", "containedInPlace": { "@type": "State", "name": "Assam" } },
      { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "Country", "name": "India" } },
      { "@type": "City", "name": "Ludhiana", "containedInPlace": { "@type": "State", "name": "Punjab" } },
      { "@type": "City", "name": "Amritsar", "containedInPlace": { "@type": "State", "name": "Punjab" } },
      { "@type": "City", "name": "Kota", "containedInPlace": { "@type": "State", "name": "Rajasthan" } },
      { "@type": "City", "name": "Patna", "containedInPlace": { "@type": "State", "name": "Bihar" } },
      { "@type": "City", "name": "Ranchi", "containedInPlace": { "@type": "State", "name": "Jharkhand" } },
      { "@type": "City", "name": "Coimbatore", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
      { "@type": "City", "name": "Mangalore", "containedInPlace": { "@type": "State", "name": "Karnataka" } },
      // Tier C / Industrial Hubs
      { "@type": "City", "name": "Haldia", "containedInPlace": { "@type": "State", "name": "West Bengal" } },
      { "@type": "City", "name": "Paradip", "containedInPlace": { "@type": "State", "name": "Odisha" } },
      { "@type": "City", "name": "Panipat", "containedInPlace": { "@type": "State", "name": "Haryana" } },
      { "@type": "City", "name": "Mathura", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Ankleshwar", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      { "@type": "City", "name": "Dahej", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      { "@type": "City", "name": "Hazira", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      { "@type": "City", "name": "Vapi", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      { "@type": "City", "name": "Mundra", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      { "@type": "City", "name": "Silvassa", "containedInPlace": { "@type": "Country", "name": "India" } },
      { "@type": "City", "name": "Taloja", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Ambernath", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Dombivli", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Raigad", "containedInPlace": { "@type": "State", "name": "Maharashtra" } },
      { "@type": "City", "name": "Cuddalore", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
      { "@type": "City", "name": "Manali", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
      { "@type": "City", "name": "Numaligarh", "containedInPlace": { "@type": "State", "name": "Assam" } },
      { "@type": "City", "name": "Digboi", "containedInPlace": { "@type": "State", "name": "Assam" } },
      { "@type": "City", "name": "Durgapur", "containedInPlace": { "@type": "State", "name": "West Bengal" } },
      { "@type": "City", "name": "Bhilai", "containedInPlace": { "@type": "State", "name": "Chhattisgarh" } },
      { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "State", "name": "Haryana" } },
      { "@type": "City", "name": "Gurugram", "containedInPlace": { "@type": "State", "name": "Haryana" } },
      { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Prayagraj", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Varanasi", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Udaipur", "containedInPlace": { "@type": "State", "name": "Rajasthan" } },
      { "@type": "City", "name": "Jodhpur", "containedInPlace": { "@type": "State", "name": "Rajasthan" } },
      { "@type": "Country", "name": "India" }
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HSE Consulting Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Quantitative Risk Assessment (QRA)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HAZOP Study & Facilitation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DISH / CIMAH / PNGRB Safety Reports" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ISO 45001 Implementation & Certification" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Hygiene Surveys (Noise, Illumination, Air Monitoring)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Response Planning (OEP / Offsite ERP)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Continuity Plan (BCP) & Crisis Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Safety Training (WAH, PTW, Confined Space, BBS)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incident Investigation & Root Cause Analysis" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Safety Audit & Compliance Assessment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Behavioural Safety (BBS) & Safety Culture Transformation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Risk Assessment & Life Safety Code (NFPA 101 / NBC)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Process Safety Management (PSM)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transportation & Fleet Safety Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Permit to Work (PTW) System Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Machine Safety Assessment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Safety Audit" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Risk Profile Development" } }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}