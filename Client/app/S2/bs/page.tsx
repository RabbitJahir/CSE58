import Link from "next/link";
import Header from "../../components/Header/Index";
import ToggleButton from "../../components/ToggleButton";

import BsMid from "./BsMid/page";
import BsFinal from "./BsFinal/page";

const links = [
  { href: "/", label: "Home Page", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

const table = `p-1 bg-gray-700 border-2 border-white`;

export default function BangladeshStudiesPage() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <BsMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <BsFinal />,
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header links={links} />

      {/* Main content */}
      <main className="flex-grow p-4 text-white flex flex-col items-center gap-4">
        <h2 className="page-header">Bangladesh Studies Page</h2>

        <div>
          <table className="table-auto  bg-gray-700">
            <tr>
              <th colSpan={2} className="p-3">
                Mark Distribution
              </th>
            </tr>
            <tr>
              <td className={table}>Attendance</td>
              <td className={table}>10</td>
            </tr>
            <tr>
              <td className={table}>Class Test</td>
              <td className={table}>10</td>
            </tr>
            <tr>
              <td className={table}>Assignment & performance</td>
              <td className={table}>10</td>
            </tr>
            <tr>
              <td className={table}>Mid</td>
              <td className={table}>20</td>
            </tr>
            <tr>
              <td className={table}>Final</td>
              <td className={table}>50</td>
            </tr>
          </table>
        </div>

        {/* Static links */}
        <Link href="/S2/Bs/BsCO.pdf" className="SubButton">
          BS Course Outline <sub>-Download</sub>
        </Link>

        <a
          href="https://en.banglapedia.org/index.php?title=Main_Page"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Banglapedia (A-Z of Bengal History) <sub>-link</sub>
        </a>

        <Link className="SubButton" href="/S2/bs/BsHistory">
          Bangladesh TimeLine
        </Link>

        {/* Reusable toggle */}
        <ToggleButton sections={sections} />

        {/* Extra file */}
        <Link
          href="/S2/Bs/amar_dekha_rajnitir_50_bochor.pdf"
          className="SubButton text-red-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amar Dekha Rajnitir 50 Bochor <sub>-download</sub>
        </Link>
      </main>
    </div>
  );
}
