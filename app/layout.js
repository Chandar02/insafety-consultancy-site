export const dynamic = "force-dynamic";

import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Header from "../components/Header";   // ← ADD THIS

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />            {/* ← ADD THIS */}
        <main>{children}</main>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
