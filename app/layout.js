export const dynamic = "force-dynamic";

import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function RootLayout({ children }) {
  console.log("GA from layout.js:", process.env.NEXT_PUBLIC_MEASUREMENT_ID);

  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__GA_TEST__ = "${process.env.NEXT_PUBLIC_MEASUREMENT_ID}";
            `,
          }}
        />
      </body>
    </html>
  );
}
