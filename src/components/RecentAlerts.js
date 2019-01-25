import React, {Component} from 'react';
import '../css/App.css';
import List from "@material-ui/core/List/List";
import Paper from "@material-ui/core/Paper/Paper";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Typography from "@material-ui/core/Typography/Typography";
import Delete from '@material-ui/icons/Delete';
import {getRecents} from "../utils/apiReq";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Chip from "@material-ui/core/Chip/Chip";
import Error from '@material-ui/icons/Error';
import care from '../care.png'


class RecentAlerts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alertList: null,
            hasAlerts: false,
        }
    }

    componentDidMount(){
        this.mounted = true;
        this.callbackend()
    }

    handleDismiss = () => {
        console.log("hadlei")
    }

    callbackend = () => {
        getRecents().then(response => {
            this.setState({
                hasAlerts:true,
                alertList: response,
            });
        })
    }

    render() {
        let recents = this.state.alertList

        return (
            <div className="Page">
                <h1 className='App-Title'> Recent<span className='App-Title-colour'> Fall</span> Alerts</h1>
                {/*<img className='App-logo' src={care}/>*/}

                {!this.state.hasAlerts && <CircularProgress className='progress' />}

                {!this.state.hasAlerts.size === 0 && <h1> No alerts</h1>}

                {this.state.hasAlerts &&
                <Paper className='paper-alert-holder'>
                    <List className='list-scrollable'>
                        {recents.map((alert) =>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar> <Error> </Error></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Fall Alert"
                                              secondary={
                                                  <React.Fragment>
                                                      <Typography component="span" className='inline' color="textPrimary">
                                                      </Typography>{'Date/time :'+ alert.timestamp}
                                                      <Typography component="span" className='inline' color="textPrimary">
                                                      </Typography>{'Location :'+ alert.location}

                                                  </React.Fragment>
                                              }
                                />
                                <Chip
                                    key='0'
                                    icon={Delete}
                                    label='Dismiss'
                                    onDelete={this.handleDismiss}
                                />
                            </ListItem>
                        )}
                    </List>
                </Paper>
                }
            </div>
        );
    }
}

export default (RecentAlerts);
