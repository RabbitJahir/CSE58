"use client";

import { useState } from "react";

export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export default function CodeExplorer({
  data,
}: {
  data: Snippet[];
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");

  const toggle = (id: number) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  const filtered =
    search === ""
      ? data
      : data.filter((s) => s.id === Number(search));

  return (
    <>
      {/* Search */}
      <input
        type="number"
        placeholder="Search by ID"
        className="w-full p-2 rounded border border-gray-400 mb-4 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Snippets */}
      {filtered.map((snippet) => (
        <div
          key={snippet.id}
          className="bg-black/20 p-4 rounded-lg text-white backdrop-blur-sm w-full mb-4"
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
    </>
  );
}