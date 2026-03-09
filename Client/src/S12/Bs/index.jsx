import React, { useState } from "react";
import BsMid from "./BsMid";
import BsFinal from "./BsFinal";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

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
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header links={links} />
      {/*------------------------------MAIN----------------------------------------------- */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4 ">
        <h2 className="text-2xl font-bold">Bangladesh Studies Page</h2>
        <a href="/S12/Bs/BsCO.pdf" className="SubButton">
          BS Course Outline <sub>-Download</sub>
        </a>

        <Link
          to="https://en.banglapedia.org/index.php?title=Main_Page"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Banglapedia (A-Z of Bengal History) <sub>-link</sub>
        </Link>

        <Link className="SubButton" to="/S12/Bs/BsHistory/BsTimeLine">
          Bangladesh TimeLine
        </Link>

        <Link className="SubButton" onClick={() => toggle("BsMid")}>
          Mid Syllabus
        </Link>
        {open === "BsMid" && <BsMid />}

        <Link className="SubButton" onClick={() => toggle("BsFinal")}>
          Final Syllabus
        </Link>
        {open === "BsFinal" && <BsFinal />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
