import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, withRouter } from "react-router-dom";

<<<<<<< HEAD
import { attemptLogin } from "../actions/login/loginApiCall";

import Login from "../components/auth/Login.js";

class LoginPage extends Component {
=======
//import { attemptRegister } from "../actions/register/registerApiCall";

import Login from "../components/auth/Login.js";

class RegisterPage extends Component {
>>>>>>> Initial Login page setup
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();

<<<<<<< HEAD
    this.props.attemptLogin({
      email: this.state.email,
      password: this.state.password
    });
=======
    // this.props.attemptRegister({
    //   email: this.state.email,
    //   password: this.state.password
    // });
>>>>>>> Initial Login page setup
  };

  render() {
    const errors = { ...this.state.errors };
    const email = { ...this.state.email };
    const password = { ...this.state.password };
    const user = this.props.user || {};

    return user.email ? (
<<<<<<< HEAD
      <Redirect to="/" />
=======
      <div className="container">
        <h1>User Login</h1>
        Email: {user.email}
      </div>
>>>>>>> Initial Login page setup
    ) : (
      <Login
        onChange={e => this.onChange(e)}
        onClick={e => this.onClick(e)}
        email={email}
        password={password}
        errors={errors}
      />
    );
  }
}

// Store
function mapStateToProps(state) {
  return {
    user: state.user,
    data: state.user.data
  };
}

function matchDispatchToProps(dispatch) {
<<<<<<< HEAD
  return bindActionCreators({ attemptLogin }, dispatch);
=======
  return bindActionCreators({ attemptRegister }, dispatch);
>>>>>>> Initial Login page setup
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
<<<<<<< HEAD
)(withRouter(LoginPage));
=======
)(withRouter(RegisterPage));
>>>>>>> Initial Login page setup
