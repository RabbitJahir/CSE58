import { useEffect, useState } from "react";
import { APP_VERSION } from "../lib/version";

export function useAppVersion() {
  const [outdated, setOutdated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("app_version");

    if (!stored) {
      localStorage.setItem("app_version", APP_VERSION);
      return;
    }

    if (stored !== APP_VERSION) {
      setOutdated(true);
    }
  }, []);

  const syncVersion = () => {
    localStorage.setItem("app_version", APP_VERSION);
    setOutdated(false);
  };

  return { outdated, syncVersion };
}