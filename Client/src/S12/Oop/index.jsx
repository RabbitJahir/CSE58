import React, { useState } from "react";
import OopMid from "./OopMid";
import OopFinal from "./OopFinal";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Logosrc from "../../components/Logosrc";

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
      {/*------------------------------HEADER----------------------------------------------- */}
      <header className="s12header">
        <div className="flex items-center gap-4">
          <Logosrc className="mx-auto sm:mx-0" />
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
        <h2 className="text-2xl font-bold">Object Oriented Programming Page</h2>
        <Link className="SubButton" to="JavaCodes">
          {" "}
          Java Codes{" "}
        </Link>
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
