import React, { useState, useEffect } from "react";
import Logosrc from "../components/Logosrc";
import BodyThemeToggle from "/src/components/BodyThemeToggle";

const HomeHeader = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDarkMode(saved);
    if (saved) document.documentElement.classList.add("dark");
  }, []);

  // Apply theme changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header className="homeheader flex items-center gap-4 p-4 bg-white dark:bg-black/30 backdrop-blur-sm">
      <Logosrc />

      <h1 className="flex-1 text-3xl font-bold text-center text-black dark:text-white transition-colors duration-300">
        Welcome to CSE 58 Batch Website
      </h1>
      <BodyThemeToggle />
    </header>
  );
};

export default HomeHeader;
