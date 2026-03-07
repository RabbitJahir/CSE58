import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import OpdeMid from "./OpdeMid";
import OpdeFinal from "./OpdeFinal";
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
