const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  clientsClaim: true,
  disable: process.env.NODE_ENV === "development",

  additionalManifestEntries: [
    { url: "/apple-touch-icon.png", revision: null },
    { url: "/pwa-192x192.png", revision: null },
    { url: "/pwa-512x512.png", revision: null },
    { url: "/favicon.ico", revision: null },
    { url: "/", revision: null },
    { url: "/S1", revision: null },
    { url: "/S2", revision: null },
    { url: "/S2/Calendar/academic_calendar_2026.jpg", revision: null },
    { url: "/S2/discrete", revision: null },
    { url: "/S2/discrete/DiscreteMid", revision: null },
    { url: "/S2/discrete/DiscreteMid/DiscreteCh1", revision: null },
    { url: "/S2/discrete/DiscreteMid/DiscreteCh2", revision: null },
    { url: "/S2/discrete/DiscreteBook", revision: null },
    { url: "/S2/discrete/DiscreteFinal", revision: null },
    { url: "/S2/eee", revision: null },
    { url: "/S2/Eee/EeeCh1Answers.pdf", revision: null },
    { url: "/S2/Eee/EeeCh1Notes.pdf", revision: null },
    { url: "/S2/Eee/EeeCh2Notes.pdf", revision: null },
    { url: "/S2/Eee/y-del.pdf", revision: null },
    { url: "/S2/Eee/EeeCh2Ques.pdf", revision: null },
    { url: "/S2/eee/EeeMid", revision: null },
    { url: "/S2/eee/EeeFinal", revision: null },
    { url: "/S2/eee/EeeLab", revision: null },
    { url: "/S2/oop", revision: null },
    { url: "/S2/oop/OopMid", revision: null },
    { url: "/S2/oop/OopFinal", revision: null },
    { url: "/S2/oop/JavaCode", revision: null },
    { url: "/S2/opde", revision: null },
    { url: "/S2/opde/OpdeMid", revision: null },
    { url: "/S2/opde/OpdeFInal", revision: null },
    { url: "/S2/bs", revision: null },
    { url: "/S2/bs/BsMid", revision: null },
    { url: "/S2/bs/BsFinal", revision: null },
    { url: "/S2/bs/BsHistory", revision: null },
    { url: "/S2/wad", revision: null },
    { url: "/S2/wad/WadCode", revision: null },
    { url: "/S2/ed", revision: null },
    { url: "/S2/calendar", revision: null },
  ],

  runtimeCaching: [
    {
      // JS & CSS
      urlPattern: /\.(?:js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources-v2",
      },
    },
    {
      // PDFs
      urlPattern: /^\/S2\/.*\.pdf$/,
      handler: "CacheFirst",
      options: {
        cacheName: "pdf-cache-v1",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    {
      // Images
      urlPattern: /^\/S2\/.*\.(png|jpg|jpeg|webp|avif|svg)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache-v2",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    {
      // Pages (offline support)
      urlPattern: ({ request }) => request.mode === "navigate",
      handler: "NetworkFirst",
      options: {
        cacheName: "page-cache-v2",
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
};

module.exports = withPWA(nextConfig);
