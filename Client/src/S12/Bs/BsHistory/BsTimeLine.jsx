import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Logosrc from "../../../components/Logosrc";

const BsTimeLine = () => {
  const events = [
    { date: "320 - 550", title: "Gupta Empire" },
    {
      date: "600 - 637",
      title: "King Shashanka",
      externalLink: "https://en.banglapedia.org/index.php?title=Shashanka",
    },
    {
      date: "750 - 1150",
      title: "Pala Dynasty (Buddhism)",
      externalLink: "https://en.banglapedia.org/index.php?title=Pala_Dynasty",
    },
    { date: "736 - 1150", title: "Tomar Dynasty" },
    { date: "900 - 1050", title: "Chandra Dynasty" },
    { date: "1150 - 1204", title: "Sena Dynasty", link: "./sena" },
    { date: "1206 - 1290", title: "Mamluk Dynasty (Start of Delhi Sultanate)" },
    { date: "1290 - 1320", title: "Khilji Dynasty (Delhi Sultanate)" },
    { date: "1320 - 1414", title: "Tughlaq Dynasty (Delhi Sultanate)" },
    { date: "1352 - 1576", title: "Bengal Sultanate" },
    { date: "1414 - 1451", title: "Sayyid Dynasty (Delhi Sultanate)" },
    { date: "1451 - 1526", title: "Lodi Dynasty (End of Delhi Sultanate)" },
    { date: "1575 - 1757", title: "Mughal Empire" },
    { date: "1600", title: "Entry of British" },
    { date: "1704 - 1765", title: "Nawabs Era" },
    { date: "1757 - 1947", title: "British Rule" },
    { date: "1940", title: "Lahore Resolution" },
    { date: "1947", title: "Partition: Pakistan (Aug 14) & India (Aug 15)" },
    { date: "1947-1971", title: "Pakistan period" },
    { date: "1948 - 1952", title: "Language Movement" },
    { date: "1949", title: "Awami League Founded" },
    { date: "1966", title: "Six-point Movement" },
    { date: "1968", title: "Agartala Conspiracy Case" },
    {
      date: "June 6, 1970",
      title: "Making the First Flag",
      externalLink:
        "https://www.dhakatribune.com/epaper/286066/making-the-first-flag-of-bangladesh",
    },
    { date: "1970", title: "General Election" },
    { date: "1971", title: "Independence (March 26) & Victory (Dec 16)" },
  ];

  return (
    <div className="min-h-screen bg-blue-900 text-white font-sans overflow-x-auto">
      {/*------------------------------HEADER----------------------------------------------- */}
      <header className="s12header flex flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Logosrc />
        </div>

        <div className="flex flex-wrap gap-2">
          <Link to="/">
            <button className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition">
              Home Page
            </button>
          </Link>
          <Link to="/S12">
            <button className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition">
              S 12 Page
            </button>
          </Link>
          <Link to="/S12/Bs">
            <button className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition">
              BS Page
            </button>
          </Link>
        </div>
      </header>

      {/*------------------------------MAIN----------------------------------------------- */}
      <div className="p-6 text-center">
        <h2 className="text-2xl mb-2">Welcome to Bengal Timeline Page</h2>
      </div>

      <h1 className="text-3xl text-yellow-400 text-center mt-10">
        Historical Timeline of the Bengal Region, CE
      </h1>
      <p className="text-center mt-2 mb-10">
        Scroll horizontally to view the full history &rarr;
      </p>

      <div className="timeline-wrapper px-20 py-40 w-max flex">
        <div className="timeline-line flex border-b-4 border-yellow-400 relative w-max">
          {events.map((event, idx) => (
            <div key={idx} className="event relative w-56 mx-10">
              {event.externalLink ? (
                <a
                  href={event.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black/30 p-4 border-2 border-yellow-400 rounded text-center text-white hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  <span className="block font-bold text-yellow-400 text-lg">
                    {event.date}
                  </span>
                  {event.title} <br />
                  <b>click me</b>
                </a>
              ) : event.link ? (
                <Link
                  to={event.link}
                  className="block bg-black/30 p-4 border-2 border-yellow-400 rounded text-center text-white hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  <span className="block font-bold text-yellow-400 text-lg">
                    {event.date}
                  </span>
                  {event.title} <br />
                  <b>click me</b>
                </Link>
              ) : (
                <div className="bg-black/30 p-4 border-2 border-yellow-400 rounded text-center">
                  <span className="block font-bold text-yellow-400 text-lg">
                    {event.date}
                  </span>
                  {event.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BsTimeLine;
