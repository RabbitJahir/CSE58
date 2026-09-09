import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link href="/S3/dld/dldMid/week1" className="SubButton">
          Week 1, number conversion, complements
        </Link>
        {/* <Link
          href="/S3/dld/dld-week1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Week 1, number conversion, complements
        </Link> */}

        <div className="syllabus-box">
          <h2>Syllabus at a Glance</h2>

          <div className="chapter">
            <strong>K-map:</strong>
            <ul>
              <li>SOP, POS</li>
              <li>Story mode, make the table and then kmap</li>
              <li>2,3,4 variables</li>
            </ul>
          </div>

          <div className="chapter">
            <strong>Number System:</strong>
            <ul>
              <li>multiply, add, minus</li>
              <li>gray code</li>
              <li>change number system</li>
              <li>1's, 2's, r's compliment</li>
            </ul>
          </div>

          <div className="chapter">
            <strong>Logic Gates:</strong>
            <ul>
              <li>Universal to all, both simplification and gates drawing</li>
              <li>Using simple gates, drawing</li>
            </ul>
          </div>

        </div>


      </main>
    </div>
  );
}
