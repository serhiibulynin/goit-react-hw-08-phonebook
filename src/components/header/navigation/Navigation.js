import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../../redux/auth/authSelectors";

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className="siteNav">
      <NavLink
        to="/"
        exact
        className="navLink mrLink"
        activeClassName="activeLink"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          className="navLink"
          activeClassName="activeLink"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
