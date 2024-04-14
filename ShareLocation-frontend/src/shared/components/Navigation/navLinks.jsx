import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/authContext";

import "./navLinks.css";

const NavLinks = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  const auth = useContext(AuthContext);

  const handleActiveNav = (index) => {
    setActiveNavIndex(index);
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink
          to="/"
          className={activeNavIndex === 0 ? "active-nav" : ""}
          onClick={() => handleActiveNav(0)}
        >
          All Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <>
          <li>
            <NavLink
              to="/uid/places"
              className={activeNavIndex === 1 ? "active-nav" : ""}
              onClick={() => handleActiveNav(1)}
            >
              My places
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/places/new"
              className={activeNavIndex === 2 ? "active-nav" : ""}
              onClick={() => handleActiveNav(2)}
            >
              Add places
            </NavLink>
          </li>
        </>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink
            to="/auth"
            className={activeNavIndex === 3 ? "active-nav" : ""}
            onClick={() => handleActiveNav(3)}
          >
            Authenticate
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/auth" onClick={auth.logout}>
            Log out
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
