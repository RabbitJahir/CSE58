import React, { useState } from "react";
import OopMid from "./OopMid";
import OopFinal from "./OopFinal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

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
      <Header />
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Object Oriented Programming Page</h2>

        <Link className="SubButton" to="JavaCodes"> Java Codes </Link>
        
         <button onClick={() => toggle("OopMid")}>Oop Mid</button>
        {open === "OopMid" && <OopMid />}{" "}

        <button onClick={() => toggle("OopFinal")}>Oop Final</button>
        {open === "OopFinal" && <OopFinal />}{" "}

      </main>
      <Footer />{" "}
    </div>
  );
};

export default Index;
