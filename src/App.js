import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { Switch, Route, withRouter } from "react-router-dom"

import "./App.css"

import MobxgramList from "./components/MobxgramList.js"


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
          <Route path="/:imageName" render={() => <h2>imageName</h2>} />
        </Switch> : null
      }
        
      </div>
    );
  }
}

export default inject("mobxgramStore")(withRouter(observer(App)));
 