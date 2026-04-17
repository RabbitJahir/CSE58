import Link from "next/link";
import Header from "../../components/Header/Index";
import ToggleButton from "../../components/ToggleButton";

import OopMid from "./OopMid/page";
import OopFinal from "./OopFinal/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

export default function Oop() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <OopMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <OopFinal />,
    },
  ];

  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">OOP</h1>

        {/* Static links */}
        <Link className="SubButton" href="/S2/oop/JavaCode">
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

        {/* Reusable toggle */}
        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}