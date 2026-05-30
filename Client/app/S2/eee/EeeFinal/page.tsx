import TogglePdf from "../../../components/TogglePdf";

export default function Page() {
  const chapters = [
    {
      id: "ch3",
      title: "Ch 3",
      files: [
        { label: "Ch 3 Book", href: "/S2/Eee/EeeCh3Book.pdf" },
        { label: "Ch 3 Ques", href: "/S2/Eee/EeeCh3Ques.pdf" },
        { label: "Ch 3 Mesh by Thomas", href: "/S2/Eee/EeeCh3Nodal.pdf" },
        { label: "Ch 3 Mesh by Thomas", href: "/S2/Eee/EeeCh3Mesh.pdf" },
      ],
    },
    {
      id: "ch4",
      title: "Ch 4",
      files: [
        { label: "Ch 4 Book", href: "/S2/Eee/EeeCh4Book.pdf" },
        { label: "Ch 4 Ques", href: "/S2/Eee/EeeCh4Ques.pdf" },
        {label: "Superposition", href: "/S2/Eee/ch4-superposition.pdf"},
        {label: "Source Transfer", href: "/S2/Eee/ch4-sourcetransform.pdf"},
        {label: "Thevenin's theorem", href: "/S2/Eee/ch4-thevenins.pdf"},
        {label: "Norton", href: "/S2/Eee/ch4-norton.pdf"},
        {label: "Maximum Power ", href: "/S2/Eee/ch4-maxPower.pdf"},
      ],
    },
    {
      id: "ch9",
      title: "Ch 9",
      files: [
        { label: "Ch 9 Book", href: "/S2/Eee/EeeCh9Book.pdf" },
        { label: "Ch 9 Ques", href: "/S2/Eee/EeeCh9Ques.pdf" },
      ],
    },
  ];

  return <TogglePdf chapters={chapters} />;
}
