import React, { useState } from "react";
import DiscreteMid from "./DiscreteMid";
import DiscreteFinal from "./DiscreteFinal";
import DiscreteBook from "./DiscreteBook";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import LazyVideo from "../../components/LazyVideo";
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
      <Header links={links}/>
      <BodyThemeToggle/>
      {/*------------------------------MAIN----------------------------------------------- */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Discrete Mathematics Page</h2>

        <Link onClick={() => toggle("DiscreteBook")} className="SubButton">
          Discrete PDFs
        </Link>
        {open === "DiscreteBook" && <DiscreteBook />}

        <Link onClick={() => toggle("DiscreteMid")} className="SubButton">
          Mid Syllabus
        </Link>
        {open === "DiscreteMid" && <DiscreteMid />}

        <Link onClick={() => toggle("DiscreteFinal")} className="SubButton">
          Final Syllabus
        </Link>
        {open === "DiscreteFinal" && <DiscreteFinal />}

        <LazyVideo src="/S12/Discrete/bash.mp4" width={159} />

      </main>
      <Footer />
    </div>
  );
};

export default Index;
