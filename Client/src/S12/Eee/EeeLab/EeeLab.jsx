import React, { useState } from "react";
import Footer from "../../../components/Footer";
import EeeLabResistor from "./EeeLabResistor";
import EeeLabEx1 from "./EeeLabEx1";
import EeeLabEx2 from "./EeeLabEx2";
import EeeLabEx3 from "./EeeLabEx3";
import Logosrc from "../../../components/Logosrc";
import { Link } from "react-router-dom";

const EeeLab = () => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    if (open === section) {
      setOpen(null);
    } else {
      setOpen(section);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/*------------------------------MAIN----------------------------------------------- */}
      <header className="s12header">
        <div className="flex items-center gap-4">
          <Logosrc />
        </div>

        <div className="flex flex-wrap gap-2">
          <Link to="/">
            <button>Home Page</button>
          </Link>
          <Link to="/S12">
            <button>S 12 Page</button>
          </Link>
          <Link to="/S12/Eee">
            <button>EEE Page</button>
          </Link>
        </div>
      </header>
      {/*------------------------------MAIN----------------------------------------------- */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Eee Lab Page</h2>
        <a href="/S12/Eee/EeeLab/EeeLabCO.pdf">
          <button className="SubButton">
            EEE Lab Course Outline <sub>-Download</sub>
          </button>
        </a>
        <a
          href="https://www.tinkercad.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SubButton">
            Tinkercard <br />
            Tinkercad is an online tool for creating and simulating electronic
            circuits and 3D designs.
            <br />
            Go to designs and create!
          </button>
        </a>

        <button onClick={() => toggle("EeeLabResistor")}>
          Resistor Colors
        </button>
        {open === "EeeLabResistor" && <EeeLabResistor />}

        <button onClick={() => toggle("EeeLabEx1")}>Experiment 1</button>
        {open === "EeeLabEx1" && <EeeLabEx1 />}

        <button onClick={() => toggle("EeeLabEx2")}>Experiment 2</button>
        {open === "EeeLabEx2" && <EeeLabEx2 />}

        <button onClick={() => toggle("EeeLabEx3")}>Experiment 3</button>
        {open === "EeeLabEx3" && <EeeLabEx3 />}
      </main>
      <Footer />
    </div>
  );
};

export default EeeLab;
