import Link from "next/link";
import Header from "../../../components/Header/Index";
const links = [
  { href: "/", label: "Home Page", className:"HeaderButton" },
  { href: "/S2", label: "S2 Page", className:"HeaderButton" },
  { href: "/S2/bs", label: "BS Page", className:"HeaderButton" },
];

const BsHistory = () => {
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
    { date: "1150 - 1204", title: "Sena Dynasty", link: "/S2/Bs/sena" },
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
    <div >
      <Header links={links} />

      <div className="p-6 text-center">
        <h1 className="page-header">Welcome to Bengal Timeline Page</h1>
      </div>

      <h1 className="text-3xl text-yellow-400 text-center mt-10">
        Historical Timeline of the Bengal Region, CE
      </h1>
      <p className="text-center mt-2 mb-10">
        Scroll horizontally to view the full history →
      </p>

      <div className="timeline-wrapper px-20 py-40 w-max flex">
        <div className="timeline-line flex border-b-4 border-yellow-400 relative w-max">
          {events.map((event, idx) => (
            <div key={idx} className="event relative w-56 mx-10">
              {/* External link */}
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
                /* Internal link */
                <Link
                  href={event.link}
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
    </div>
  );
};

export default BsHistory;
