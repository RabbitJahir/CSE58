import Header from "../components/Header/Index";

type PLOType = {
  id: number;
  title: string;
  description: string;
};

export default function PLO() {
  const plos: PLOType[] = [
    {
      id: 1,
      title: "Engineering Knowledge",
      description: "Apply mathematics, science, and engineering fundamentals.",
    },
    {
      id: 2,
      title: "Problem Analysis",
      description: "Identify and analyze complex engineering problems.",
    },
    {
      id: 3,
      title: "Design/Development of Solutions",
      description: "Design systems or components to meet specific needs.",
    },
    {
      id: 4,
      title: "Investigation",
      description:
        "Conduct investigations of complex problems using research-based methods.",
    },
    {
      id: 5,
      title: "Modern Tool Usage",
      description:
        "Create and apply appropriate techniques, resources, and modern engineering tools.",
    },
    {
      id: 6,
      title: "The Engineer and Society",
      description:
        "Apply reasoning to assess societal, health, safety, and legal issues.",
    },
    {
      id: 7,
      title: "Environment and Sustainability",
      description:
        "Understand the impact of engineering solutions on the environment.",
    },
    {
      id: 8,
      title: "Ethics",
      description:
        "Apply ethical principles and commit to professional ethics.",
    },
    {
      id: 9,
      title: "Individual and Teamwork",
      description: "Function effectively as an individual or team member.",
    },
    {
      id: 10,
      title: "Communication",
      description: "Communicate effectively on complex activities.",
    },
    {
      id: 11,
      title: "Project Management",
      description: "Manage projects in multidisciplinary environments.",
    },
    {
      id: 12,
      title: "Lifelong Learning",
      description: "Recognize the need for independent and life-long learning.",
    },
  ];
  const links = [{ href: "/", label: "Home", className: "HeaderButton" }];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Program Learning Outcomes (PLO)</h1>
      <Header links={links} />
      
      {plos.map((plo) => (
        <div
          key={plo.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "12px",
            color: "white",
          }}
        >
          <h2>
            PLO {plo.id}: {plo.title}
          </h2>

          <p>{plo.description}</p>
        </div>
      ))}
    </div>
  );
}
