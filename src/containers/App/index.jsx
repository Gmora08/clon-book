import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import NoMatch from "../../components/NoMatch";
import Navbar from "../../components/Navbar";
import Login from "../Login";
import Signup from "../Signup";
import AdminApp from "../AdminApp";

export default class App extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/" component={AdminApp} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
