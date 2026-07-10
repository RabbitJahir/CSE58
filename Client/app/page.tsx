import Image from "next/image";
import Link from "next/link";
import HomePageState from "./components/HomePageState";

export default function Home() {
  const items = [
    {
      id: "ou1ts",
      title: "OU1TS",
      content: (
        <>
          <p>
            Create an account and start exploring! <br />
            The beginning of an amazing journey! Discover handy resources and
            tools!
            <br />
            <i>TIP</i>: go to tools, b1t scheduler.
          </p>

          <Link
            href="https://ouits-res.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="SubButton"
          >
            Visit OU1TS
          </Link>
        </>
      ),
    },
    {
      id: "companion",
      title: "University Companion",
      content: (
        <>
          <p>The company you wish you had before any exam. Mainly for CSE.</p>
          <p>Find Questions of previous batches: ct, mid, final.</p>

          <Link
            href="https://university-companion.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="SubButton"
          >
            Companion!
          </Link>
        </>
      ),
    },
    {
      id: "cse58",
      title: "CSE 58",
      content: (
        <>
          <p>The Academic journey of Batch 58, made and handled by 1006.</p>

          <Link href="https://cse58.vercel.app/" className="SubButton">
            This Link
          </Link>
        </>
      ),
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-black/30 backdrop-blur-sm relative border-b-2 border-white">
        <Image src="/favicon.ico" alt="logo" width={32} height={32} />

        <div className="text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Welcome to CSE 58 Batch Website
          </h1>
          <sup className="text-white">YOLO</sup>
        </div>
      </header>

      {/* Main */}
      <main className="main-box flex flex-col items-center gap-4 mt-6">
        
        <HomePageState items={items} />

        <Link className="SubButton" href="/PLO">
          PLO
        </Link>
        {/* Semester links */}
        <Link className="SubButton" href="/S1">
          Semester 1
        </Link>

        <Link className="SubButton" href="/S2">
          Semester 2
        </Link>

        <Link className="SubButton" href="/S3">
          Semester 3
        </Link>
      </main>
    </div>
  );
}
