import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./S12.css";
import Footer from "../components/Footer";
import Logosrc from "../components/Logosrc";
import SubjectButton from "../components/Buttons";
import Header from "../components/Header";

const links = [
  { to: "/", label: "Home Page", className: "HeaderButton" },
  { to: "/S12", label: "S 12 Page", className: "HeaderButton" },
];

const S12 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header links={links}/>
      {/*--------------------------------------MAIN----------------------------------------------------*/}
      <main className="flex-grow flex flex-col items-center gap-6 overflow-y-scroll scrollbar-hide">
        <h1 className="text-3xl font-bold text-center text-white">
          2nd Semester
        </h1>

        <div className="links p-3 flex flex-col gap-3 text-xl text-center">
          <Link to="Calendar" className="calendar">
            Calendar
          </Link >
          <Link to="Wad" className="web">
            WAD
          </Link>
          <Link to="Oop" className="oop">
            OOP
          </Link>
          <Link to="Discrete" className="discrete">
            DISCRETE
          </Link>
          <Link to="Opde" className="opde">
            OPDE
          </Link>
          <Link to="Ed" className="ed">
            ED
          </Link>
          <Link to="Eee" className="electrical">
            <span>EEE</span>
            <span className="bolt1"></span>
            <span className="bolt2"></span>
            <span className="bolt3"></span>
            <span className="bolt4"></span>
          </Link>
          <Link to="Bs" className="bd">
            BS
          </Link>
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default S12;
