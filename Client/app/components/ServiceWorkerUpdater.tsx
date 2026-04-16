"use client";
import { useEffect } from "react";

export default function ServiceWorkerUpdater() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const registerSW = async () => {
      const registration = await navigator.serviceWorker.register("/service-worker.js");

      // 🔥 Check for updates immediately
      registration.update();

      // 🔥 Detect new SW installed
      registration.onupdatefound = () => {
        const newWorker = registration.installing;

        if (!newWorker) return;

        newWorker.onstatechange = () => {
          if (newWorker.state === "installed") {
            // If there is already a controller, new version exists
            if (navigator.serviceWorker.controller) {
              newWorker.postMessage({ type: "SKIP_WAITING" });
            }
          }
        };
      };
    };

    registerSW();

    // 🔥 Reload when new SW takes control
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }, []);

  return null;
}