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
import {deleteAlert, getRecents} from "../utils/apiReq";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Chip from "@material-ui/core/Chip/Chip";
import Error from '@material-ui/icons/Error';


class RecentAlerts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alertList: null,
            hasAlerts: false,
        }
    }

    componentDidMount(){
        this.callbackend()
    }

    handleDismiss = (id) => {
        deleteAlert(id).then(function() {
                console.log("ok");
            }).catch(function() {
                console.log("error");
            });
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
                <h1 className='App-Title'> Daily<span className='App-Title-colour'> Fall</span> Alerts</h1>

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
                                <ListItemText key={alert.id} primary="Fall Alert"
                                              secondary={
                                                  <React.Fragment>
                                                      <Typography component="span" className='inline' color="textPrimary">
                                                      </Typography>{'Date/time : '+ alert.timeStamp}
                                                      <Typography component="span" className='inline' color="textPrimary">
                                                      </Typography>{'Location : '+ alert.location}
                                                      <Typography component="span" className='inline' color="textPrimary">
                                                      </Typography>{'Fall detected in room : N/A '}
                                                  </React.Fragment>
                                              }
                                />
                                <Chip
                                    icon={Delete}
                                    label='Dismiss'
                                    onDelete={() => this.handleDismiss(alert.id)}
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
