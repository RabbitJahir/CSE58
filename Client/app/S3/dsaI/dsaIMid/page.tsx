import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">

        <div className="syllabus-box">
          <h2>Syllabus at a Glance</h2>

          <div className="chapter">
            <strong>Linked List:</strong>
            <ul>
              <li>Singly</li>
              <li>Doubly</li>
              <li>Circular</li>
              <li>Insertion, Deletion</li>
              <li>Insert/Delete from a specific index/number</li>
            </ul>
          </div>

          <div className="chapter">
            <strong>Matrix:</strong>
            <ul>
              <li>Summation</li>
              <li>Subtraction</li>
              <li>Multiplication</li>
              <li>Boundary elements,add</li>
              <li>diagonal elements, add</li>
            </ul>
          </div>

          <div className="chapter">
            <strong>Searching:</strong>
            <ul>
              <li>Linear</li>
              <li>Binary</li>
            </ul>
          </div>

        </div>
        
      </main>
    </div>
  );
}
