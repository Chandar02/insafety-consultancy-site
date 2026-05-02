// app/layout.js
export const dynamic = "force-dynamic";

/* ============================
   SEO METADATA
   ============================ */
export const metadata = {
  title: {
    default: "HSE Consultant India | Risk Management, Process Safety & Compliance – InSafety Services",
    template: "%s | InSafety Services",
  },
  description:
    "Safety audits, risk management, process safety, legal compliance and crisis management — strategic to executional, for Indian and global clients.",
  keywords: [
    "HSE consultant India",
    "EHS consultant India",
    "OHS consultant India",
    "HSSE consultant India",
    "safety consultant India",
    "HSSEF consultant India",
    "health safety environment consultant India",
    "safety advisor India",
    "principal safety consultant India",
    "risk management consultant India",
    "qualitative risk assessment India",
    "quantitative risk assessment India",
    "QRA consultant India",
    "HAZOP study India",
    "risk assessment consultant India",
    "LOPA consultant India",
    "bow tie analysis India",
    "hybrid risk assessment India",
    "safety risk management India",
    "process safety management India",
    "process safety consultant India",
    "safety management system India",
    "SMS consultant India",
    "electrical safety audit India",
    "machine safety India",
    "work at height consultant India",
    "IRATA consultant India",
    "MCWP India",
    "permit to work India",
    "PTW system India",
    "building safety NFPA 101 India",
    "NBC compliance India",
    "safety by design India",
    "operational safety consultant India",
    "statutory compliance safety India",
    "legal compliance audit India",
    "Factories Act compliance India",
    "DISH safety report India",
    "CIMAH compliance India",
    "PNGRB QRA consultant India",
    "PESO compliance India",
    "OISD compliance India",
    "safety audit India",
    "safety audit consultant India",
    "gap assessment safety India",
    "compliance monitoring India",
    "safety compliance MNC India",
    "emergency response plan India",
    "crisis management consultant India",
    "business continuity plan India",
    "BCP consultant India",
    "emergency management India",
    "disaster management consultant India",
    "incident investigation India",
    "incident management India",
    "safety leadership India",
    "safety culture transformation India",
    "behavioural safety training India",
    "BBS training India",
    "safety training India",
    "HSE training India",
    "safety education India",
    "transportation safety India",
    "fleet safety India",
    "pan India safety consultant",
    "safety consultant for MNC India",
    "global companies safety India",
    "European MNC safety compliance India",
    "multinational safety consultant India",
    "safety consultant all industries India",
  ],
  alternates: {
    canonical: "https://www.insafetyservices.com/",
  },
  openGraph: {
    title: "Safety Consultant India | QRA, HAZOP, Risk Assessment – InSafety Services",
    description:
      "India's trusted HSSEF consulting firm. QRA, HAZOP, DISH/CIMAH safety reports, ISO 45001, industrial hygiene, emergency response, and safety training across all of India.",
    url: "https://www.insafetyservices.com/",
    siteName: "InSafety Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.insafetyservices.com/InSafety_Logo_Full.svg",
        width: 1200,
        height: 630,
        alt: "InSafety Services – Safety Consultant India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Consultant India | QRA, HAZOP, Risk Assessment – InSafety Services",
    description:
      "India's trusted HSSEF consulting firm. QRA, HAZOP, DISH/CIMAH safety reports, ISO 45001, and safety training across pan-India.",
    images: ["https://www.insafetyservices.com/InSafety_Logo_Full.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "YOUR_VERIFICATION_CODE",
  },
};

/* ============================
   GLOBAL IMPORTS
   ============================ */
import "./globals.css";
import Header from "../components/Header";
import GoogleAnalytics from "../components/GoogleAnalytics";

/* ============================
   STRUCTURED DATA
   ============================ */
import OrganizationSchema from "../components/schema/OrganizationSchema";
import PersonSchema from "../components/schema/PersonSchema";
import FAQSchema from "../components/schema/FAQSchema";
import ServiceSchema from "../components/schema/ServiceSchema";

/* ============================
   ROOT LAYOUT
   ============================ */
export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" style={{ margin: 0, padding: 0 }}>
      <head>
        {/* Structured Data – Invisible to users, read by Google */}
        <OrganizationSchema />
        <PersonSchema />
        <FAQSchema />
        <ServiceSchema />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <Header />
        <main style={{ margin: 0, padding: 0 }}>
          {children}
        </main>
        <GoogleAnalytics />
      </body>
    </html>
  );
}