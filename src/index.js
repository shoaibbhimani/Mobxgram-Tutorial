import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import store from "./store";

ReactDOM.render(
  <Router>
    <Provider {...store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
