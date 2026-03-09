// src/components/ErrorPage.jsx
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  // Check if it's a 404 (Route not found)
  const message =
    error?.status === 404
      ? "Page not found"
      : "Still working on this Page!";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">
        {error?.status || "Error"}
      </h1>
      <p className="mt-4 text-xl">{message}</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;