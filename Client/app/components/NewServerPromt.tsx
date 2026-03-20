// components/NewVersionPrompt.tsx
"use client";

import { useEffect, useState } from "react";

export default function NewVersionPrompt() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Detect new service worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        if (!registration) return;

        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              setUpdateAvailable(true);
              // trigger fade-in animation
              setTimeout(() => setFadeIn(true), 50);
            }
          });
        });
      });
    }
  }, []);

  // Hard refresh and unregister SWs
  const refreshPage = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        Promise.all(registrations.map((reg) => reg.unregister())).then(() => {
          window.location.reload(); // Hard reload
        });
      });
    } else {
      window.location.reload();
    }
  };

  if (!updateAvailable) return null;

  return (
    <div
      onClick={refreshPage}
      role="alert"
      className={`
        fixed bottom-6 left-1/2 transform -translate-x-1/2
        bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg
        cursor-pointer
        transition-all duration-500
        ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        hover:bg-blue-700
      `}
    >
      ⚡ New version available! Click to refresh.
    </div>
  );
}