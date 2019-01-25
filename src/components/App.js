import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { withRouter, Route } from 'react-router-dom'
import Home from "./Home";
import RecentAlerts from "./RecentAlerts";
import Switch from "react-router-dom/es/Switch";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Location from "./Location";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";


class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar position="static" color="primary">
              <Toolbar>
                  <Typography variant="h6" color="inherit">
                      CareFall
                  </Typography>
              </Toolbar>
          </AppBar>
          <Switch>
              <Route exact path="/recentAlerts" component={RecentAlerts}/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/location" component={Location}/>
          </Switch>
          <NavBar/>
      </div>
    );
  }
}

export default withRouter(App);
