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

        <div className="max-w-2xl mx-auto  shadow-lg rounded-xl p-8 border border-gray-200">
          <h2 className="text-xl font-bold mb-6 text-center tracking-wide">
            MEMORANDUM
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex">
              <span className="font-semibold w-24">To:</span>
              <span>All Department Heads</span>
            </div>

            <div className="flex">
              <span className="font-semibold w-24">From:</span>
              <span>Managing Director</span>
            </div>

            <div className="flex">
              <span className="font-semibold w-24">Date:</span>
              <span>15 November 2025</span>
            </div>

            <div className="flex">
              <span className="font-semibold w-24">Subject:</span>
              <span>Monthly Review Meeting Schedule</span>
            </div>
          </div>

          <hr className="my-6" />

          <div className="space-y-4 text-[15px] leading-relaxed">
            <p>
              Please be informed that the monthly performance review meeting
              will be held on
              <strong> 20 November 2025 at 10:00 AM </strong>
              in the main conference hall. All department heads must be present
              with their updated reports.
            </p>

            <p>
              If there are any issues or adjustments required, please notify the
              office by 18 November 2025.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-semibold">__________________________</p>
            <p className="text-sm">Managing Director</p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-8 shadow-md rounded-xl p-6 border border-gray-200">
          <p className="mb-4">
            A memorandum is a written notice used to share information,
            instructions, decisions, or reminders within an organization. It is
            mainly used in schools, offices, companies, government departments,
            and organizations.
          </p>

          <p className="font-semibold mb-2">Memorandums are used for:</p>

          <ol className="list-decimal ml-6 space-y-1">
            <li>Announcements</li>
            <li>Instructions</li>
            <li>Meeting notices</li>
            <li>Policy changes</li>
            <li>Reminders / Requests</li>
            <li>Internal communication</li>
          </ol>

          <div className="mt-6 border rounded-lg p-4">
            <b>How to write</b>
            <p className="mt-2 text-sm leading-relaxed">
              1. Opening Paragraph – States purpose of the memo and explains why
              you are writing.
              <br />
              2. Body Paragraph(s) – Provides background, facts, or issues.
              <br />
              3. Closing Paragraph – Summarizes the key point and provides
              instructions or next steps.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
