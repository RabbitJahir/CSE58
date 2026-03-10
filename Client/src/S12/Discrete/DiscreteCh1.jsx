import React, { useState } from "react";
import Header from "../../components/Header";
import { discretech1solve } from "./DiscreteCh1Solve";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";
import BodyThemeToggle from "../../components/BodyThemeToggle";

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

  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header links={links} />
      <BackToTop />
      <br />
      <br />
      <BodyThemeToggle />

      <main className="flex-grow p-4 flex flex-col gap-4 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Discrete Chapter 1 Page</h2>
        <div className="SubButton">
          Exercise: 1.1, Id: 1-54 <br />
          Exercise: 1.2, Id: 55-101 <br />
          Exercise: 1.3, Id: 101-173
          <br />
          Exercise: 1.4, Id: 174-237 <br />
          Exercise: 1.5, Id: 238-289 <br />
          Exercise: 1.6, Id: 290-324
          <br />
          Exercise: 1.7, Id: 325-368 <br /> Exercise: 1.8, Id: 369-420 <br />{" "}
          !UNDER CONSTRUCTION!
        </div>
        <input
          type="number"
          placeholder="Search by ID"
          className="w-full p-2 rounded border border-gray-400 mb-4 text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {discretech1solve
          .filter((snippet) =>
            search === "" ? true : snippet.id === Number(search),
          )
          .map((snippet) => (
            <div
              key={snippet.id}
              className="bg-black/20 p-4 rounded-lg text-white backdrop-blur-sm"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold">{snippet.title}</h3>

              {/* Question */}
              <pre className="text-gray-300 mt-2 whitespace-pre-wrap">
                {snippet.description}
              </pre>

              {/* Toggle button */}
              <button
                className="HeaderButton mt-3"
                onClick={() => toggle(snippet.id)}
              >
                {open === snippet.id ? "Hide Solution ▲" : "Show Solution ▼"}
              </button>

              {/* Solution */}
              {open === snippet.id && (
                <div className="mt-3 bg-black/40 p-3 rounded">
                  <h4 className="font-semibold text-yellow-400 mb-2">
                    Solution
                  </h4>

                  <pre className="whitespace-pre-wrap text-gray-200">
                    {snippet.code}
                  </pre>

                  <button
                    className="mt-2 bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-400"
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

export default DiscreteCh1;
