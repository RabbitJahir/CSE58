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

        <Link href="/S2/eee/EeeLab" className="SubButton">
          EEE Lab Page
        </Link>
        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
