"use client";
import { useState } from "react";
import Header from "../../components/Header/Index";
import DiscreteMid from "./DiscreteMid/page";
import DiscreteFinal from "./DiscreteFinal/page";
import DiscreteBook from "./DiscreteBook/page"

const links = [
  { href: "/", label: "Home", className:"HeaderButton" },
  { href: "/S2", label: "S2 Page", className:"HeaderButton" },
];

export default function discrete() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  return (
    <div >
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">Discrete</h1>

        {/* Toggle buttons with active class */}

        <button
          className={`SubButton ${open === "DiscreteBook" ? "active" : ""}`}
          onClick={() => toggle("DiscreteBook")}
        >
          Book & Chapters
        </button>
        {open === "DiscreteBook" && <DiscreteBook />}
        
        <button
          className={`SubButton ${open === "DiscreteMid" ? "active" : ""}`}
          onClick={() => toggle("DiscreteMid")}
        >
          Mid Syllabus
        </button>
        {open === "DiscreteMid" && <DiscreteMid />}

        <button
          className={`SubButton ${open === "DiscreteFinal" ? "active" : ""}`}
          onClick={() => toggle("DiscreteFinal")}
        >
          Final Syllabus
        </button>
        {open === "DiscreteFinal" && <DiscreteFinal />}
      </main>
    </div>
  );
}
