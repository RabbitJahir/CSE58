import Header from "../../../components/Header/Index";
import ToggleButton from "../../../components/ToggleButton";
import Link from "next/link";
import { Metadata } from "next";

import Resistor from "./Resistor";
import LabEx1 from "./LabEx1/page";
import LabEx2 from "./LabEx2/page";
import LabEx3 from "./LabEx3/page";
import LabEx4 from "./LabEx4/page";
import LabEx5 from "./LabEx5/page";
import LabEx6 from "./LabEx6/page";

export const metadata: Metadata = {
  title: "EEE Lab page",
};

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/eee", label: "Eee Page", className: "HeaderButton" },
];

export default function Page() {
  const sections = [
    { id: "lab1", title: "Experiment 1", content: <LabEx1 /> },
    { id: "lab2", title: "Experiment 2", content: <LabEx2 /> },
    { id: "lab3", title: "Experiment 3", content: <LabEx3 /> },
    { id: "lab4", title: "Experiment 4", content: <LabEx4 /> },
    { id: "lab5", title: "Experiment 5", content: <LabEx5 /> },
    { id: "lab6", title: "Experiment 6", content: <LabEx6 /> },
  ];

  const table = `p-1 bg-gray-700 border-2 border-white`;

  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">EEE Lab</h1>

        <div>
          <table className="  bg-gray-700">
            <tr>
              <th colSpan={2} className="p-3">
                Mark Distribution
              </th>
            </tr>
            <tr>
              <td className={table}>Attendance</td>
              <td className={table}>10</td>
            </tr>
            <tr>
              <td className={table}>Class performance</td>
              <td className={table}>10</td>
            </tr>
            <tr>
              <td className={table}>Quiz</td>
              <td className={table}>20</td>
            </tr>
            <tr>
              <td className={table}>Report</td>
              <td className={table}>10</td>
            </tr>
            <tr>
              <td className={table}>Lab Test</td>
              <td className={table}>30</td>
            </tr>
            <tr>
              <td className={table}>Viva</td>
              <td className={table}>20</td>
            </tr>
          </table>
        </div>

        {/* Static Links */}
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

        {/* Custom Components */}
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

        {/* Reusable Toggle */}
        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
