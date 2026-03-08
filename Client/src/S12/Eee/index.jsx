import React, { useState } from "react";
import EeeMid from "./EeeMid/EeeMid";
import EeeFinal from "./EeeFinal";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
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
      {/*------------------------------MAIN----------------------------------------------- */}
      <header className="s12header">
        <div className="flex items-center gap-4">
          <Logosrc/>
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

        <button className="SubButton" onClick={() => toggle("EeeMid")}>
          Mid Syllabus
        </button>
        {open === "EeeMid" && <EeeMid />}

        <button onClick={() => toggle("EeeFinal")} className="SubButton">
          Final Syllabus
        </button>
        {open === "EeeFinal" && <EeeFinal />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
