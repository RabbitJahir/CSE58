import Header from "../../components/Header/Index";
import ToggleButton from "../../components/ToggleButton";

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
  const sections = [
    {
      id: "successive",
      title: "Successive Differentiation",
      content: <SuccessiveDifferentiation />,
    },
    {
      id: "partial-derivative",
      title: "Partial Derivative",
      content: <PartialDerivative />,
    },
    {
      id: "multiple-integration",
      title: "Multiple Integration",
      content: <MultipleIntegration />,
    },
    {
      id: "integration",
      title: "Integration",
      content: <Integration />,
    },
    {
      id: "area-finding",
      title: "Area Finding",
      content: <AreaFinding />,
    },
    {
      id: "rolls_mean",
      title: "Rolles and Mean Theorem",
      content: <RollsMean />,
    },
    {
      id: "beta_gama",
      title: "Beta and Gamma Function",
      content: <BetaGama />,
    },
    {
      id: "dmc",
      title: "Differentiation, Monotonicity, Concavity",
      content: <Dmc />,
    },
    {
      id: "max_mim",
      title: "Absolute Maxima and Minima",
      content: <MaxMim />,
    },
  ];

  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">
          Differential & Integral Calculus
        </h1>

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}