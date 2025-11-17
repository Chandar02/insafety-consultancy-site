// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add the env block to explicitly pass the public variable
  env: {
    // This key/value pair exposes the variable to the client bundle
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  
  /* You can add other config options here if needed later */
};

export default nextConfig;