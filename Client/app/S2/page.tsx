import Link from "next/link";
import styles from "./S2.module.css";
import Header from "../components/Header/Index";

const links = [{ href: "/", label: "Home", className: "HeaderButton" }];

export default function S2_Home() {
 

  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">2nd Semester</h1>

        <div className={styles.links}>
          <Link className={styles.calendar} href="/S2/calendar">
            CALENDAR
          </Link>
          <Link className={styles.oop} href="/S2/oop">
            OOP
          </Link>
          <Link className={styles.web} href="/S2/wad">
            <span>WAD</span>
          </Link>
          <Link className={styles.discrete} href="/S2/discrete">
            DISCRETE
          </Link>
          <Link className={styles.opde} href="/S2/opde">
            OPDE
          </Link>
          <Link className={styles.electrical} href="/S2/eee">
            <span>EEE</span>
            <span className="bolt1"></span>
            <span className="bolt2"></span>
            <span className="bolt3"></span>
            <span className="bolt4"></span>
          </Link>
          <Link className={styles.ed} href="/S2/ed">
            ED
          </Link>
          <Link className={styles.bd} href="/S2/bs">
            BS
          </Link>
        </div>
      </main>
    </div>
  );
}
