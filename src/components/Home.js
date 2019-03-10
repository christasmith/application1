import React, {Component} from 'react';
import '../css/App.css';
import logo from '../imgs/logo.png'
import family from '../imgs/oldp.jpg'
import {withRouter} from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";
import Hidden from "@material-ui/core/Hidden/Hidden";

class Home extends Component {

    navigateProfile = () =>{
        this.props.history.push({
            pathname: '/profile',
        });
        console.log("profile")
    }
    navigateRecents = () =>{
        this.props.history.push({
            pathname: '/recentAlerts',
        });
        console.log("recentAlerts")
    }

    render() {
        return (
            <div className="Home">
                <Hidden smDown>
                    <h1 className='App-Title'> Welcome to <span className='App-Title-colour'> CareFall</span> </h1>
                </Hidden>
                <Hidden mdUp>
                <img className='App-logo' src={logo}/>
                </Hidden>
            </div>
        );
    }
}

export default withRouter(Home);
