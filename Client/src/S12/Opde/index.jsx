import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import OpdeMid from "./OpdeMid";
import OpdeFinal from "./OpdeFinal";
import Footer from "../../components/Footer";
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
        <h2 className="text-2xl font-bold">
          Ordinary and Partial Differential Equation Page
        </h2>

        <Link className="SubButton" onClick={() => toggle("OpdeMid")}>Mid Syllabus</Link>

        {open === "OpdeMid" && <OpdeMid />}

        <Link className="SubButton" onClick={() => toggle("OpdeFinal")}>Final Syllabus</Link>

        {open === "OpdeFinal" && <OpdeFinal />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
