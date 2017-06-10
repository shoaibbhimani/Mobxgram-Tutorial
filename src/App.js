import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { Switch, Route, withRouter } from "react-router-dom"

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
 