"use client";
import { useState } from "react";
import Link from "next/link";

import Header from "../../../components/Header/Index";
import Resistor from "./Resistor";
import LabEx1 from "./LabEx1/page";
import LabEx2 from "./LabEx2/page";
import LabEx3 from "./LabEx3/page";
import LabEx5 from "./LabEx5/page";


const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/eee", label: "Eee Page", className: "HeaderButton" },
];

export default function Page() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <Link
          href="/S2/Eee/EeeLab/EeeLabCO.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          EEE Lab Course Outline <sub>-Download</sub>
        </Link>
        <Link
          href="https://www.tinkercad.com/dashboard"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tinkercard <br />
          Tinkercad is an online tool for creating and simulating electronic
          circuits and 3D designs.
          <br />
          Go to designs and create!
        </Link>

        <Resistor />

        <div className="flex justify-center">
          <p className="bg-blue-400 px-6 py-3 rounded-xl text-lg tracking-wide">
            <span className="italic">Error</span> (%) =
            <span className="font-mono">
              {" "}
              (|Measured − True| / True) × 100{" "}
            </span>
          </p>
        </div>

        <button
          className={`SubButton ${open === "LabEx1" ? "active" : ""}`}
          onClick={() => toggle("LabEx1")}
        >
          Experiment 1
        </button>
        {open === "LabEx1" && <LabEx1 />}

        <button
          className={`SubButton ${open === "LabEx2" ? "active" : ""}`}
          onClick={() => toggle("LabEx2")}
        >
          Experiment 2
        </button>
        {open === "LabEx2" && <LabEx2 />}

        <button
          className={`SubButton ${open === "LabEx3" ? "active" : ""}`}
          onClick={() => toggle("LabEx3")}
        >
          Experiment 3
        </button>
        {open === "LabEx3" && <LabEx3 />}

        <button
          className={`SubButton ${open === "LabEx5" ? "active" : ""}`}
          onClick={() => toggle("LabEx5")}
        >
          Experiment 5
        </button>
        {open === "LabEx5" && <LabEx5 />}


      </main>
    </div>
  );
}
