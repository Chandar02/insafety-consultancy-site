// app/layout.js
export const dynamic = "force-dynamic";

import "./globals.css";
import Header from "../components/Header";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
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
