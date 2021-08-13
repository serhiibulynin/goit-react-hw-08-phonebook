import React from "react";
import { connect } from "react-redux";
import { getUsername } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";
import defaultAvatar from "./default-avatar.png";
import UserNameStyled from "./UserNameStyled";
import Button from "@material-ui/core/Button";

const UserMenu = ({ avatar, name, onLogout }) => (
  <UserNameStyled>
    <img className="userImg" src={avatar} alt="" width="32" />
    <span className="userName">Welcome, {name}</span>
    <Button
      variant="contained"
      color="primary"
      type="button"
      onClick={onLogout}
    >
      Logout
    </Button>
  </UserNameStyled>
);
const mapStateToProps = (state) => ({
  name: getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
