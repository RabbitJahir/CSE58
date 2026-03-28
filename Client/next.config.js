const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  clientsClaim: true,
  disable: process.env.NODE_ENV === "development",

  additionalManifestEntries: [
    { url: "/apple-touch-icon.png", revision: "v1.0.0" },
    { url: "/pwa-192x192.png", revision: "v1.0.0" },
    { url: "/pwa-512x512.png", revision: "v1.0.0" },
    { url: "/favicon.ico", revision: "v1.0.0" },
    { url: "/", revision: "v1.0.0" },
    { url: "/S1", revision: "v1.0.0" },
    { url: "/S2", revision: "v1.0.0" },
    { url: "/S2/calendar", revision: "v1.0.0" },
    { url: "/S2/Calendar/academic_calendar_2026.jpg", revision: "v1.0.1" },
    { url: "/S2/Calendar/routine2ndsem.png", revision: "v1.0.0" },
    { url: "/S2/discrete", revision: "v1.0.0" },
    { url: "/S2/discrete/DiscreteMid", revision: "v1.0.0" },
    { url: "/S2/discrete/DiscreteMid/DiscreteCh1", revision: "v1.0.0" },
    { url: "/S2/discrete/DiscreteMid/DiscreteCh2", revision: "v1.0.0" },
    { url: "/S2/discrete/DiscreteBook", revision: "v1.0.0" },
    { url: "/S2/discrete/DiscreteFinal", revision: "v1.0.0" },
    { url: "/S2/eee", revision: "v1.0.0" },
    { url: "/S2/Eee/EeeCh1Answers.pdf", revision: "v1.0.0" },
    { url: "/S2/Eee/EeeCh1Notes.pdf", revision: "v1.0.0" },
    { url: "/S2/Eee/EeeCh2Notes.pdf", revision: "v1.0.0" },
    { url: "/S2/Eee/y-del.pdf", revision: "v1.0.1" },
    { url: "/S2/Eee/EeeCh2Ques.pdf", revision: "v1.0.0" },
    { url: "/S2/eee/EeeMid", revision: "v1.0.0" },
    { url: "/S2/eee/EeeFinal", revision: "v1.0.0" },
    { url: "/S2/eee/EeeLab", revision: "v1.0.0" },
    { url: "/S2/oop", revision: "v1.0.0" },
    { url: "/S2/oop/OopMid", revision: "v1.0.0" },
    { url: "/S2/oop/OopFinal", revision: "v1.0.0" },
    { url: "/S2/oop/JavaCode", revision: "v1.0.1" },
    { url: "/S2/opde", revision: "v1.0.0" },
    { url: "/S2/opde/OpdeMid", revision: "v1.0.0" },
    { url: "/S2/opde/OpdeFInal", revision: "v1.0.0" },
    { url: "/S2/bs", revision: "v1.0.0" },
    { url: "/S2/bs/BsMid", revision: "v1.0.0" },
    { url: "/S2/bs/BsFinal", revision: "v1.0.0" },
    { url: "/S2/bs/BsHistory", revision: "v1.0.0" },
    { url: "/S2/wad", revision: "v1.0.0" },
    { url: "/S2/wad/WadCode", revision: "v1.0.0" },
    { url: "/S2/ed", revision: "v1.0.0" },
    
  ],

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
        cacheName: "image-cache-v1",
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
        cacheName: "page-cache-v1",
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
