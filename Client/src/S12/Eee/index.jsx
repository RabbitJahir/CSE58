import React, { useState } from "react";
import EeeMid from "./EeeMid/EeeMid";
import EeeFinal from "./EeeFinal";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Logosrc from "../../components/Logosrc";
import Header from "../../components/Header";
import BodyThemeToggle from "../../components/BodyThemeToggle";

const Index = () => {
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header links={links} />
      <BodyThemeToggle/>
      {/*------------------------------MAIN----------------------------------------------- */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">
          Fundamentals of Electrical Engineering Page
        </h2>
        <a href="/S12/Eee/EeeMainBook.pdf">
          <button className="SubButton">
            Main Book <sub>-Download</sub>
          </button>
        </a>

        <Link to="EeeLab" className="SubButton">
          Eee Lab Page
        </Link>

        <Link className="SubButton" onClick={() => toggle("EeeMid")}>
          Mid Syllabus
        </Link>
        {open === "EeeMid" && <EeeMid />}

        <Link onClick={() => toggle("EeeFinal")} className="SubButton">
          Final Syllabus
        </Link>
        {open === "EeeFinal" && <EeeFinal />}
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
