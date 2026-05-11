import Header from "../../components/Header/Index";
import ToggleButton from "../../components/ToggleButton";
import { Metadata } from "next";
import OpdeMid from "./OpdeMid/page";
import OpdeFinal from "./OpdeFinal/page";

export const metadata: Metadata = {
  title: "OPDE page",
};

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

const table = `p-1 bg-gray-700 border-2 border-white`;

export default function Opde() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <OpdeMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <OpdeFinal />,
    },
  ];

  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">OPDE</h1>
        <div>
          <table className="  bg-gray-700">
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
