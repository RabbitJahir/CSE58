import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        
        <div className="syllabus-box">
          <h2>Syllabus at a Glance</h2>

          <div className="chapter">
            <strong>Ch1:</strong>
            <ul>
              <li>Everything about Diode</li>
            </ul>
          </div>

          <div className="chapter">
            <strong>Ch2:</strong>
            <ul>
              <li>Diode 3 types</li>
              <li>Math with Series and Parallel Diode</li>
              <li>Clipper circuits, graphs, equations</li>
              <li>Clamper circuits, graphs, equations</li>
            </ul>
          </div>
        </div>
        
        <Link
          href="/S3/edc/EDC_diode-rectifier-3types.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diode Rectifier 3 types
        </Link>
      </main>
    </div>
  );
}
