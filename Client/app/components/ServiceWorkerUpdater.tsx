"use client";
import { useEffect } from "react";

export default function ServiceWorkerUpdater() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload(); // auto reload when new SW takes over
    });

    navigator.serviceWorker.register("/service-worker.js");
  }, []);

  return null;
}