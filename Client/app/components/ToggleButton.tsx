// opens buttons and diretly shows pdfs
"use client";

import { useState } from "react";

type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function ToggleButton({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {sections.map((section) => (
        <div key={section.id}>
          <button
            className={`SubButton ${open === section.id ? "active" : ""}`}
            onClick={() => toggle(section.id)}
          >
            {section.title}
          </button>

          {open === section.id && section.content}
        </div>
      ))}
    </>
  );
}