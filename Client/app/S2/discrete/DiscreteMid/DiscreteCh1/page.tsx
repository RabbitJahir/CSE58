"use client"; // useState needed
import { useState } from "react";

import Header from "@/app/components/Header/Index";
import { discretech1solve, Snippet } from "./discretech1solve";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/discrete", label: "Discrete Page", className: "HeaderButton" },
];

export default function DiscreteCh1() {
  const [open, setOpen] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");

  const toggle = (id: number) => setOpen(open === id ? null : id);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">Discrete Chapter 1 Page</h1>

        <div className="SubButton">
          Exercise: 1.1, Id: 1-54 <br />
          Exercise: 1.2, Id: 55-101 <br />
          Exercise: 1.3, Id: 101-173 <br />
          Exercise: 1.4, Id: 174-237 <br />
          Exercise: 1.5, Id: 238-289 <br />
          Exercise: 1.6, Id: 290-324 <br />
          Exercise: 1.7, Id: 325-368 <br />
          Exercise: 1.8, Id: 369-420 <br /> !UNDER CONSTRUCTION!
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
          .map((snippet: Snippet) => (
            <div
              key={snippet.id}
              className="bg-black/20 p-4 rounded-lg text-white backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold">{snippet.title}</h3>

              <pre className="text-gray-300 mt-2 whitespace-pre-wrap">
                {snippet.description}
              </pre>

              <button
                className="HeaderButton mt-3"
                onClick={() => toggle(snippet.id)}
              >
                {open === snippet.id ? "Hide Solution ▲" : "Show Solution ▼"}
              </button>

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
    </div>
  );
}
