// src/components/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-xl">Some Error huh. Please try to me contact me so I can resolve this.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Back Home Pls.
      </Link>
    </div>
  );
};

export default NotFound;