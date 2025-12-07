// app/layout.js
export const dynamic = "force-dynamic";

import "./globals.css";
import Header from "../components/Header";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />   {/* <---- HEADER MUST BE HERE */}

        <main>
          {children}
        </main>

        <GoogleAnalytics />
      </body>
    </html>
  );
}
