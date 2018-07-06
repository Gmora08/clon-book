import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import NoMatch from "../../components/NoMatch";
import Login from "../Login";
import Signup from "../Signup";

export default class App extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}
