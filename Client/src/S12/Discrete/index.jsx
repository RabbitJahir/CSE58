import React, { useState } from "react";
import DiscreteMid from "./DiscreteMid";
import DiscreteFinal from "./DiscreteFinal";
import DiscreteBook from "./DiscreteBook";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
