import React, { Component } from "react";
import PropTypes from "prop-types";
import { auth } from "../../helpers/firebase";

import View from "./view";

import {
  isEmpty,
  validateEmail,
  validatePasswords
} from "../../helpers/validators";

export default class Signup extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: {
          validator: validateEmail,
          isValid: false,
          errorMessage: "Correo invalido",
          value: ""
        },
        password: {
          validator: isEmpty,
          isValid: false,
          value: "",
          errorMessage: "Campo requerido"
        },
        confirmPassword: {
          validator: validatePasswords,
          isValid: false,
          value: "",
          errorMessage: "Las contraseñas no coinciden"
        }
      },
      formHasError: false,
      errorMessage: "",
      showErrors: false,
      canSubmitForm: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleChange({ target: { name: name, value: value } }) {
    const state = this.state;
    state.form[name].value = value;
    state.form[name].isValid = this.validateInput(
      name,
      value,
      state.form[name].validator
    );
    this.setState({ state });
  }

  signup(e) {
    e.preventDefault();
    const formIsValid = this.validateForm();

    if (formIsValid) {
      this.setState({ canSubmitForm: false });
      auth
        .createUserWithEmailAndPassword(
          this.state.form.email.value,
          this.state.form.password.value
        )
        .then(authUser => this.props.history.push("/login"))
        .catch(({ message }) => {
          this.setState({ formHasError: true, errorMessage: message });
        });
      return true;
    }
    this.setState({ showErrors: true });
    return false;
  }

  validateForm() {
    const errors = Object.keys(this.state.form).filter(
      key => this.state.form[key].isValid === false
    );
    if (errors.length) {
      return false;
    }
    return true;
  }

  validateInput(name, value, validator) {
    if (name === "confirmPassword") {
      return validator(this.state.form.password.value, value);
    }
    return validator(value);
  }

  render() {
    return (
      <View
        canSubmitForm={this.state.canSubmitForm}
        email={this.state.form.email}
        password={this.state.form.password}
        confirmPassword={this.state.form.confirmPassword}
        formHasError={this.state.formHasError}
        errorMessage={this.state.errorMessage}
        handleChange={this.handleChange}
        signup={this.signup}
        showErrors={this.state.showErrors}
      />
    );
  }
}
