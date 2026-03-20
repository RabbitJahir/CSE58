"use client";
import { useState } from "react";
import Link from "next/link";

import Header from "../../components/Header/Index";
import OopMid from "./OopMid/page";
import OopFinal from "./OopFinal/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

export default function oop() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (section: string) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">OOP </h1>

        <Link className="SubButton" href="/S2/oop/JavaCode">
          Java Codes
        </Link>

        <Link
          href="https://drive.google.com/drive/folders/1Rup6liK_sjp6DnQODJHbkU6Bh0vF2QCP"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Java Codes<sub> - Kamrul Islam</sub>
        </Link>

        <button
          className={`SubButton ${open === "OopMid" ? "active" : ""}`}
          onClick={() => toggle("OopMid")}
        >
          Mid Syllabus
        </button>
        {open === "OopMid" && <OopMid />}

        <button
          className={`SubButton ${open === "OopFinal" ? "active" : ""}`}
          onClick={() => toggle("OopFinal")}
        >
          Final Syllabus
        </button>
        {open === "OopFinal" && <OopFinal />}
      </main>
    </div>
  );
}
