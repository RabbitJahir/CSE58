import React, { useState } from "react";
import Header from "../../components/Header";
import { discretech1solve } from "./DiscreteCh1Solve"; 
import Footer from "../../components/Footer";

const links = [
  { to: "/", label: "Home Page", className: "HeaderButton" },
  { to: "/S12", label: "S 12 Page", className: "HeaderButton" },
  { to: "/S12/Discrete", label: "Discrete Page", className: "HeaderButton" },
];

const DiscreteCh1 = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen(open === id ? null : id);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header links={links} />
      
      <main className="flex-grow p-4 flex flex-col gap-4 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Discrete Mathematics Page</h2>

        {discretech1solve.map((snippet, index) => (
          <div
            key={snippet.id}
            className="bg-black/20 p-4 rounded-lg text-white relative backdrop-blur-sm"
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
      </main>
      <Footer/>
    </div>
  );
};

export default DiscreteCh1;

