import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import WadMid from "./WadMid";
import WadFinal from "./WadFinal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
      <Header />
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Web Application & Design Page</h2>

        <a href="/Wad/WadCO.pdf" class="btn">
          <button className="SubButton">
            Course Outline<sub> -Download</sub>
          </button>
        </a>

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
