// src/components/BodyThemeToggle.jsx
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const BodyThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  const toggleTheme = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.style.background =
        "linear-gradient(135deg, #4f32b6 0%, #1a1a1a 50%, #4f32b6 100%)";
      document.body.style.color = "#ffffff";
      document.documentElement.classList.add("dark");
    } else {
      document.body.style.background =
        "linear-gradient(135deg, #f59e0b 0%, #ffffff 50%, #f59e0b 100%)";
      document.body.style.color = "#1a1a1a";
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-end">
      <button
        onClick={toggleTheme}
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-black hover:ring-2 hover:ring-yellow-400 transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default BodyThemeToggle;