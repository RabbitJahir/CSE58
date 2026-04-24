import Header from "../../components/Header/Index";
import ToggleButton from "../../components/ToggleButton";

import DiscreteMid from "./DiscreteMid/page";
import DiscreteFinal from "./DiscreteFinal/page";
import DiscreteBook from "./DiscreteBook/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

const table = `p-1 bg-gray-700 border-2 border-white`;

export default function Discrete() {
  const sections = [
    {
      id: "book",
      title: "Book & Chapters",
      content: <DiscreteBook />,
    },
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <DiscreteMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <DiscreteFinal />,
    },
  ];

  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">Discrete</h1>

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

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
