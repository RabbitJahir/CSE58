import Header from "../../../components/Header/Index";

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S1`, label: `S1 Page`, className: `HeaderButton` },
  { href: `/S1/eng`, label: `English Page`, className: `HeaderButton` },
];
export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">Essay Writing Structure</h1>

         <div className="flex flex-col gap-10">


      <p className="font-bold">
        When writing an essay, it's essential to organize your thoughts clearly
        and present your ideas in a structured format. The following guidelines
        outline the key components of an effective essay.
      </p>

      <ol className="flex flex-col gap-4">
        <li>
          <strong>Introduction:</strong> Introduce the topic and state your
          thesis clearly.
        </li>
        <li>
          <strong>Body Paragraphs (≥3):</strong> Each paragraph should focus on
          one supporting detail (SD1, SD2, SD3) that supports your thesis.
        </li>
        <li>
          <strong>Conclusion:</strong> Summarize your main points and restate
          your thesis in a compelling way.
        </li>
        <li>
          <strong>Call to Action:</strong> Encourage the reader to take specific
          action or consider a particular viewpoint.
        </li>
        <li>
          <strong>Use of Quotations:</strong> Integrate relevant quotes to
          strengthen your arguments.
        </li>
        <li>
          <strong>Descriptive Language:</strong> Use vivid and engaging language
          to capture the reader’s interest.
        </li>
        <li>
          <strong>Figures of Speech:</strong> Include metaphors, similes, or
          other literary devices to enhance style.
        </li>
        <li>
          <strong>Vivid Imagery:</strong> Help the reader visualize your ideas
          and connect emotionally with the topic.
        </li>
        <li>
          <strong>Character Development:</strong> If applicable, develop
          characters to illustrate your points.
        </li>
        <li>
          <strong>Strong Plot:</strong> Maintain a logical and engaging
          narrative structure.
        </li>
        <li><strong>Word Count:</strong> Aim for a minimum of 300 words.</li>
        <li>
          <strong>Punctuation & Capitalization:</strong> Ensure accuracy
          throughout your essay.
        </li>
      </ol>
      <em>Write with clarity, creativity, and confidence.</em>
</div>
      </main>
    </div>
  );
}
