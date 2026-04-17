import TogglePdf from "../../../components/TogglePdf";

export default function Page() {
  const chapters = [
    {
      id: "ch3",
      title: "Ch 3",
      files: [
        { label: "Ch 3 Book", href: "/S2/Eee/EeeCh3Book.pdf" },
        { label: "Ch 3 Ques", href: "/S2/Eee/EeeCh3Ques.pdf" },
      ],
    },
    {
      id: "ch4",
      title: "Ch 4",
      files: [
        { label: "Ch 4 Book", href: "/S2/Eee/EeeCh4Book.pdf" },
        { label: "Ch 4 Ques", href: "/S2/Eee/EeeCh4Ques.pdf" },
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