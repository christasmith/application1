import React, {Component} from 'react';
import '../css/App.css';
import Button from "@material-ui/core/Button/Button";
import logo from '../logo.png'
import family from '../oldp.jpg'
import {withRouter} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";


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
                {/*<h1 className='App-Title'> Care<span className='App-Title-colour'>Fall </span> </h1>*/}
                <img className='App-logo' src={logo}/>
                <img className='family-image' src={family}/>
                <Typography component="p">

                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
            </div>
                );
    }
}

export default withRouter(Home);
