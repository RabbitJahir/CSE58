import Link from "next/link";
import Header from "../../components/Header/Index";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S1", label: "S1 Page", className: "HeaderButton" },
];

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">Physics</h1>
        <Link
          href="/S1/phy/co.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Course Outline
        </Link>
        <Link
          href="/S1/phy/phy_gases.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kinetic Theory of gases <sub>Thanks to fahmida<sub> download </sub></sub>
        </Link>

         <Link
          href="/S1/phy/phy_optics.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Optics <sub>Thanks to fahmida<sub> download </sub></sub>
        </Link>

         <Link
          href="/S1/phy/phy_thermo.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thermodynamics <sub>Thanks to fahmida<sub> download </sub></sub>
        </Link>
      </main>
    </div>
  );
}
