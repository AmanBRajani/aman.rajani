// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // your existing config
  images: {
    unoptimized: true, // optional, helps with Netlify compatibility
  },
};

const withNetlify = require('@netlify/next');

module.exports = withNetlify(nextConfig);
