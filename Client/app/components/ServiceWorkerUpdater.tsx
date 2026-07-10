// "use client";

// import { useEffect } from "react";

// export default function ServiceWorkerUpdater() {
//   useEffect(() => {
//     if ("serviceWorker" in navigator) {
//       navigator.serviceWorker.getRegistrations().then((registrations) => {
//         for (const reg of registrations) {
//           reg.unregister();
//         }
//       });

//       // Optional: clear caches too (VERY important)
//       if ("caches" in window) {
//         caches.keys().then((names) => {
//           names.forEach((name) => caches.delete(name));
//         });
//       }
//     }
//   }, []);

//   return null;
// }