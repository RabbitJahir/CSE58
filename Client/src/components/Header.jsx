import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import LogoSrc from "./Logosrc";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col sm:flex-row items-center p-4 bg-black/20 backdrop-blur-sm w-full gap-2 sm:gap-4">
      {/* logo + back button */}
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2">
        <LogoSrc className="mx-auto sm:mx-0" />
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400 text-sm sm:text-base"
        >
          ← Back
        </button>
      </div>

      {/* Navbar */}
      <div className="flex-1 text-center mt-2 sm:mt-0">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;