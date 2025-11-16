// components/GoogleAnalytics.js
"use client"; // This component needs to run in the client environment

import Script from 'next/script';

const GoogleAnalytics = ({ measurementId }) => {
  if (!measurementId) return null;

  return (
    <>
      {/* Google Tag Manager/Analytics Base Script */}
      <Script
        strategy="afterInteractive" // Loads after the page is interactive (best for performance)
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      
      {/* Analytics Initialization Script */}
      <Script 
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;