import React, { useState } from "react";
import DiscreteMid from "./DiscreteMid";
import DiscreteFinal from "./DiscreteFinal";
import DiscreteBook from "./DiscreteBook";
import Footer from "../../components/Footer";
import Logosrc from "../../components/Logosrc";
import { Link } from "react-router-dom";
import LazyVideo from "../../components/LazyVideo";

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
        <h2 className="text-2xl font-bold">Discrete Mathematics Page</h2>

        <button onClick={() => toggle("DiscreteBook")} className="SubButton">
          Discrete PDFs
        </button>
        {open === "DiscreteBook" && <DiscreteBook />}

        <button onClick={() => toggle("DiscreteMid")} className="SubButton">
          Mid Syllabus
        </button>
        {open === "DiscreteMid" && <DiscreteMid />}

        <button onClick={() => toggle("DiscreteFinal")} className="SubButton">
          Final Syllabus
        </button>
        {open === "DiscreteFinal" && <DiscreteFinal />}
        <LazyVideo src="/S12/bash.mp4" width={159} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
