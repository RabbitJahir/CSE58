import { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header/Index";

export const metadata: Metadata = {
  title: "Wad page",
};

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

const table = `p-1 bg-gray-700 border-2 border-white`;

export default function wad() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">WAD</h1>

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

        <Link
          href="/S2/Wad/WadCO.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          WAD Course Outline <sub>-Download</sub>
        </Link>

        <Link
          href="/S2/Wad/wad-lab-manual.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          WAD Lab Manual <sub>-Download</sub>
        </Link>

        <Link href="/S2/wad/WadCode" className="SubButton">
          Html Codes
        </Link>

        <Link
          href="/S2/Wad/js.zip"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          javascript beginning<sub> - Download zip</sub>
        </Link>

        <Link
          href="https://github.com/RabbitJahir/Languages/tree/master/js"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github link to js
        </Link>
        
        <Link
          href="/S2/Wad/js_jon-duckett.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          javascript book by Jon DUckett<sub> - Download</sub>
        </Link>
      </main>
    </div>
  );
}
