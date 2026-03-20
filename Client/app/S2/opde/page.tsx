"use client";
import { useState } from "react";
import Link from "next/link";

import Header from "../../components/Header/Index";
import OpdeMid from "./OpdeMid/page";
import OpdeFinal from "./OpdeFInal/page";

const links = [
  { href: "/", label: "Home" },
  { href: "/S2", label: "S2 Page" },
];

export default function opde() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (section: string) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  return (
    <div >
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">OPDE</h1>

        <button
          className={`SubButton ${open === "OpdeMid" ? "active" : ""}`}
          onClick={() => toggle("OpdeMid")}
        >
          Mid Syllabus
        </button>
        {open === "OpdeMid" && <OpdeMid />}

        <button
          className={`SubButton ${open === "OpdeFinal" ? "active" : ""}`}
          onClick={() => toggle("OpdeFinal")}
        >
          Mid Syllabus
        </button>
        {open === "OpdeFinal" && <OpdeFinal />}

      </main>
    </div>
  );
}
