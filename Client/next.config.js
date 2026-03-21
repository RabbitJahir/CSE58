const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  clientsClaim: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      // JS & CSS
      urlPattern: /\.(?:js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources-v1",
      },
    },
    {
      // PDFs
      urlPattern: /^\/S2\/.*\.pdf$/,
      handler: "CacheFirst",
      options: {
        cacheName: "pdf-cache-v1",// always update after updates/ huge updates, v2, v3 so on
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    {
      // Images
      urlPattern: /^\/S2\/.*\.(png|jpg|jpeg|webp|avif|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache-v1", // always update after updates/ huge updates, v2, v3 so on
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    {
      // Pages
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "page-cache-v1",// always update after updates/ huge updates, v2, v3 so on
        networkTimeoutSeconds: 3,
        expiration: {
          maxEntries: 50,
        },
      },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
};

module.exports = withPWA(nextConfig);
