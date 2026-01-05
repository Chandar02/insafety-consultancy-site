// components/schema/PersonSchema.js

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chandarsingh Mehta",
    jobTitle: "Founder & Principal Consultant – Risk-Led HSSEF Transformation",
    worksFor: {
      "@type": "Organization",
      name: "InSafety Services"
    },
    description:
      "Chandarsingh Mehta is a globally experienced safety and risk professional with over 34 years of leadership across HSSEF, HSE, EHS and OHS domains.",
    sameAs: [
      "https://www.linkedin.com/in/chandarsingh-mehta-3232516"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
