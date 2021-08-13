import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";
import LoginPageStyled from "./LoginPageStyled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <LoginPageStyled>
        <div>
          <h1 className="title">Login page</h1>

          <form
            onSubmit={this.handleSubmit}
            className="FormEditor"
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              label="email"
              variant="filled"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="FormEditorInput"
              autoComplete="off"
            />
            <TextField
              id="filled-basic"
              label="password"
              variant="filled"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="FormEditorInput"
              autoComplete="off"
            />

            <Button variant="contained" color="primary" type="submit">
              Log in
            </Button>
          </form>
        </div>
      </LoginPageStyled>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
