import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Logosrc from "../../components/Logosrc";
import { Link } from "react-router-dom";

const JavaCodes = () => {
  const [open, setOpen] = useState(null);
  const [oopCodes, setOopCodes] = useState([]); // initially empty

  const toggle = (id) => setOpen(open === id ? null : id);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  // Lazy load codes when component mounts
  useEffect(() => {
    import("./OopCodes.js").then((module) => {
      setOopCodes(module.oopCodes); // assign the array
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ...HEADER CODE SAME AS BEFORE... */}
      <main className="flex-grow p-4 flex flex-col gap-4 w-full max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold text-center mb-6 text-white">
    OOP Mid Java Codes
  </h1>

  {/* 1. Render all titles */}
  {oopCodes.map((snippet, index) => (
    <div
      key={snippet.id}
      className="bg-black/20 p-4 rounded-lg text-white relative"
    >
      <button
        className="flex justify-between items-center w-full text-left font-bold"
        onClick={() => toggle(snippet.id)}
      >
        <span>
          {index + 1}. {snippet.title}
        </span>
        <span>{open === snippet.id ? "▲" : "▼"}</span>
      </button>

      <p className="text-gray-300 mt-1">{snippet.description}</p>
    </div>
  ))}

  {/* 2. Render only the expanded code */}
  {open && (
    <div className="mt-4 bg-black/20 p-4 rounded-lg text-white relative max-w-4xl mx-auto">
      <pre className="overflow-x-auto bg-black/50 p-3 rounded text-sm font-mono">
        {oopCodes.find((s) => s.id === open)?.code}
      </pre>
      <button
        className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-400"
        onClick={() =>
          copyCode(oopCodes.find((s) => s.id === open)?.code)
        }
      >
        Copy
      </button>
    </div>
  )}
</main>
           
      <Footer />
    </div>
  );
};

export default JavaCodes;