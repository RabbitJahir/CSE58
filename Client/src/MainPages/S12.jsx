import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./S12.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logosrc from "../components/Logosrc";

const S12 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-black/20 backdrop-blur-sm text-white w-full gap-2 sm:gap-4">
        {/* Left: logo */}
        <div className="flex items-center gap-4">
          <Logosrc className="mx-auto sm:mx-0" />
        </div>

        {/* Right: buttons */}
        <div className="flex flex-wrap gap-2">
          <Link to="/">
            <button className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400">
              Home Page
            </button>
          </Link>
          <Link to="/S12">
            <button className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400">
              S 12 Page
            </button>
          </Link>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center gap-6 overflow-y-scroll scrollbar-hide">
        <h1 className="text-3xl font-bold text-center text-white">
          2nd Semester
        </h1>

        <ul className="links p-3 flex flex-col gap-3 text-xl text-center">
          <Link to="Calendar" className="calendar">
            <li>Calendar</li>
          </Link>

          <Link to="Wad" className="web">
            <li>
              <span>WAD</span>
            </li>
          </Link>

          <Link to="Oop" className="oop">
            <li>OOP</li>
          </Link>
          <Link to="Discrete" className="discrete">
            <li>DISCRETE</li>
          </Link>
          <Link to="Opde" className="opde">
            <li>OPDE</li>
          </Link>
          <Link to="Ed" className="ed">
            <li>ED</li>
          </Link>
          <Link to="Eee" className="electrical">
            <li>
              <span>EEE</span>
              <span class="bolt1"></span>
              <span class="bolt2"></span>
              <span class="bolt3"></span>
              <span class="bolt4"></span>
            </li>
          </Link>
          <Link to="Bs" className="bd">
            <li>BS</li>
          </Link>
        </ul>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default S12;
