import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import {withRouter} from "react-router-dom";
import Hidden from "@material-ui/core/Hidden/Hidden";


const styles = {
    stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
    },
};

class NavBar extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

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
            <Hidden mdUp>
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.stickToBottom}

            >
                <BottomNavigationAction onClick={this.navigateRecents}  label="Alerts" icon={<RestoreIcon />} />
                <BottomNavigationAction onClick={this.navigateHome}  label="Home" icon={<Home />} />
                <BottomNavigationAction onClick={this.navigateProfile}  label="People" icon={<AccountCircle/>} />
            </BottomNavigation>
            </Hidden>

        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavBar));