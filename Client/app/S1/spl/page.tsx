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
        <h1 className="page-header">Structured Programming Language</h1>
        <Link
          href="/S1/spl/co.pdf"
          className="SubButton"
          rel="noopener noreferrer"
          target="_blank"
        >
          Course Outline
        </Link>
        <Link
          href="/S1/spl/suggestion.jpeg"
          className="SubButton"
          rel="noopener noreferrer"
          target="_blank"
        >
          Suggestion given in section A
        </Link>
        <Link
          href="/S1/spl/suggestion_B_section.pdf"
          className="SubButton"
          rel="noopener noreferrer"
          target="_blank"
        >
          Suggestion given in section B <sub> samiul 50</sub>
        </Link>
        <Link href="/S1/spl/maam_er_programs.pdf" className="SubButton" rel="noopener noreferrer" target="_blank">Programs given by Alin maam<sub>kanij 41</sub></Link>
      </main>
    </div>
  );
}
