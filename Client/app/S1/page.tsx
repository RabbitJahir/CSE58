import Link from "next/link";
import styles from "./S2.module.css";
import Header from "../components/Header/Index";

const links = [
  { href: "/", label: "Home", className:"HeaderButton" },
];

export default function S1_Home() {
  return (
    <div >
      
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">
          1st Semester
        </h1>

        
      </main>
    </div>
  );
}
