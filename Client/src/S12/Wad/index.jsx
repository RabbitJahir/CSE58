import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import WadMid from "./WadMid";
import WadFinal from "./WadFinal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Logosrc from "../../components/Logosrc";

const Index = () => {
  const [open, setOpen] = useState(null);
  const toggle = (section) => {
    if (open === section) {
      setOpen(null); //
    } else {
      setOpen(section);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-black/20 backdrop-blur-sm text-white w-full gap-2 sm:gap-4">
        {/* Left: logo */}
        <div className="flex items-center gap-4">
          <Logosrc className="mx-auto sm:mx-0" />
        </div>

        {/* Right: buttons */}
        <div className="flex flex-wrap gap-2">
          <Link to="/">
            <button className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400">
              Home Page
            </button>
          </Link>
          <Link to="/S12">
            <button className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400">
              S 12 Page
            </button>
          </Link>
        </div>
      </header>
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Web Application & Design Page</h2>

        <a href="/Wad/WadCO.pdf" class="btn">
          <button className="SubButton">
            Course Outline<sub> -Download</sub>
          </button>
        </a>

        <Link className="SubButton" to="HtmlCodes"> Html Codes </Link>

        <button onClick={() => toggle("WadMid")} className="SubButton">
          Mid Syllabus
        </button>
        {open === "WadMid" && <WadMid />}

        <button onClick={() => toggle("WadFinal")} className="SubButton">
          Final Syllabus
        </button>
        {open === "WadFinal" && <WadFinal />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
