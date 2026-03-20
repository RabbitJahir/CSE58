type Chapter = {
  title: string;
  file: string;
};

const chapters: Chapter[] = [
  { title: "Full Book - Kenneth Rosen", file: "/S2/Discrete/Discrete_Kenneth__Rosen.pdf" },
  { title: "Chapter 1", file: "/S2/Discrete/chapter_1_24-143.pdf" },
  { title: "Chapter 2", file: "/S2/Discrete/chapter_2_144-222.pdf" },
  { title: "Chapter 3", file: "/S2/Discrete/chapter_3_224-272.pdf" },
  { title: "Chapter 4", file: "/S2/Discrete/chapter_4_274-352.pdf" },
  { title: "Chapter 5", file: "/S2/Discrete/chapter_5_354-427.pdf" },
  { title: "Chapter 6", file: "/S2/Discrete/chapter_6_428-490.pdf" },
  { title: "Chapter 7", file: "/S2/Discrete/chapter_7_492-549.pdf" },
  { title: "Chapter 8", file: "/S2/Discrete/chapter_8_550-597.pdf" },
  { title: "Chapter 9", file: "/S2/Discrete/chapter_9_599-671.pdf" },
  { title: "Chapter 10", file: "/S2/Discrete/chapter_10_696-802.pdf" },
  { title: "Chapter 11", file: "/S2/Discrete/chapter_11_804-869.pdf" },
  { title: "Chapter 12", file: "/S2/Discrete/chapter_12_870-906.pdf" },
  { title: "Chapter 13", file: "/S2/Discrete/chapter_13_908-965.pdf" },
  { title: "Propositional Logic", file: "/S2/Discrete/Propositional logic by kureghor.pdf" },
];

const DiscreteBook = () => {
  return (
    <div className="mid-container">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((chapter, idx) => (
          <a
            key={idx}
            href={chapter.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="SubButton">
              {chapter.title} <sub>-Download</sub>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DiscreteBook;