import React, { Component } from 'react';
import '../css/App.css';
import { withRouter, Route } from 'react-router-dom'
import Home from "./Home";
import RecentAlerts from "./RecentAlerts";
import Switch from "react-router-dom/es/Switch";
import NavBar from "./NavBar";
import History from "./History";
import Profile from "./Profile";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Hidden from "@material-ui/core/Hidden/Hidden";


class App extends Component {

    navigateHome = () =>{
        this.props.history.push({
            pathname: '/',
        });
        console.log("home")
    };

    navigateProfile = () =>{
        this.props.history.push({
            pathname: '/profile',
        });
        console.log("profile")
    };

    navigateHistory = () =>{
        this.props.history.push({
            pathname: '/history',
        });
        console.log("history")
    };

    navigateRecents = () =>{
        this.props.history.push({
            pathname: '/recentAlerts',
        });
        console.log("recentAlerts")
    };

  render() {
    return (
      <div className="App">
          <AppBar position="static" color="primary">
              <Toolbar>
                  <Hidden mdUp>
                  <Typography variant="h6" color="inherit">
                      CareFall
                  </Typography>
                  </Hidden>
                  <Hidden smDown>
                  <ul className='desktop-nav'>
                      <li onClick={this.navigateHome} className='desktop-nav-item'>Home</li>
                      <li onClick={this.navigateRecents} className='desktop-nav-item'>Alerts</li>
                      <li onClick={this.navigateHistory} className='desktop-nav-item'>History</li>
                      <li onClick={this.navigateProfile} className='desktop-nav-item'>People</li>
                  </ul>
                  </Hidden>
              </Toolbar>
          </AppBar>
          <Switch>
              <Route exact path="/recentAlerts" component={RecentAlerts}/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/history" component={History}/>
          </Switch>
          <NavBar/>
      </div>
    );
  }
}

export default withRouter(App);
