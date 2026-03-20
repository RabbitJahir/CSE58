import Header from "../../components/Header/Index";

const links = [
  { href: "/", label: "Home" },
  { href: "/S2", label: "S2 Page" },
];

export default function ed() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box"><h1 className="page-header">ed</h1></main>
    </div>
  );
}
