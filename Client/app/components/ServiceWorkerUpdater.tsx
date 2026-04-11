"use client";

import { useEffect, useState } from "react";
import NewVersionPrompt from "./NewServerPromt";

export default function ServiceWorkerUpdater() {
  const [newWorker, setNewWorker] = useState<ServiceWorker | null>(null);
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // 🔄 When new SW takes control → reload to get fresh content
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });

    navigator.serviceWorker.register("/service-worker.js").then((reg) => {
      reg.onupdatefound = () => {
        const worker = reg.installing;
        if (!worker) return;

        worker.onstatechange = () => {
          if (
            worker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            console.log("🔥 New version available");
            setNewWorker(worker);
            setShowUpdate(true);
          }
        };
      };
    });
  }, []);

  if (!showUpdate || !newWorker) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <NewVersionPrompt newWorker={newWorker} />
    </div>
  );
}
