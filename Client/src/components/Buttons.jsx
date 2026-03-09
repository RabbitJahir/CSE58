import { Link } from "react-router-dom";
import React from "react";

function SubjectButton({ to, children, className = "", ...props }) {
  return (
    <Link
      to={to}
      className={`
        block text-center w-full px-6 py-3 rounded-lg border border-transparent
        transition-all duration-200
        hover:-translate-y-1 hover:border-yellow-500
        active:scale-95
        ${className}
      `}
      {...props}
    >
      {children}
    </Link>
  );
}

export default SubjectButton;