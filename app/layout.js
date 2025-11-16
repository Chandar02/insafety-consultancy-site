// app/layout.js 

import './globals.css';
import GoogleAnalytics from '../components/GoogleAnalytics'; // Import the new component

export default function RootLayout({ children }) {
  // IMPORTANT: The Measurement ID is read from an environment variable for security.
  // Use a fallback of 'G-XXXXXXXXXX' if the variable isn't set (e.g., during a build).
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Load Google Analytics component at the end of the body */}
        {/* It only loads if NEXT_PUBLIC_GA_ID is present */}
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}