import Link from "next/link";
import Header from "../../components/Header/Index";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

const table = `p-1 bg-gray-700 border-2 border-white`;

export default function ed() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">ED</h1>

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
          href="/S2/Ed/EdIsometric.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Isometric drawings, <sub>- download, apologies for blurriness</sub>
        </Link>


      </main>
    </div>
  );
}
