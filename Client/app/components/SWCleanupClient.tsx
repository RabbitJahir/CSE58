"use client";

import { useEffect } from "react";

export default function SWCleanupClient() {
  useEffect(() => {
    const run = async () => {
      if (!("serviceWorker" in navigator)) return;

      const regs = await navigator.serviceWorker.getRegistrations();
      for (const reg of regs) {
        await reg.unregister();
      }

      const keys = await caches.keys();
      for (const key of keys) {
        await caches.delete(key);
      }

      console.log("SW + Cache cleaned");
    };

    run();
  }, []);

  return null;
}