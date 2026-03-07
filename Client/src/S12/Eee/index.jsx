import React, { useState } from "react";
import EeeMid from "./EeeMid/EeeMid";
import EeeFinal from "./EeeFinal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

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
      <Header />
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">
          Fundamentals of Electrical Engineering Page
        </h2>
        <a href="/Eee/EeeMainBook.pdf">
          <button className="SubButton">
            Main Book <sub>-Download</sub>
          </button>
        </a>
        
        <Link to="EeeLab" className="SubButton">
          Eee Lab Page
        </Link>

        <button className="SubButton" onClick={() => toggle("EeeMid")} >
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
