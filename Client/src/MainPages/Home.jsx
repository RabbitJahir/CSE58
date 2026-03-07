import { Link } from "react-router-dom";
import Logosrc from "../components/Logosrc";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col sm:flex-row items-center p-4 bg-black/35 backdrop-blur-sm">
        <Logosrc className="mb-2 sm:mb-0" />

        <h1 className="flex-1 text-3xl font-bold text-center text-white">
          Welcome to CSE 58 Batch Website
        </h1>
      </header>

      <main className="flex-grow flex flex-col items-center gap-6">
        <a
          href="https://ouits-res.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center bg-blue-500 px-15 py-2 rounded-lg font-black text-xl mt-3">
            OU1TS
          </div>
        </a>

        <a
          href="https://university-companion.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center bg-blue-500 px-15 py-2 rounded-lg font-black text-xl mt-3">
            Question Bank
          </div>
        </a>

        <Link to="/S12">
          <div className="flex justify-center bg-blue-500 px-15 py-2 rounded-lg font-black text-xl">
            S_12
          </div>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
