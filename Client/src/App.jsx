import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useState, useEffect } from "react";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, []);

  return (
    <>
      {!isOnline && (
        <div className="bg-yellow-500 text-center p-2 text-sm">
          You are offline — some features may be unavailable
        </div>
      )}
      <RouterProvider router={router} />
    </>
  );
};

export default App;