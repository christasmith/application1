import React, {Component} from 'react';
import '../css/App.css';
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";
import List from "@material-ui/core/List/List";
import lady from "../ladyA.jpg"
import grandad from "../grandad.jpeg"


    const styles = {
        root: {
            width: '100%',
        },
        inline: {
            display: 'inline',
        }
    }

class Profile extends Component {

    render() {
        return (
            <div>
                <h1 className='App-Title'> People </h1>

                <p> This page shows the list of users added to your system, which you are <span className='App-Title-colour'> actively monitoring: </span> </p>

                <List className={styles.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={lady} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Name : Shirley Smith"
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={styles.inline} color="textPrimary">
                                        Relation: Mother
                                    </Typography>
                                    <Typography component="span" className={styles.inline} color="textPrimary">
                                        Location Name: Mum's House
                                    </Typography>
                                    <Typography component="span" className={styles.inline} color="textPrimary">
                                        Underlying Medicical Conditions:
                                    </Typography>
                                    {"Broken hip, allergic to beans"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={grandad} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Name : Fred Smith"
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={styles.inline} color="textPrimary">
                                        Relation: Father
                                    </Typography>
                                    <Typography component="span" className={styles.inline} color="textPrimary">
                                        Location Name: Dads's House
                                    </Typography>
                                    <Typography component="span" className={styles.inline} color="textPrimary">
                                        Underlying Medicical Conditions:
                                    </Typography>
                                    {"Broken hip, allergic to beans"}                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default (Profile);
