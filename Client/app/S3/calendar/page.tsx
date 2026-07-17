import Header from "../../components/Header/Index";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
];

export default function calendar() {
  return (
    <div>
      <Header links={links} />
    </div>
  );
}
