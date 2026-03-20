"use client";
import { useState } from "react";
import Link from "next/link";

import Header from "../../../components/Header/Index";
import Resistor from "./Resistor";
import LabEx1 from "./LabEx1/page"
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

        <button
                  className={`SubButton ${open === "LabEx1" ? "active" : ""}`}
                  onClick={() => toggle("LabEx1")}
                >
                  Experiment 1
                </button>
                {open === "LabEx1" && <LabEx1 />}
      </main>
    </div>
  );
}
