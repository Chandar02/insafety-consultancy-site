// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this 'env' block to explicitly expose public variables
  env: {
    // This forces Next.js to read the variable set in Vercel 
    // and bundle its value into the production code for client-side use.
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  },
  
  /* You can add other config options here if needed later */
};

export default nextConfig;