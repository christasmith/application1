import React, {Component} from 'react';
import '../css/App.css';
import Button from "@material-ui/core/Button/Button";


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1> Fall detector </h1>
                <div className='Button-holder'>
                    <Button variant="contained" className="button" >Default</Button>
                    <Button variant="contained" className="button" >Default</Button>
                    <Button variant="contained" className="button" >Default</Button>
                </div>
            </div>
        );
    }
}

export default (Home);
