import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">


        <div className="syllabus-box">
            <h2>Syllabus at a Glance</h2>
        
              <div className="chapter">
                <strong>Lecture 7, combinational circuit</strong><br/>
                <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                  <li>Combinationl Circuit defination</li>
                  <li>Combinational cirucit VS sequential Circuit</li>
                  <li> Half adder circuit diagram, truth table, C & S equation, logical diagram</li>
                  <li>Full adder circuit diagram, truth table, C & S equation, logical diagram</li>
                  <li> 4 bit parallel adder circuit diagram, truth table, equation, logical diagram</li>
                  <li> 4 bit parallel adder cum subtractor</li>
                  <li> Cascading adders</li>
                  <li> 16 bit parallel adder</li>
                </ul>
              </div>

              <div className="chapter">    
                <strong>Lecture 8</strong>                
              </div>

              <div className="chapter">
                <strong>Lecture 9, MSI circuit</strong>
                <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                  <li> Decoder defination, Circuit diagram, truth table, logical diagram</li>
                  <li> Designing a custom decoder, logical diagram, application logical diagram <br/>(page 8, 16,17) </li>
                  <li> Demultiplexer, circuit diagram, truth table, defination</li>
                  <li> Multiplexer, circuit diagram, truth table <br/> (page 22, 23) </li>
                  <li> Encoder defination, 2<sup>n</sup> encoder truth table and logical diagram</li>
                  <li> Priority encoder defination, truth table, kmap logical diagram</li>
                </ul>                    
              </div>
        
              <div className="chapter">
                <strong>Magnitude Comparator</strong>
                <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                  <li>1-bit Comparator, circuit diagram, truth table, 3 equations and logical diagram</li>
                  <li>2-bit Comparator, truth table, 3 equations and logical diagram, </li>
                  <li>4-bit Comparator, truth table, 3 equations and logical diagram, </li>
                </ul>                    
              </div>

              <div className="chapter">
                <strong>Lecture 10</strong>
                <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                  <li>4 Basic flip-flops</li>
                  <li>logical and circuit diagrams</li>
                  <li>Characteristic and excitation tables</li>
                </ul>                    
              </div>

              <div className="chapter">
                <strong>Lecture 11</strong>
                <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                  <li>Squential Circuit defination</li>
                  <li>Understanding state table, characteristic table, excitation table</li>
                  <li>From logical diagram to equations to state diagram</li>
                  <li>How to build excitation table (x) form</li>
                  <li>State diagram to state table to equations (K-map)</li>
                  <li style={{color:'#3b82f6'}}><a href="https://github.com/RabbitJahir/Experience/tree/main/dld">flip-flop basic notes, link to github</a></li>
                </ul>                    
              </div>
        </div>

      </main>
    </div>
  );
}
