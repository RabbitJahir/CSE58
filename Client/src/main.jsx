import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { registerSW } from 'virtual:pwa-register';

// Register service worker
registerSW({
  onNeedRefresh() {
    if (confirm('New version available bro!! Reload yeah?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('Ready to work offline yo!');
  },
});

createRoot(document.getElementById("root")).render(<App />);