import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component{

    state = {
        showingInfoWindow: true,
        activeMarker: {}
    };

    // When marker is clicked, show the info window
    onMarkerClick = (props, marker, e) =>
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true
        });

    render(){
        return(
            <Map className="google-map" google={this.props.google} zoom={12} initialCenter={{lat: 51.2362, lng: -0.631027}}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                        position={{lat: 51.2362, lng: -0.631027}}/>
                <InfoWindow marker={this.state.activeMarker}  visible={this.state.showingInfoWindow}>
                    <div>
                        <p>{"Home"}</p>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCpevTWJipvSC2mEfdFMtXVdf0c0x3dqWY")
})(GoogleMap)
