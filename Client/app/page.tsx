"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [{ href: "/", label: "Home", className: "HeaderButton" }];

export default function Home() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div>
      <header className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-black/30 backdrop-blur-sm relative">
        <Image src="/favicon.ico" alt="logo" width={32} height={32} />

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
        <div>
          <button className="homebox" onClick={() => setShow1(!show1)}>
            OU1TS
          </button>
          {show1 && (
            <div className="homebox">
              <p>
                Create an account and start exploring! <br />
                The beginning of an amazing journey! Discover handy resources
                and tools! For everyone! <br />
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
            </div>
          )}
        </div>
        <div>
          <button className="homebox" onClick={() => setShow2(!show2)}>
            University Companion
          </button>
          {show2 && (
            <div className="homebox">
              <p>
                <p>
                  The company you wish you had before any exam. Mainly for CSE.
                </p>
                <p>Find Questions of previous batches : ct, mid, final. </p>
              </p>
              <Link
                href="https://university-companion.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="SubButton"
              >
                Companion!
              </Link>
            </div>
          )}
        </div>
        <div>
          <button className="homebox" onClick={() => setShow3(!show3)}>
            CSE 58
          </button>
          {show3 && (
            <div className="homebox">
              <p>The Academic journay of Batch 58, made and handled by 1006.</p>
              <Link href="https://cse58.vercel.app/" className="SubButton">
                This Link
              </Link>
            </div>
          )}
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
