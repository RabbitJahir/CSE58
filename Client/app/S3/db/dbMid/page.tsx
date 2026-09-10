import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        
        <div className="syllabus-box">
          <h2>Syllabus at a Glance</h2>

          <div className="chapter">
            <strong>Lecture-1:</strong>
            <ul>
              <li>File based System and Database </li>
              <li>Description and Difference</li>
            </ul>
          </div>

          <div className="chapter">
            <strong>Lecture-2:</strong>
            <ul>
              <li>Schema, all types, drawing schema from table and vice versa</li>
              <li>Application Architecture: 2,3 tier</li>
              <li>SQL, DDL, DML description</li>
            </ul>
          </div>

          <div className="chapter">
            <strong>Lecture-3:</strong>
            <ul>
              <li>Everything of lecture 3</li>
            </ul>
          </div>

          <div className="chapter">
            <strong>Lecture-4:</strong>
            <ul>
              <li>Relational Model all, description, uses. From table to relational models</li>
              <li>Domain & Key Constraits: From table to writing SQL</li>
            </ul>
          </div>

          <div className="chapter">
            <strong>Lecture-5:</strong>
            <ul>
              <li>All Relational Algebra Operations: From table to writing relational algebra.</li>
              <li>Set, Cartesian, Rename</li>
            </ul>
          </div>

        </div>

      </main>
    </div>
  );
}
