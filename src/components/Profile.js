import React, {Component} from 'react';
import '../css/App.css';
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";
import List from "@material-ui/core/List/List";
import lady from "../imgs/ladyA.jpg"
import {getPatients} from "../utils/apiReq";

const styles = {
    root: {
        width: '100%',
    },
    inline: {
        display: 'inline',
    }
}


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: null,
            hasPatients: false,
        }
    }

    componentDidMount() {
        this.callbackend()
    }

    callbackend = () => {
        getPatients().then(response => {
            this.setState({
                hasPatients: true,
                patients: response,
            });
        })
    }

    render() {

        let patients = this.state.patients;
        if(this.state.hasPatients){
            return (
                <div>
                    <h1 className='App-Title'> People </h1>
                    <p> This page shows the list of users added to your system, which you are <span
                        className='App-Title-colour'> actively monitoring: </span></p>
                    {patients.map((patient) =>
                        <List className={styles.root}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={lady}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={"Name : "+ patient.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography component="span" className={styles.inline} color="textPrimary">
                                                Relation:
                                            </Typography>
                                            {patient.relation}

                                            <Typography component="span" className={styles.inline} color="textPrimary">
                                                Location Name:
                                            </Typography>
                                            {patient.locationName}
                                            <Typography component="span" className={styles.inline} color="textPrimary">
                                                Underlying Medicical Conditions:
                                            </Typography>
                                            {patient.conditions}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    )}
                </div>
            )
        }
        return (
            <div>
            <h1 className='App-Title'> People </h1>
            <p> This page shows the list of users added to your system, which you are
                <span className='App-Title-colour'> actively monitoring: </span>
            </p>
        </div>)

    }
}

export default (Profile);
