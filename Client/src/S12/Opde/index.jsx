import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import OpdeMid from "./OpdeMid";
import OpdeFinal from "./OpdeFinal";
import Footer from "../../components/Footer";
import Logosrc from "../../components/Logosrc";

const Index = () => {
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
        {/*------------------------------HEADER----------------------------------------------- */}
      <header className="s12header">
       
        <div className="flex items-center gap-4">
          <Logosrc  />
        </div>


        <div className="flex flex-wrap gap-2">
          <Link to="/">
            <button >
              Home Page
            </button>
          </Link>
          <Link to="/S12">
            <button>
              S 12 Page
            </button>
          </Link>
        </div>
      </header>
      {/*------------------------------MAIN----------------------------------------------- */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">
          Ordinary and Partial Differential Equation Page
        </h2>

        <button onClick={() => toggle("OpdeMid")}>Mid Syllabus</button>

        {open === "OpdeMid" && <OpdeMid />}

        <button onClick={() => toggle("OpdeFinal")}>Final Syllabus</button>

        {open === "OpdeFinal" && <OpdeFinal />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
