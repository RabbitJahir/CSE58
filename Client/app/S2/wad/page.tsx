import Link from "next/link";
import Header from "../../components/Header/Index";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

export default function wad() {
  return (
    <div >
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">WAD</h1>

        <Link
          href="/S2/Wad/WadCO.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          WAD Course Outline <sub>-Download</sub>
        </Link>

        <Link href="/S2/wad/WadCode" className="SubButton">
          Html Codes
        </Link>
      </main>
    </div>
  );
}
