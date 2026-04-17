import Header from "../../components/Header/Index";
import ToggleButton from "../../components/ToggleButton";

import DiscreteMid from "./DiscreteMid/page";
import DiscreteFinal from "./DiscreteFinal/page";
import DiscreteBook from "./DiscreteBook/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
];

export default function Discrete() {
  const sections = [
    {
      id: "book",
      title: "Book & Chapters",
      content: <DiscreteBook />,
    },
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <DiscreteMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <DiscreteFinal />,
    },
  ];

  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">Discrete</h1>

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}