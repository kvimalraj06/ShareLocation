import React from "react";
import { NavLink } from "react-router-dom";

import "./navLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      <li>
        <NavLink to="/uid/places">My places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add places</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
