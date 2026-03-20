"use client"; // required for useState
import { useState } from "react";
import Link from "next/link";
import BsMid from "./BsMid/page"
import BsFinal from "./BsFinal/page";
import Header from "../../components/Header/Index";

const links = [
  { href: "/", label: "Home Page", className:"HeaderButton" },
  { href: "/S2", label: "S2 Page", className:"HeaderButton" },
];

export default function BangladeshStudiesPage() {
 const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  return (
    <div>
      {/* Header */}
      <Header links={links} />

      {/* Main content */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="page-header">Bangladesh Studies Page</h2>

        <Link href="/S2/Bs/BsCO.pdf" className="SubButton">
          BS Course Outline <sub>-Download</sub>
        </Link>

        <a
          href="https://en.banglapedia.org/index.php?title=Main_Page"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Banglapedia (A-Z of Bengal History) <sub>-link</sub>
        </a>

        <Link className="SubButton" href="/S2/bs/BsHistory">
          Bangladesh TimeLine
        </Link>

        {/* Toggle buttons with active class */}
        <button
          className={`SubButton ${open === "BsMid" ? "active" : ""}`}
          onClick={() => toggle("BsMid")}
        >
          Mid Syllabus
        </button>
        {open === "BsMid" && <BsMid />}

        <button
          className={`SubButton ${open === "BsFinal" ? "active" : ""}`}
          onClick={() => toggle("BsFinal")}
        >
          Final Syllabus
        </button>
        {open === "BsFinal" && <BsFinal />}

        <Link
          href="/S2/Bs/amar_dekha_rajnitir_50_bochor.pdf"
          className="SubButton"
        >
          Amar Dekha Rajnitir 50 Bochor <sub>-download</sub>
        </Link>
      </main>
    </div>
  );
}
