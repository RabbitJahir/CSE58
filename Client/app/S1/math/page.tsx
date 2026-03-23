"use client";
import { useState } from "react";

import Link from "next/link";
import Header from "../../components/Header/Index";

import SuccessiveDifferentiation from "./successive/page";
import PartialDerivative from "./partial-derivative/page";
import MultipleIntegration from "./multiple-integration/page";
import Integration from "./integration/page";
import AreaFinding from "./area-finding/page";
import RollsMean from "./rolls_mean/page";
import BetaGama from "./beta_gama/page";
import Dmc from "./dmc/page";
import MaxMim from "./max_mim/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S1", label: "S1 Page", className: "HeaderButton" },
];

export default function Page() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">Differential & Integral Calculus</h1>
        <Link
          href="/S1/math/co.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Course Outline
        </Link>
        <Link
          href="/S1/math/questions.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Final Questions
        </Link>
        <Link
          href="/S1/math/answers.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Final Answers to the above Questions
        </Link>

        <button
          className={`SubButton ${open === "successive" ? "active" : ""}`}
          onClick={() => toggle("successive")}
        >
          Successive Differentiation
        </button>
        {open === "successive" && <SuccessiveDifferentiation />}

        <button
          className={`SubButton ${open === "partial-derivative" ? "active" : ""}`}
          onClick={() => toggle("partial-derivative")}
        >
          Partial Derivative
        </button>
        {open === "partial-derivative" && <PartialDerivative />}

        <button
          className={`SubButton ${open === "multiple-integration" ? "active" : ""}`}
          onClick={() => toggle("multiple-integration")}
        >
          Multiple Integration
        </button>
        {open === "multiple-integration" && <MultipleIntegration />}

        <button
          className={`SubButton ${open === "integration" ? "active" : ""}`}
          onClick={() => toggle("integration")}
        >
          Integration
        </button>
        {open === "integration" && <Integration />}

        <button
          className={`SubButton ${open === "area-finding" ? "active" : ""}`}
          onClick={() => toggle("area-finding")}
        >
          Area Finding
        </button>
        {open === "area-finding" && <AreaFinding />}

        <button
          className={`SubButton ${open === "rolls_mean" ? "active" : ""}`}
          onClick={() => toggle("rolls_mean")}
        >
          Rolles and Mean Theorem
        </button>
        {open === "rolls_mean" && <RollsMean />}

        <button
          className={`SubButton ${open === "beta_gama" ? "active" : ""}`}
          onClick={() => toggle("beta_gama")}
        >
          Beta and Gamma Function
        </button>
        {open === "beta_gama" && <BetaGama />}

        <button
          className={`SubButton ${open === "dmc" ? "active" : ""}`}
          onClick={() => toggle("dmc")}
        >
          Differentiation, Monotonicity, Concavity
        </button>
        {open === "dmc" && <Dmc />}

        <button
          className={`SubButton ${open === "max_mim" ? "active" : ""}`}
          onClick={() => toggle("max_mim")}
        >
          Absolute Maxima and Minima
        </button>
        {open === "max_mim" && <MaxMim />}
      </main>
    </div>
  );
}
