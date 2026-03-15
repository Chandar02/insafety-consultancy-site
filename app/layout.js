// app/layout.js
export const dynamic = "force-dynamic";

/* ============================
   SEO METADATA
   ============================ */
export const metadata = {
  title: {
    default: "Safety Consultant India | QRA, HAZOP, Risk Assessment, HSE Training – InSafety Services",
    template: "%s | InSafety Services",
  },
  description:
    "InSafety Services – India's trusted HSSEF consulting firm led by 34+ years of global expertise. Specialists in QRA, HAZOP, DISH/CIMAH/PNGRB safety reports, ISO 45001, industrial hygiene, emergency response planning, and safety training across Mumbai, Maharashtra, and pan-India.",
  keywords: [
    "safety consultant India",
    "QRA consultant India",
    "HAZOP study India",
    "DISH safety report",
    "CIMAH compliance India",
    "PNGRB QRA consultant",
    "risk assessment consultant India",
    "ISO 45001 consultant India",
    "industrial hygiene consultant India",
    "safety training India",
    "work at height training India",
    "permit to work PTW India",
    "emergency response plan India",
    "business continuity plan India",
    "incident investigation India",
    "process safety management India",
    "safety audit India",
    "HSE consultant Mumbai",
    "EHS consultant Maharashtra",
    "behavioural safety training India",
    "noise assessment India",
    "illumination audit India",
    "fire risk assessment India",
    "OISD compliance India",
    "PESO approval consultant India",
    "Factory Act safety compliance India",
    "safety consultant Thane",
    "safety consultant Navi Mumbai",
    "safety consultant Pune",
    "safety consultant Vadodara",
    "safety consultant Ahmedabad",
    "safety consultant Surat",
    "safety consultant Hyderabad",
    "safety consultant Chennai",
    "safety consultant Kolkata",
    "refinery safety consultant India",
    "chemical plant safety consultant India",
    "transportation safety India",
    "fleet safety program India",
    "yard safety management India",
    "machine safety India",
    "crisis management consultant India",
    "BCP consultant India",
    "safety culture transformation India",
    "BBS training India",
    "InSafety Services",
    "Chandarsingh Mehta safety consultant",
    "HSSEF consulting India",
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