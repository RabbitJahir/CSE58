import React, { useState } from "react";
import OopMid from "./OopMid";
import OopFinal from "./OopFinal";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import BodyThemeToggle from "../../components/BodyThemeToggle";

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
      <Header links={links} />
      <BodyThemeToggle/>
      {/*------------------------------MAIN----------------------------------------------- */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Object Oriented Programming Page</h2>
        <Link className="SubButton" to="JavaCodes">
          Java Codes
        </Link>
        <Link className="SubButton" onClick={() => toggle("OopMid")}>
          Oop Mid
        </Link>
        {open === "OopMid" && <OopMid />}
        <Link className="SubButton" onClick={() => toggle("OopFinal")}>
          Oop Final
        </Link>
        {open === "OopFinal" && <OopFinal />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
