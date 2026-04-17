import Header from "../../components/Header/Index";
import ToggleButton from "../../components/ToggleButton";

import OpdeMid from "./OpdeMid/page";
import OpdeFinal from "./OpdeFinal/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

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

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}