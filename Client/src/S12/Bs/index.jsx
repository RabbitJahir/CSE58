import React, { useState } from "react";
import BsMid from "./BsMid";
import BsFinal from "./BsFinal";
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
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />

      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4 ">
        <h2 className="text-2xl font-bold">Bangladesh Studies Page</h2>
        <a href="/Bs/BsCO.pdf">
          <button className="SubButton">
            BS Course Outline <sub>-Download</sub>
          </button>
        </a>

        <a
          href="https://en.banglapedia.org/index.php?title=Main_Page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SubButton">
            Banglapedia (A-Z of Bengal History) <sub>-link</sub>
          </button>
        </a>

        <Link className="SubButton" to="/S12/Bs/BsHistory/BsTimeLine">
          Bangladehs TimeLine
        </Link>

        <button onClick={() => toggle("BsMid")}>Mid Syllabus</button>
        {open === "BsMid" && <BsMid />}

        <button onClick={() => toggle("BsFinal")}>Final Syllabus</button>
        {open === "BsFinal" && <BsFinal />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
