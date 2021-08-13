import React from "react";
import { connect } from "react-redux";
import AuthNav from "../auth/AuthNav";
import UserMenu from "../userMenu/UserMenu";
import Navigation from "./navigation/Navigation";
import { getIsAuthenticated } from "../../redux/auth/authSelectors";
import HeaderStyled from "./HeaderStyled";

const Header = ({ isAuthenticated }) => (
  <HeaderStyled>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </HeaderStyled>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
