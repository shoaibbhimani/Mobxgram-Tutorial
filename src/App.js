import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { Switch, Route, withRouter, NavLink } from "react-router-dom"

import "./App.css"

import MobxgramList from "./components/MobxgramList.js"
import PhotoDetails from "./components/PhotoDetail.js"


class App extends Component {
  
  componentDidMount(){
    this.props.mobxgramStore.getStore();
  }

  render() {
    const { mobxgramStore } = this.props;
    return (
      <div>
      <h2 className="text-center">
        <NavLink to="/">
          MobxGram
        </NavLink>
      </h2> 
        
      {
        mobxgramStore.mobxgramList.length ? 
        <Switch>
          <Route exact path="/" component={MobxgramList} />
          <Route path="/:imageName" component={PhotoDetails} />
        </Switch> : null
      }
        
      </div>
    );
  }
}

export default inject("mobxgramStore")(withRouter(observer(App)));
 