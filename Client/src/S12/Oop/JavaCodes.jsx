import React, { useState } from "react";
import { oopCodes } from "./OopCodes"; 
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import BodyThemeToggle from "../../components/BodyThemeToggle";

const JavaCodes = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  const links = [
  { to: "/", label: "Home Page", className: "HeaderButton" },
  { to: "/S12", label: "S 12 Page", className: "HeaderButton" },
  { to: "/S12/Oop", label: "OOP Page", className: "HeaderButton" },
];


  return (
    <div className="min-h-screen flex flex-col">
      
      <Header links={links} />
      <BodyThemeToggle/>
      {/*------------------------------MAIN----------------------------------------------- */}
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
              className="HeaderButton"
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
        <a
          href="https://drive.google.com/drive/folders/1Rup6liK_sjp6DnQODJHbkU6Bh0vF2QCP"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Java Codes<sub> - Kamrul Islam</sub>
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default JavaCodes;
