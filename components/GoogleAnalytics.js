// components/GoogleAnalytics.js
"use client"; 

import Script from 'next/script';

const GoogleAnalytics = ({ measurementId }) => {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') return null; // Added check for fallback value

  return (
    <>
      {/* Change strategy from 'afterInteractive' to 'lazyOnload' or 'worker' 
          We use lazyOnload to ensure it is loaded, but doesn't interfere with the head/preload logic. 
          Alternatively, you can just remove this Script since the link is preloaded and the init script covers it.
        */}
      <Script
        strategy="lazyOnload" 
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      
      {/* Analytics Initialization Script (KEEP AS IS) */}
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