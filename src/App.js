import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Switch, Route, withRouter, NavLink } from "react-router-dom";

import "./App.css";

import MobxgramList from "./components/MobxgramList.js";
import PhotoDetails from "./components/PhotoDetail.js";
import AddPhoto from "./components/AddPhoto";

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">
          <NavLink to="/">MobxGram</NavLink>
        </h2>

        <Switch>
          <Route exact path="/" component={MobxgramList} />
          <Route path="/add_photo" component={AddPhoto} />
          <Route path="/:imageName" component={PhotoDetails} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(observer(App));
