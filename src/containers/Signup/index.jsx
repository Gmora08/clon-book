import React, { Component } from "react";
import PropTypes from "prop-types";
import { auth } from "../../helpers/firebase";

import View from "./view";

export default class Signup extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      formHasError: false,
      errorMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleChange({ target: { name: name, value: value } }) {
    this.setState({ [name]: value });
  }

  signup(e) {
    console.log("signup");
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => this.props.history.push("/login"))
      .catch(({ message }) => {
        this.setState({ formHasError: true, errorMessage: message });
      });
  }

  render() {
    return (
      <View
        formHasError={this.state.formHasError}
        errorMessage={this.state.errorMessage}
        handleChange={this.handleChange}
        signup={this.signup}
      />
    );
  }
}
