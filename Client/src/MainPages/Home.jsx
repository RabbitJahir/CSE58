import { Link } from "react-router-dom";
import Logosrc from "../components/Logosrc";
import Footer from "../components/Footer";
import HomeHeader from "./HomeHeader";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader/>
      
      <main className="flex-grow flex flex-col items-center gap-6 w-full px-4">
        {/* 3 main links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <a
            href="https://ouits-res.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="homebox"
          >
            <h2>OU1TS</h2>
            <p>
              Create an account and start exploring! <br />
              {/* The beginning of an amazing journey! Discover handy resources and tools! For everyone!<br/>*/}
              <i>TIP</i> : go to tools, b1t scheduler.
            </p>
          </a>

          <a
            href="https://university-companion.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="homebox"
          >
            <h2>University Companion</h2>
            <p>The company you wish you had before any exam. Mainly for CSE.</p>
            <p>Find Questions of previous batches : ct, mid, final. </p>
          </a>

          <a
            href="https://cse58.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="homebox"
          >
            <h2>CSE 58</h2>
            <p>Journal of the academic journey of CSE Batch 58.</p>
          </a>
        </div>

        {/* other links */}
        <Link to="/S12">
          <div className="SubButton">S_12</div>
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
