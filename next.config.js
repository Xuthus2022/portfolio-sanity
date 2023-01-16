/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.g2crowd.com", "cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },
};

