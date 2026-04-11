"use client";
import { useEffect } from "react";

export default function ServiceWorkerUpdater() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register("/service-worker.js");

    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data === "RELOAD") window.location.reload();
    });
  }, []);

  return null;
}