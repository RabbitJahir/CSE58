"use client";
import { useEffect } from "react";

export default function ServiceWorkerUpdater() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const registerSW = async () => {
      const registration = await navigator.serviceWorker.register("/service-worker.js");

      registration.update();

      registration.onupdatefound = () => {
        const newWorker = registration.installing;

        if (!newWorker) return;

        newWorker.onstatechange = () => {
          if (newWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              newWorker.postMessage({ type: "SKIP_WAITING" });
            }
          }
        };
      };
    };

    registerSW();

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }, []);

  return null;
}