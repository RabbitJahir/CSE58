import TogglePdf from "../../../components/TogglePdf";

export default function Page() {
  const chapters = [
    {
      id: "ch1",
      title: "Ch 1",
      files: [
        { label: "Book", href: "/S2/Eee/EeeCh1Book.pdf" },
        { label: "Notes", href: "/S2/Eee/EeeCh1Notes.pdf" },
        { label: "Answers", href: "/S2/Eee/EeeCh1Answers.pdf" },
      ],
    },
    {
      id: "ch2",
      title: "Ch 2",
      files: [
        { label: "Book", href: "/S2/Eee/EeeCh2Book.pdf" },
        { label: "Notes", href: "/S2/Eee/EeeCh2Notes.pdf" },
        { label: "Y-Del", href: "/S2/Eee/y-del.pdf" },
        { label: "Questions", href: "/S2/Eee/EeeCh2Ques.pdf" },
      ],
    },
  ];

  return <TogglePdf chapters={chapters} />;
}