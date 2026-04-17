// Inside ToggleButton, Another toggle Layer
"use client";

import { useState } from "react";

type FileItem = {
  label: string;
  href: string;
};

type Chapter = {
  id: string;
  title: string;
  files: FileItem[];
};

export default function TogglePdf({ chapters }: { chapters: Chapter[] }) {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <main className="mid-container">
      {chapters.map((ch) => (
        <div key={ch.id}>
          {/* Chapter Button */}
          <button
            onClick={() => toggle(ch.id)}
            className={`SubButton ${open === ch.id ? "active" : ""}`}
          >
            {ch.title}
          </button>

          {/* Files */}
          {open === ch.id && (
            <div className="flex flex-col gap-2 w-full">
              {ch.files.map((file, index) => (
                <a
                  key={index}
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="SubButton w-full text-center block"
                >
                  {file.label} <sub>-Download</sub>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}