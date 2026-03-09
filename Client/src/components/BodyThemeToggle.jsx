import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // or your icon library

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.style.background =
        "linear-gradient(135deg, #4f32b6 0%, #1a1a1a 50%, #4f32b6 100%)";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.background =
        "linear-gradient(135deg, #f59e0b 0%, #ffffff 50%, #f59e0b 100%)";
      document.body.style.color = "#1a1a1a";
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-gray-200 text-black hover:ring-2 hover:ring-yellow-400 transition-all duration-300`}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggleButton;