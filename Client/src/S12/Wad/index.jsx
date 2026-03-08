import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import WadMid from "./WadMid";
import WadFinal from "./WadFinal";
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
      {/*------------------------------HEADER----------------------------------------------- */}
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
        </div>
      </header>
      {/*------------------------------MAIN----------------------------------------------- */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Web Application & Design Page</h2>

        <a href="/S12/Wad/WadCO.pdf" class="btn">
          <button className="SubButton">
            Course Outline<sub> -Download</sub>
          </button>
        </a>

        <Link className="SubButton" to="HtmlCodes">
          {" "}
          Html Codes{" "}
        </Link>

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
