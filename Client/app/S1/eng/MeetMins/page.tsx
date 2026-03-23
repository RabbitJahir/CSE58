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
        <div className="max-w-4xl mx-auto p-6 space-y-8 font-sans">
          <h2 className="text-2xl font-bold text-center mb-4">
            Welcome to Meeting Minutes Page
          </h2>
          <p className="text-sm italic">
            The bold words are not to be written.
          </p>

          <div className=" border border-gray-300 shadow-md rounded-xl p-6 space-y-4">
            {/* Header Info */}
            <div className="space-y-1 text-sm">
              <div className="flex">
                <span className="font-semibold w-36">Organization:</span>{" "}
                TechnoLab
              </div>
              <div className="flex">
                <span className="font-semibold w-36">Type of Meeting:</span>{" "}
                Regular Monthly Meeting
              </div>
              <div className="flex">
                <span className="font-semibold w-36">Date:</span> November 4,
                2025
              </div>
              <div className="flex">
                <span className="font-semibold w-36">Time:</span> 3:00 PM - 4:15
                PM
              </div>
              <div className="flex">
                <span className="font-semibold w-36">Venue:</span> Room 203,
                Main Building
              </div>
              <div className="flex">
                <span className="font-semibold w-36">Chairperson:</span> Prof.
                Chair
              </div>
              <div className="flex">
                <span className="font-semibold w-36">Minute Taker:</span> Mr.
                Rabbit Jahir
              </div>
            </div>

            <hr className="border-gray-400 my-4" />

            {/* Attendance */}
            <div className="space-y-2 text-sm">
              <p>1. Attendance:</p>
              <p>Present Members:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Chair Dom, CEO</li>
                <li>Mr. Halelu Yah, Chairperson</li>
                <li>Dr. Who Is He, Main Manager</li>
                <li>Mr. Beckerman Benjamin, Hiring Manager</li>
                <li>Mr. Highway Roller, Staff Manager</li>
                <li>Mr. Rabbit Jahir, Assistant Manager</li>
              </ul>

              <p >Absent Members:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Prince Obama Bin Laden, Manager of Managers (On leave to
                  attend a conference)
                </li>
              </ul>

              <p>
                Quorum confirmation: The CEO confirmed that the quorum is
                authentic and the meeting began at 3:10 PM.
              </p>
            </div>

            {/* Agenda Items */}
            <div className="space-y-3 text-sm">
              <p>2. Agenda Items:</p>
              <ul className="list-decimal list-inside space-y-1">
                <li>Science Fair Preparation</li>
                <li>New Membership Drive</li>
                <li>Equipment Maintenance</li>
                <li>Any Other Business</li>
              </ul>

              {/* Detailed Agenda */}
              <div className="space-y-2">
                <p >2.1 Science Fair Preparation</p>
                <p>
                  <span className="font-semibold">Discussion:</span> Members
                  discussed booth setup, budget, and volunteer assignments.
                </p>
                <p>
                  <span className="font-semibold">Decision:</span> The fair will
                  be held on 20 November 2025.
                </p>
                <p>
                  <span className="font-semibold">Action:</span> Tanvir to
                  finalize the budget by 8 November and Ayesha to design posters
                  by 10 November.
                </p>

                <p >2.2 New Membership Drive</p>
                <p>
                  <span className="font-semibold">Discussion:</span> Proposed to
                  invite new students through social media and classroom visits.
                </p>
                <p>
                  <span className="font-semibold">Decision:</span> Campaign to
                  begin on 12 November 2025.
                </p>
                <p>
                  <span className="font-semibold">Action:</span> Sara to prepare
                  an online registration form.
                </p>

                <p >2.3 Equipment Maintenance</p>
                <p>
                  <span className="font-semibold">Discussion:</span> Some lab
                  equipment requires servicing.
                </p>
                <p>
                  <span className="font-semibold">Decision:</span> Approve a
                  budget of ৳3,000 for minor repairs.
                </p>
                <p>
                  <span className="font-semibold">Action:</span> Rafiul will
                  contact the technician by 6 November 2025.
                </p>

                <p >2.4 Any Other Business</p>
                <p>
                  Rahim suggested organizing a guest lecture in December.
                  Further planning postponed to next meeting.
                </p>
              </div>

              {/* Next Meeting */}
              <div className="space-y-1">
                <p>3. Next Meeting:</p>
                <div className="flex gap-4">
                  <span className="font-semibold w-24">Date:</span> 18 November
                  2025
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold w-24">Time:</span> 3:00 PM
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold w-24">Venue:</span> Room 203
                </div>
              </div>

              {/* Adjournment */}
              <div className="space-y-1">
                <p>4. Adjournment:</p>
                <p>The meeting was adjourned at 4:15 PM.</p>
                <p>Prepared by: Mr. Rabbit Jahir, Assistant Manager<b>( Minute taker )</b></p>
                <p>Approved by: Mr. Halelu Yah, Chairperson<b>( The highest role present/ advisor/ inspecting member )</b></p>
              </div>
            </div>

            <hr className="border-gray-400 mt-4" />
          </div>

          {/* Hierarchy Section */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">Hierarchy Chart</p>

            <div className="space-y-2">
              <p className="font-semibold">School / Educational Institution</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Chairperson / Governing Body Chairman</li>
                <li>Principal / Headmaster</li>
                <li>Vice Principal</li>
                <li>Senior Teacher / Department Head</li>
                <li>Teachers</li>
                <li>Student Representatives (optional)</li>
                <li>Secretary / Minute Taker</li>
              </ol>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Company / Corporate Office</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Chairperson (Board)</li>
                <li>Board of Directors</li>
                <li>CEO</li>
                <li>Managing Director (MD)</li>
                <li>COO / CFO / CTO</li>
                <li>General Managers</li>
                <li>Managers</li>
                <li>Staff Members</li>
                <li>Secretary / Recorder</li>
              </ol>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">NGO / Nonprofit Organization</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Board Chairperson</li>
                <li>Board Members</li>
                <li>Executive Director</li>
                <li>Program Directors</li>
                <li>Coordinators</li>
                <li>Volunteers</li>
                <li>Minute Taker</li>
              </ol>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Government / Public Sector</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Minister / Secretary / Director General (DG)</li>
                <li>Additional Secretary</li>
                <li>Joint Secretary</li>
                <li>Deputy Secretary</li>
                <li>Assistant Secretary</li>
                <li>Officers</li>
                <li>Staff</li>
                <li>Meeting Recorder</li>
              </ol>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">University / College</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Chancellor</li>
                <li>Vice-Chancellor (VC)</li>
                <li>Pro-Vice Chancellor</li>
                <li>Dean</li>
                <li>Department Chair / Head</li>
                <li>Professors / Lecturers</li>
                <li>Registrar</li>
                <li>Meeting Secretary</li>
              </ol>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">
                Small Business / Local Organization
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Owner / Founder</li>
                <li>Manager</li>
                <li>Supervisors</li>
                <li>Employees</li>
                <li>Secretary / Note taker</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
