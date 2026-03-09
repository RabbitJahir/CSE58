import React, { useState } from "react";
import Footer from "../../../components/Footer";
import EeeLabResistor from "./EeeLabResistor";
import EeeLabEx1 from "./EeeLabEx1";
import EeeLabEx2 from "./EeeLabEx2";
import EeeLabEx3 from "./EeeLabEx3";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";

const EeeLab = () => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    if (open === section) {
      setOpen(null);
    } else {
      setOpen(section);
    }
  };
  const links = [
    { to: "/", label: "Home Page", className: "HeaderButton" },
    { to: "/S12", label: "S 12 Page", className: "HeaderButton" },
    { to: "/S12/Eee", label: "EEE Page", className: "HeaderButton" },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header links={links} />
      {/*------------------------------MAIN----------------------------------------------- */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Eee Lab Page</h2>
        <a href="/S12/Eee/EeeLab/EeeLabCO.pdf" className="SubButton">
          EEE Lab Course Outline <sub>-Download</sub>
        </a>
        <Link
          to="https://www.tinkercad.com/dashboard"
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

        <Link className="SubButton" onClick={() => toggle("EeeLabResistor")}>
          Resistor Colors
        </Link>
        {open === "EeeLabResistor" && <EeeLabResistor />}

        <Link className="SubButton" onClick={() => toggle("EeeLabEx1")}>
          Experiment 1
        </Link>
        {open === "EeeLabEx1" && <EeeLabEx1 />}

        <Link className="SubButton" onClick={() => toggle("EeeLabEx2")}>
          Experiment 2
        </Link>
        {open === "EeeLabEx2" && <EeeLabEx2 />}

        <Link className="SubButton" onClick={() => toggle("EeeLabEx3")}>
          Experiment 3
        </Link>
        {open === "EeeLabEx3" && <EeeLabEx3 />}
      </main>
      <Footer />
    </div>
  );
};

export default EeeLab;
