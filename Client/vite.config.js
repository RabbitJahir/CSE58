import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import ViteOptimizeVideos from "vite-plugin-optimize-videos";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ open: true }),
    ViteImageOptimizer({
      include: ["**/*.{png,jpg,jpeg,webp,avif,svg}"],
      includePublic: ["**/*.{png,jpg,jpeg,webp,avif,svg}"],

      png: {
        quality: 70,
        compressionLevel: 9,
      },

      jpeg: {
        quality: 75,
        progressive: true,
      },

      webp: {
        quality: 80,
      },

      avif: {
        quality: 55,
        speed: 4,
      },

      svg: {
        multipass: true,
      },
    }),
    ViteOptimizeVideos({
      outputPath: "dist/S12",
      compression: "medium",
      formats: ["mp4", "webm"],
      removeAudio: true,
    }),
  ],

  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ["elaine-warded-tamisha.ngrok-free.dev"], // your ngrok URL
  },
});
