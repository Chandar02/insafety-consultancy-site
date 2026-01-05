// app/layout.js
export const dynamic = "force-dynamic";

/* ============================
   SEO METADATA (STEP 1)
   ============================ */
export const metadata = {
  title: {
    default:
      "Risk-Led HSSEF, HSE, EHS & OHS Consulting | Safety, Fire & Process Safety – InSafety Services",
    template: "%s | InSafety Services",
  },
  description:
    "InSafety Services delivers risk-led safety consulting across HSSEF, HSE, EHS and OHS domains in India and global markets. We specialise in enterprise risk management, safety governance, process safety (PSM), fire & life safety design, compliance, audits and operational resilience.",
  alternates: {
    canonical: "https://www.insafetyservices.com/",
  },
};

/* ============================
   GLOBAL IMPORTS
   ============================ */
import "./globals.css";
import Header from "../components/Header";
import GoogleAnalytics from "../components/GoogleAnalytics";

/* ============================
   STRUCTURED DATA (STEP 4)
   ============================ */
import OrganizationSchema from "../components/schema/OrganizationSchema";
import PersonSchema from "../components/schema/PersonSchema";

/* ============================
   ROOT LAYOUT
   ============================ */
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
      <head>
        {/* Structured Data – Invisible, SEO-only */}
        <OrganizationSchema />
        <PersonSchema />
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
