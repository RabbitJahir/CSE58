import React from "react";
import { Link } from "react-router-dom";
import Logosrc from "./Logosrc";
import "./Header.css";

function Header({ links = [] }) {
  return (
    <header className="s12header">
      {/* Left: logo */}
      <div className="flex items-center">
        <Logosrc />
      </div>

      {/* Right: buttons */}
      <div className="flex flex-wrap gap-2">
        {links.map(({ to, label, className }, index) => (
          <Link key={index} to={to} className={className}>
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;