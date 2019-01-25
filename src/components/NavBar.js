import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {withRouter} from "react-router-dom";


const styles = {
    stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
    },
};

class NavBar extends React.Component {

    constructor (props){
        super(props)
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    navigateToLocation = () =>{
        this.props.history.push({
            pathname: '/location',
        });
        console.log("Location")
    }

    navigateHome = () =>{
        this.props.history.push({
            pathname: '/',
        });
        console.log("home")
    }
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
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.stickToBottom}
            >
                <BottomNavigationAction onClick={this.navigateToLocation} label="Location" icon={<LocationOnIcon />} />
                <BottomNavigationAction onClick={this.navigateRecents}  label="Alerts" icon={<RestoreIcon />} />
                <BottomNavigationAction onClick={this.navigateHome}  label="Home" icon={<Home />} />
                <BottomNavigationAction onClick={this.navigateProfile}  label="Profile" icon={<AccountCircle/>} />
            </BottomNavigation>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavBar));