import React from "react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const BackToTop = () => {
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
        onMouseEnter={(e) =>
          (e.target.style.background = "rgba(234, 179, 8, 1)")
        }
        onMouseLeave={(e) =>
          (e.target.style.background = "rgba(234, 179, 8, 0.9)")
        }
      >
        ↑ Top
      </button>
    </div>
  );
};

export default BackToTop;
