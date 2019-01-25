import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
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

    navigateToPage1 = () =>{
        this.props.history.push({
            pathname: '/page',
        });
        console.log("changed")
    }
    navigateHome = () =>{
        this.props.history.push({
            pathname: '/',
        });
        console.log("changed")
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
                <BottomNavigationAction onClick={this.navigateToPage1} label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction onClick={this.navigateHome}  label="Recents" icon={<Home />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavBar));