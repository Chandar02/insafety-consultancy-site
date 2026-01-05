// components/schema/OrganizationSchema.js

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InSafety Services",
    url: "https://www.insafetyservices.com",
    description:
      "InSafety Services provides enterprise safety and risk consulting across HSSEF, HSE, EHS and OHS domains, specialising in governance, audits, process safety, fire & life safety and operational resilience.",
    logo: "https://www.insafetyservices.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/in/chandarsingh-mehta-3232516"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Inquiries",
      email: "chandarsingh@live.com",
      telephone: "+91-90827-66847",
      areaServed: "IN"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
