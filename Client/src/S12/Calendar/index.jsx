import React from "react";
import Logosrc from "../../components/Logosrc";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BodyThemeToggle from "../../components/BodyThemeToggle";
const links = [
  { to: "/", label: "Home Page", className: "HeaderButton" },
  { to: "/S12", label: "S 12 Page", className: "HeaderButton" },
];
const index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header links={links} />
      <BodyThemeToggle />
      {/*------------------------------MAIN----------------------------------------------- */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <picture>
          <source srcSet="/S12/Calendar/calendar.avif" type="image/avif" />
          <source srcSet="/S12/Calendar/calendar.webp" type="image/webp" />
          <img
            src="/S12/Calendar/calendar.jpeg"
            alt="uni_calendar"
            loading="lazy"
            width="800"
            height="600"
          />
        </picture>

        <a className="SubButton" href="/S12/Calendar/calendar.jpeg" download>
          2A Calendar<sub> -Download</sub>
        </a>

        <picture>
          <source srcSet="/S12/Calendar/ramadan.avif" type="image/avif" />
          <source srcSet="/S12/Calendar/ramadan.webp" type="image/webp" />
          <img
            src="/S12/Calendar/ramadan.jpeg"
            alt="ramadan_calendar"
            loading="lazy"
            width="800"
            height="600"
          />
        </picture>

        <a className="SubButton" href="/S12/Calendar/ramadan.jpeg" download>
          2026 Ramadan Calendar<sub> -Download</sub>
        </a>  
      </main>
      <Footer />
    </div>
  );
};

export default index;
