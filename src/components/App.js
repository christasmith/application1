import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { withRouter, Route } from 'react-router-dom'
import Home from "./Home";
import Page1 from "./Page1";
import Switch from "react-router-dom/es/Switch";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/page" component={Page1}/>
          </Switch>
          <NavBar/>
      </div>
    );
  }
}

export default withRouter(App);
