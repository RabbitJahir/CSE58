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
      includePublic: ["/S12/Calendar/*"], // folder with pictures, in public
      png: { quality: 80 },
      jpeg: { quality: 85 },
      webp: { lossless: false, quality: 90 },
      avif: { speed: 6, quality: 75 },
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
