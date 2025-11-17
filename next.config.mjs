// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly expose the public environment variable
  env: {
    // This line forces Next.js to read the variable set in Vercel 
    // and bundle its value into the production code.
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  
  /* Add any other config options below this block if necessary */
};

export default nextConfig;