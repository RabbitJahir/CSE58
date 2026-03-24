import Link from "next/link";

export default function DiscreteMid() {
  return (
    <div>
      <main className="mid-container">
        <Link href="/S2/discrete/DiscreteMid/DiscreteCh1" className="SubButton">
          Chapter 1
        </Link>
        <Link href="/S2/discrete/DiscreteMid/DiscreteCh2" className="SubButton">
          Chapter 2
        </Link>

        <Link
          href="/S2/Discrete/chapter_3_224-272.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chapter 3 <sub>-Download</sub>
        </Link>

        <Link href="/S2/discrete/DiscreteMid/Proposition" className="SubButton">
          Proposition
        </Link>
        <Link href="/S2/discrete/DiscreteMid/Condition" className="SubButton">
          Condition Statement
        </Link>
        <Link href="/S2/discrete/DiscreteMid/EngToLogic" className="SubButton">
          English Sentence to Logical expression
        </Link>
        <Link href="/S2/discrete/DiscreteMid/Quantifier" className="SubButton">
          Universal, Existential & Nested Quantifier
        </Link>
       
        <Link href="/S2/discrete/DiscreteMid/DirectProof" className="SubButton">
          Direct Proff technique
        </Link>
        <Link href="/S2/discrete/DiscreteMid/Set" className="SubButton">
          Set 
        </Link>
        <Link href="/S2/discrete/DiscreteMid/Onto" className="SubButton">
          Onto, One to one function
        </Link>
        <Link href="/S2/discrete/DiscreteMid/jective" className="SubButton">
          Bijective, Surjective, Injective
        </Link>
      </main>
    </div>
  );
}
