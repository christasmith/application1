import React, {Component} from 'react';
import '../css/App.css';
import {GoogleMap} from "./GoogleMap";


class Location extends Component {


    render() {
        return (
            <div className="Page">
                <h1 className='App-Title'> My Locations </h1>
                <GoogleMap></GoogleMap>
            </div>
        );
    }
}

export default (Location);
