import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";

export default class Signup extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleChange({ target: { name: name, value: value } }) {
    this.setState({ [name]: value });
  }

  signup(e) {
    e.preventDefault();
    console.log("algo");
  }

  render() {
    return (
      <div>
        <View handleChange={this.handleChange} signup={this.signup} />
      </div>
    );
  }
}
