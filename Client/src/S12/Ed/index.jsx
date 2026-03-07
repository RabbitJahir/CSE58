import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import EdMid from "./EdMid";
import EdFinal from "./EdFinal";
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
        <h2 className="text-2xl font-bold">Engineering Drawing Page</h2>

        <button onClick={() => toggle("EdMid")}>Mid Syllabus</button>
        {open === "EdMid" && <EdMid />}

        <button onClick={() => toggle("EdFinal")}>Final Syllabus</button>
        {open === "EdFinal" && <EdFinal />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
