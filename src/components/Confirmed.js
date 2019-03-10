import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import CheckCircle from '@material-ui/icons/CheckCircle';

class Confirmed extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <h1 className='App-Title'> YOU HAVE CONFIRMED A <span className='App-Title-colour'> FALL EVENT</span> </h1>
                <CheckCircle/>
                <p> Fall location : {this.props.alert.location}</p>
                <p> Alert Stage Confirmed : {this.props.alert.alertStage}</p>
                <p> Time fall occured : {this.props.alert.timeStamp}</p>
                <p> Time confirmed : {this.props.alert.timeStamp}</p>
                <p> This will be logged in your history. You can view this on the history tab</p>
            </div>
        )

    }
}

export default withRouter(Confirmed);

