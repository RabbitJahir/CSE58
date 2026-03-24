"use client"; // Needed in Next 13+ app directory for client-side component

import React, { useEffect, useState, MouseEvent } from "react";

const BackToTop: React.FC = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true); // confirm we are in browser
  }, []);

  const scrollToTop = () => {
    if (isBrowser) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "rgba(234, 179, 8, 1)";
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "rgba(234, 179, 8, 0.9)";
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        title="Back to top"
        style={{
          position: "fixed",
          top: "6rem",
          right: "1rem",
          zIndex: 9999,
          background: "rgba(234, 179, 8, 0.9)",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          padding: "8px 14px",
          fontWeight: "bold",
          fontSize: "0.85rem",
          cursor: "pointer",
          backdropFilter: "blur(4px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
          transition: "background 0.2s",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        ↑ Top
      </button>
    </div>
  );
};

export default BackToTop;