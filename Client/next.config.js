// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      // Cache all PDFs
      urlPattern: /^\/S2\/.*\.pdf$/,
      handler: "CacheFirst",
      options: {
        cacheName: "pdf-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
    {
      // Cache all images
      urlPattern: /^\/S2\/.*\.(png|jpg|jpeg|webp|avif|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
  // Step 2 fix: Turbopack safe
  turbopack: {},
};

module.exports = withPWA(nextConfig);