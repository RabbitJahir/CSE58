import Link from "next/link";
import Header from "../../../components/Header/Index";
import ToggleButton from "../../../components/ToggleButton";


const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/Oop", label: "Oop Page", className: "HeaderButton" },

];

const table = `p-1 bg-gray-700 border-2 border-white`;

export default function OopLab() {


  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">OOP Lab</h1>

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
        <Link className="SubButton" href="/S2/oop/OopLab/JavaCode">
          Java Codes
        </Link>

        <Link
          href="https://drive.google.com/drive/folders/1Rup6liK_sjp6DnQODJHbkU6Bh0vF2QCP"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Java Codes<sub> - Kamrul Islam</sub>
        </Link>

      </main>
    </div>
  );
}
