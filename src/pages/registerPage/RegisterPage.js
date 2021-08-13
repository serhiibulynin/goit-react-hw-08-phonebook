import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RegisterPageStyled from "./RegisterPageStyled";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <RegisterPageStyled>
        <div>
          <h1 className="title">Signup page</h1>

          <form
            className="FormEditor"
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="FormEditorInput"
              autoComplete="off"
            />

            <TextField
              id="filled-basic"
              label="Email"
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
              label="Password"
              variant="filled"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="FormEditorInput"
              autoComplete="off"
            />

            <Button variant="contained" color="primary" type="submit">
              Sign up
            </Button>
          </form>
        </div>
      </RegisterPageStyled>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
