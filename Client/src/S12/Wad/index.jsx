import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import WadMid from "./WadMid";
import WadFinal from "./WadFinal";
import Footer from "../../components/Footer";
import Logosrc from "../../components/Logosrc";
import Header from "../../components/Header";

const Index = () => {
  const [open, setOpen] = useState(null);
  const toggle = (section) => {
    if (open === section) {
      setOpen(null); //
    } else {
      setOpen(section);
    }
  };
  const links = [
    { to: "/", label: "Home Page", className: "HeaderButton" },
    { to: "/S12", label: "S 12 Page", className: "HeaderButton" },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header links={links}/>
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

        <Link onClick={() => toggle("WadMid")} className="SubButton">
          Mid Syllabus
        </Link>
        {open === "WadMid" && <WadMid />}

        <Link onClick={() => toggle("WadFinal")} className="SubButton">
          Final Syllabus
        </Link>
        {open === "WadFinal" && <WadFinal />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
