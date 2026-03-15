import React, { useState, useEffect } from "react";
import Logosrc from "../components/Logosrc"

const HomeHeader = () => {
  return (
    <header className="homeheader flex items-center gap-4 p-4 bg-white dark:bg-black/30 backdrop-blur-sm">
      <Logosrc />

      <h1 className="flex-1 text-3xl font-bold text-center text-black dark:text-white transition-colors duration-300">
        Welcome to CSE 58 Batch Website
      </h1>
      <h6>New Web App! Use add to home screen, load pdfs once, it gets stored in cache, will stay there till you delete cache!</h6>
      
    </header>
  );
};

export default HomeHeader;
