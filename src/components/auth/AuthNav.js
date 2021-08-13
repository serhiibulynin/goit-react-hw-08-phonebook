import React from "react";
import { NavLink } from "react-router-dom";
// import AuthStyled from "./AuthStyled";

const AuthNav = () => {
  return (
    <nav>
      <NavLink
        to="/register"
        className="navLink mrLink"
        activeClassName="activeLink"
      >
        Sign Up
      </NavLink>
      <NavLink to="/login" className="navLink" activeClassName="activeLink">
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
