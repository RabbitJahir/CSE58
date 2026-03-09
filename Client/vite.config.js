import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
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
  ],

  server: {
    host: true, // allows external access
    port: 5173, // dev server port
    strictPort: true,
    allowedHosts: ["elaine-warded-tamisha.ngrok-free.dev"], // your ngrok URL
  },
});
