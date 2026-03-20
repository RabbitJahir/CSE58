import Link from "next/link";
import Image from "next/image";

const links = [{ href: "/", label: "Home", className: "HeaderButton" }];

export default function Home() {
  return (
    <div>
      <header className="homeheader flex items-center justify-center gap-4 p-4 bg-white dark:bg-black/30 backdrop-blur-sm relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Image src="/favicon.ico" alt="logo" width={32} height={32} />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white transition-colors duration-300">
            Welcome to CSE 58 Batch Website
          </h1>
          <h6 className="text-sm mt-1 text-gray-600 dark:text-gray-300">
            New Web App! Use add to home screen, load PDFs once, it gets stored
            in cache, will stay there till you delete cache!
          </h6>
        </div>
      </header>

      <main className="main-box flex flex-col items-center gap-4 mt-6">
        {/* 3 main links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <Link
            href="https://ouits-res.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="homebox"
          >
            <h2>OU1TS</h2>
            <p>
              Create an account and start exploring! <br />
               The beginning of an amazing journey! Discover handy resources and tools! For everyone!<br/>
              <i>TIP</i> : go to tools, b1t scheduler.
            </p>
          </Link>

          <Link
            href="https://university-companion.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="homebox"
          >
            <h2>University Companion</h2>
            <p>The company you wish you had before any exam. Mainly for CSE.</p>
            <p>Find Questions of previous batches : ct, mid, final. </p>
          </Link>

          <Link
            href="https://cse58.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="homebox"
          >
            <h2>CSE 58</h2>
            <p>Journal of the academic journey of CSE Batch 58.</p>
          </Link>
        </div>
{/*-------------------------------semesters--------------------------------------------------------- */}
        <Link className="SubButton" href="/S1">
          Semester 1
        </Link>
        <Link className="SubButton" href="/S2">
          Semester 2
        </Link>
      </main>
    </div>
  );
}
