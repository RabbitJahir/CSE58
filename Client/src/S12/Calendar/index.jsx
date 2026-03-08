import React from "react";
import Logosrc from "../../components/Logosrc";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/*------------------------------HEADER----------------------------------------------- */}
      <header className="s12header">
        <div className="flex items-center gap-4">
          <Logosrc />
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
        <img
          src="/S12/Calendar/calendar.jpeg"
          alt="uni_calendar"
          loading="lazy"
          width="800"
          height="600"
        ></img>
        <a className="SubButton" href="/S12/Calendar/calendar.jpeg">
          2A Calendar<sub> -Download</sub>
        </a>

        <img
          src="/S12/Calendar/ramadan.jpeg"
          alt="ramadan_calendar"
          loading="lazy"
          width="800"
          height="600"
        ></img>
        <a className="SubButton" href="/S12/Calendar/ramadan.jpeg">
          2A Calendar<sub> -Download</sub>
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default index;
