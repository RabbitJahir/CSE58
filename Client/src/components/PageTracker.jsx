import React, { createContext, useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const PageTrackerContext = createContext();

export const PageTrackerProvider = ({ children }) => {
  const location = useLocation();
  const [prevPage, setPrevPage] = useState(null);
  const prevPath = useRef(null);

  useEffect(() => {
    if (prevPath.current && prevPath.current !== location.pathname) {
      setPrevPage(prevPath.current);
    }
    prevPath.current = location.pathname;
  }, [location]);

  return (
    <PageTrackerContext.Provider value={{ prevPage }}>
      {children}
    </PageTrackerContext.Provider>
  );
};