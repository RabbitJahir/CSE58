import { Metadata } from "next";
import ToggleButton from "../../components/ToggleButton";

import Header from "../../components/Header/Index";
import EeeMid from "./EeeMid/page";
import EeeFinal from "./EeeFinal/page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EEE page",
};

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

const table = `p-1 bg-gray-700 border-2 border-white`;

export default function eee() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <EeeMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <EeeFinal />,
    },
  ];

  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">EEE</h1>
        
        <div>
          <table className=" bg-gray-700">
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

        <Link href="/S2/eee/EeeLab" className="SubButton">
          EEE Lab Page
        </Link>
        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
