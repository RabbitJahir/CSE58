import React, { useState } from "react";
import { oopCodes } from "./OopCodes"; //same folder
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Logosrc from "../../components/Logosrc";
import { Link } from "react-router-dom";

const JavaCodes = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-black/20 backdrop-blur-sm text-white w-full gap-2 sm:gap-4">
        {/* Left: logo */}
        <div className="flex items-center gap-4">
          <Logosrc className="mx-auto sm:mx-0" />
        </div>

        {/* Right: buttons */}
        <div className="flex flex-wrap gap-2">
          <Link to="/">
            <button className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400">
              Home Page
            </button>
          </Link>
          <Link to="/S12">
            <button className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400">
              S 12 Page
            </button>
          </Link>
          <Link to="/S12/Oop">
            <button className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400">
              OOP Page
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-grow p-4 flex flex-col gap-4 w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          OOP Mid Java Codes
        </h1>

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

            {open === snippet.id && (
              <div className="mt-3 relative">
                <pre className="overflow-x-auto bg-black/50 p-3 rounded text-sm font-mono">
                  {snippet.code}
                </pre>
                <button
                  className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-400"
                  onClick={() => copyCode(snippet.code)}
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default JavaCodes;
