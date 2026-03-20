// components/NewVersionPrompt.tsx
"use client";

import { useEffect, useState } from "react";

export default function NewVersionPrompt() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

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
          window.location.reload(true); // Hard reload
        });
      });
    } else {
      window.location.reload(true);
    }
  };

  if (!updateAvailable) return null;

  return (
    <div
      className="
        fixed bottom-4 left-1/2 transform -translate-x-1/2
        bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50
        cursor-pointer animate-pulse hover:bg-blue-700
        transition-colors duration-300
      "
      onClick={refreshPage}
      role="alert"
    >
      ⚡ New version available! Click to refresh.
    </div>
  );
}