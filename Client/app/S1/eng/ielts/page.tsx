import Header from "../../../components/Header/Index";

const links = [
  { href: `/`, label: "Home", className: "HeaderButton" },
  { href: `/S1`, label: "S1 Page", className: "HeaderButton" },
  { href: `/S1/eng`, label: "English Page", className: "HeaderButton" },
];

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">IELTS Page</h1>

        {/* Listening */}
        <h2 className="text-blue-600 uppercase tracking-wider text-xl font-semibold">
          Listening
        </h2>

        <table className="w-[90%] max-w-[900px] border-collapse bg-white shadow-lg rounded-xl overflow-hidden text-black">
          <thead>
            <tr className="bg-blue-600 text-white uppercase tracking-wide">
              <th className="px-4 py-3 text-left">Part</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Overview</td>
              <td className="px-4 py-3">
                30 minutes, 4 parts, each recording played once
              </td>
              <td className="px-4 py-3">
                - Total 40 questions
                <br />- No negative marking, so answer all
              </td>
            </tr>

            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Part 1</td>
              <td className="px-4 py-3">
                Everyday conversation (social context)
              </td>
              <td className="px-4 py-3">
                Focus on everyday situations and general info
              </td>
            </tr>

            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Part 2</td>
              <td className="px-4 py-3">Monologue or labeling a map/route</td>
              <td className="px-4 py-3">
                Listen for directional words and places
              </td>
            </tr>

            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Part 3</td>
              <td className="px-4 py-3">Conversation among 2 to 4 people</td>
              <td className="px-4 py-3">Usually academic discussion</td>
            </tr>

            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Part 4</td>
              <td className="px-4 py-3">Monologue (academic topic)</td>
              <td className="px-4 py-3">Focus on note-taking and main ideas</td>
            </tr>
          </tbody>
        </table>

        {/* Reading */}
        <h2 className="text-blue-600 uppercase tracking-wider text-xl font-semibold">
          Reading
        </h2>

        <table className="w-[90%] max-w-[900px] border-collapse bg-white shadow-lg rounded-xl overflow-hidden text-black">
          <thead>
            <tr className="bg-blue-600 text-white uppercase tracking-wide">
              <th className="px-4 py-3 text-left">Details</th>
              <th className="px-4 py-3 text-left">Strategy / Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Duration</td>
              <td className="px-4 py-3">
                60 minutes — 3 passages, 40 questions
              </td>
            </tr>

            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Tips</td>
              <td className="px-4 py-3">
                - যেই প্যাসেজে প্রশ্ন থাকে, সেই প্যাসেজে ফোকাস করো
                <br />
                - পুরোটা না পড়ে sentence গুলো স্ক্যান করো
                <br />
                - ১ম ও শেষ sentence পড়ো
                <br />
                - মনোযোগ দিয়ে question বোঝো
                <br />
                - Time save করার জন্য, answer এর paragraph এ focus রাখো
                <br />- সহজ প্যারাগ্রাফ ও question আগে করো
              </td>
            </tr>
          </tbody>
        </table>

        {/* Writing */}
        <h2 className="text-blue-600 uppercase tracking-wider text-xl font-semibold">
          Writing
        </h2>

        <table className="w-[90%] max-w-[900px] border-collapse bg-white shadow-lg rounded-xl overflow-hidden text-black">
          <thead>
            <tr className="bg-blue-600 text-white uppercase tracking-wide">
              <th className="px-4 py-3 text-left">Task</th>
              <th className="px-4 py-3 text-left">Duration</th>
              <th className="px-4 py-3 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Task 1</td>
              <td className="px-4 py-3">20 minutes</td>
              <td className="px-4 py-3">
                Exactly 150 words, +-5 words
                <br />
                Summarize graph, table, or diagram
              </td>
            </tr>

            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Task 2</td>
              <td className="px-4 py-3">40 minutes</td>
              <td className="px-4 py-3">
                Exactly 250 words, +- 5 words
                <br />
                Write an essay (argument, opinion, or solution)
              </td>
            </tr>
          </tbody>
        </table>

        {/* Speaking */}
        <h2 className="text-blue-600 uppercase tracking-wider text-xl font-semibold">
          Speaking
        </h2>

        <table className="w-[90%] max-w-[900px] border-collapse bg-white shadow-lg rounded-xl overflow-hidden text-black">
          <thead>
            <tr className="bg-blue-600 text-white uppercase tracking-wide">
              <th className="px-4 py-3 text-left">Part</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Overview</td>
              <td className="px-4 py-3">
                Formal interview, total 11 - 14 minutes
              </td>
              <td className="px-4 py-3">Divided into 3 parts</td>
            </tr>

            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Part 1</td>
              <td className="px-4 py-3">All about you</td>
              <td className="px-4 py-3">
                Personal questions about hometown, studies, hobbies
              </td>
            </tr>

            <tr className="border-b hover:bg-blue-50">
              <td className="px-4 py-3">Part 2</td>
              <td className="px-4 py-3">Any topic with 1 minute to prepare</td>
              <td className="px-4 py-3">
                Speak for 1 - 2 minutes on the given topic
              </td>
            </tr>

            <tr className="hover:bg-blue-50">
              <td className="px-4 py-3">Part 3</td>
              <td className="px-4 py-3">Discussion</td>
              <td className="px-4 py-3">
                More abstract questions from Part 2 or other topics
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
