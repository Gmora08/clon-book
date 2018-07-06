import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";

export default class Login extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange({ target: { name: name, value: value } }) {
    this.setState({ [name]: value });
  }

  login(e) {
    e.preventDefault();
    console.log("algo");
  }

  render() {
    return (
      <div>
        <View handleChange={this.handleChange} login={this.login} />
      </div>
    );
  }
}
