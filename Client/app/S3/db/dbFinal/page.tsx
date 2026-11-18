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
                        <li>Tables: Rectangle</li>
                        <li>Entities set: table with same entities</li>
                      </ul>
                      <strong>2. Attributes</strong><br/>
                      <ul>
                        <li>simple, single-valued: oval</li>
                        <li>composite: oval with multiple oval</li>
                        <li>derived: dashed oval</li>
                        <li>multi-valued: 2 oval</li>
                        <li>key: oval with underline keyword</li>
                      </ul>
                      <strong>3. Relationships</strong><br/>
                      <ul>
                        <li>Diamond</li>
                        <li>Relationship Set</li>
                        <li>Descriptive Attribute</li>
                        <li>Degree of relationships: unary, binary, ternary, n-ary</li>
                      </ul>
                      <strong>4. Mapping Cardinalities, Cardinality Ratio</strong><br/>
                      <ul>
                        <li>usually with binary</li>
                        <li>1:1, 1:M, M:1, M:M</li>
                      </ul>
                      </ul>
                    </div>

                  <div className="chapter">   
                    <strong>Lecture-11, ER Model, SP, G</strong><br/>
                    <ul> 
                        <strong>1. ER diagram to View Schem using SP or G or Sp / G to View Schema</strong><br/>
                        <ul>
                          <li>Specialization: Top to Bottom from ISA, child entity/ subclass</li>
                          <li>Generalization: Bottom to Top from ISA, parent entity/ superclass</li>
                        </ul>
                        <strong>2. Difference between Strong and weak Entity models</strong><br/>
                        <strong>3. Strong and Weak Entity </strong>
                        <ul> 
                          <li>Strong entity Sets</li>
                          <li>Weak entity Sets</li>
                        </ul>
                        <strong>4. Participation Constraints</strong><br/>
                        <ul>
                          <li>Total participation: M to M</li>
                          <li>Partial participation: 1 to 1</li>
                        </ul>
                    </ul>    
                  </div>

                  <div className="chapter">
                    <strong>Lecture-12, ER Model, View Schema</strong><br/>
                    <ul>
                      <strong>1. ER diagram to View Schema</strong>
                        <ul>
                          all rules
                        </ul>
                    </ul>
                  </div>

                  <div className="chapter">
                    <strong>Lecture-13, Normalization</strong><br/>
                    <ul>
                      <strong>1. 1NF</strong>
                        <ul>

                        </ul>
                      <strong>2. 2NF</strong>
                        <ul>
                          
                        </ul>
                      <strong>3. 3NF</strong>
                        <ul>
                          
                        </ul>
                      <strong>4. BCNF</strong>
                        <ul>
                          
                        </ul>
                    </ul>
                  </div>
                     
        </div>
      </main>
    </div>
  );
}
