"use client";
import { useState } from "react";

import Header from "../../components/Header/Index";
import EeeMid from "./EeeMid/page";
import EeeFinal from "./EeeFinal/page";
import Link from "next/link";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

export default function eee() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (section: string) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  return (
    <div >
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">EEE</h1>

        <Link href="/S2/eee/EeeLab" className="SubButton">EEE Lab Page</Link>

        <button
          className={`SubButton ${open === "EeeMid" ? "active" : ""}`}
          onClick={() => toggle("EeeMid")}
        >
          Mid Syllabus
        </button>
        {open === "EeeMid" && <EeeMid />}

        <button
          className={`SubButton ${open === "EeeFinal" ? "active" : ""}`}
          onClick={() => toggle("EeeFinal")}
        >
          Final Syllabus
        </button>
        {open === "EeeFinal" && <EeeFinal />}
      </main>
    </div>
  );
}
