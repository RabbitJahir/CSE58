"use client";

import { useEffect, useState } from "react";

export default function NewVersionPrompt() {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.ready.then((registration) => {
      // Check if there's already a waiting worker on load
      if (registration.waiting) {
        setWaitingWorker(registration.waiting);
        setTimeout(() => setFadeIn(true), 50);
      }

      // Watch for new SW found
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;

        newWorker.addEventListener("statechange", () => {
          // Catch it at "installed" (waiting) state
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            setWaitingWorker(newWorker);
            setTimeout(() => setFadeIn(true), 50);
          }
        });
      });
    });

    // When SW controller changes (new SW took over), reload
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }, []);

  const applyUpdate = () => {
    if (!waitingWorker) return;
    // Tell the waiting SW to skip waiting and activate
    waitingWorker.postMessage({ type: "SKIP_WAITING" });
  };

  if (!waitingWorker) return null;

  return (
    <div
      onClick={applyUpdate}
      role="alert"
      className={`
        fixed bottom-6 left-1/2 transform -translate-x-1/2
        bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg
        cursor-pointer z-50
        transition-all duration-500
        ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        hover:bg-blue-700
      `}
    >
      ⚡ New version available! Click to refresh.
    </div>
  );
}