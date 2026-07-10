import Link from "next/link";
import Header from "../components/Header/Index";
import styles from "./S3.module.css";

const links = [{ href: "/", label: "Home", className: "HeaderButton" }];

export default function S3_Home() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">3rd Semester</h1>
        <div className={styles.links}>
          <Link href="/S3/dsaI">Data Structure and Algorithm 1</Link>
          <Link href="/S3/dld">Digital Logic Design</Link>
          <Link href="/S3/db">Database Management System</Link>
          <Link href="/S3/eee">Electronic Devices and Circuits</Link>
          <Link href="/S3/math">
            CGLAVA
          </Link>
        </div>
      </main>
    </div>
  );
}
