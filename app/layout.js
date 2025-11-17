export const dynamic = "force-dynamic"; // This is fine

import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function RootLayout({ children }) {
  // Read env variable
  const GA_MEASUREMENT_ID =
    process.env.NEXT_PUBLIC_MEASUREMENT_ID || "G-XXXXXXXXXX";

  // Debug log — IMPORTANT
  console.log("GA from layout.js:", GA_MEASUREMENT_ID);

  return (
    <html lang="en">
      <body>
        {children}

        {/* Pass the variable to your GA component */}
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
