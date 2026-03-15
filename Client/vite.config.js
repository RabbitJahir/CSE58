import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import ViteOptimizeVideos from "vite-plugin-optimize-videos";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ open: true }),
    ViteImageOptimizer({
      include: ["**/*.{png,jpg,jpeg,webp,avif,svg}"],
      includePublic: ["**/*.{png,jpg,jpeg,webp,avif,svg}"],
      png: { quality: 70, compressionLevel: 9 },
      jpeg: { quality: 75, progressive: true },
      webp: { quality: 80 },
      avif: { quality: 55, speed: 4 },
      svg: { multipass: true },
    }),
    ViteOptimizeVideos({
      outputPath: "dist/S12",
      compression: "medium",
      formats: ["mp4", "webm"],
      removeAudio: true,
    }),
    // ✅ NOW inside plugins array
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "CSE 58",
        short_name: "Cse58",
        description: "An app for 58th batch!",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/api/, /\.pdf$/],

        // ✅ Only precache small assets
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2,avif,webp}"],

        // ✅ Exclude PDFs from precache entirely
        globIgnores: ["**/*.pdf"],

        // ✅ Cache PDFs on-demand when user accesses them
        runtimeCaching: [
          {
            urlPattern: /\.pdf$/,
            handler: "CacheFirst",
            options: {
              cacheName: "pdf-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [200],
              },
            },
          },
        ],
      },
    }),
  ],

  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ["elaine-warded-tamisha.ngrok-free.dev"],
  },
});
