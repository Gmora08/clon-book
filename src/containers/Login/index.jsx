import React, { Component } from "react";
import PropTypes from "prop-types";
import { auth } from "../../helpers/firebase";

import View from "./view";

import { isEmpty, validateEmail, validateForm } from "../../helpers/validators";

export default class Login extends Component {
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
        }
      },
      formHasError: false,
      errorMessage: "",
      showErrors: false,
      canSubmitForm: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange({ target: { name: name, value: value } }) {
    const state = this.state;
    state.form[name].value = value;
    state.form[name].isValid = state.form[name].validator(value);
    this.setState({ state });
  }

  login(e) {
    e.preventDefault();
    const formIsValid = validateForm(this.state.form);
    if (formIsValid) {
      auth
        .signInWithEmailAndPassword(
          this.state.form.email.value,
          this.state.form.password.value
        )
        .then(res => this.setState({ res }))
        .catch(({ message }) =>
          this.setState({ formHasError: true, errorMessage: message })
        );
    }
  }

  render() {
    return (
      <div>
        <View
          canSubmitForm={this.state.canSubmitForm}
          email={this.state.form.email}
          errorMessage={this.state.errorMessage}
          password={this.state.form.password}
          showErrors={this.state.showErrors}
          formHasError={this.state.formHasError}
          handleChange={this.handleChange}
          login={this.login}
        />
      </div>
    );
  }
}
