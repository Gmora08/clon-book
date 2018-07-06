import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NoMatch from "../../components/NoMatch";
import Wall from "../Wall";

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const auth = localStorage.getItem("tokenElFeis");
    if (auth === null) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Wall} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
