import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <ul
          className="bg-black/20 backdrop-blur-sm p-4 rounded-lg flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 font-bold text-lg sm:text-xl text-white 
       [&>li:hover]:text-yellow-400
       [&>li]:px-3
       [&>li]:py-1
       [&>li]:underline
       [&>li]:decoration-blue-500
      "
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/S12"
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              S_12
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
