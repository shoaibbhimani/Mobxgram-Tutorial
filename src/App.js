import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observer, inject } from "mobx-react"

import { Switch, Route, withRouter } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <h2>Home</h2>} />
          <Route path="/:imageName" render={() => <h2>imageName</h2>} />
        </Switch>
      </div>
    );
  }
}

export default inject("mobxgramStore")(withRouter(observer(App)));
 