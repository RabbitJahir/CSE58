import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">

        <div className="syllabus-box">
                  <h2>Syllabus at a Glance</h2>
        
                  <div className="chapter">
                    <strong>Lecture-10, ER Model:</strong><br/> 
                    <ul>
                      <strong>1. Entities</strong><br/>
                      <ul>
                        <li>Rectangle, tables</li>
                        <li>Entities set, table with same entities</li>
                      </ul>
                      <strong>2. Attributes</strong><br/>
                      <ul>
                        <li>simple, single-valued, oval</li>
                        <li>composite, oval with multiple oval</li>
                        <li>derived, dashed oval</li>
                        <li>multi-valued, 2 oval</li>
                        <li>key, oval with underline keyword</li>
                      </ul>
                      <strong>3. Relationships</strong><br/>
                      <ul>
                        <li>Diamond</li>
                        <li>Relationship Set</li>
                        <li>Degree of relationships: unary, binary, ternary, n-ary</li>
                      </ul>
                      <strong>4. Mapping Cardinalities, Cardinality Ratio</strong><br/>
                      <ul>
                        <li>usually with binary</li>
                        <li>1:1, 1:M, M:1, M:M</li>
                      </ul>
                    </ul>                      
                  </div>
        </div>
      </main>
    </div>
  );
}
