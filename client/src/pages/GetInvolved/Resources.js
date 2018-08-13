import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';
import MapComponent from '../../components/Maps/MapComponent';
import './Resources.css';

let current_position;

if ( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition( position => {
        current_position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
    } );
}
else {
    current_position = {
        lat: 32.7767,
        lng: -96.7970
    }
}
export class Resources extends Component {

    componentDidMount() {
        this.delayedShowMarker()
    }
    delayedShowMarker = () => {
        setTimeout( () => {
            this.setState( { isMarkerShown: true } )
        }, 3000 )
    }

    handleMarkerClick = () => {
        this.setState( { isMarkerShown: false } )
        this.delayedShowMarker()
    }

    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        id='test'
                        header='Dallas Area Food Banks'>
                        <table id="foodBanks">
                            <thead>
                                <tr>
                                    <th>Food Bank</th>
                                    <th>Address</th>
                                    <th>Website</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>North Texas Food Bank</td>
                                    <td>4500 S Cockrell Hill Rd, Dallas, TX 75236</td>
                                    <td>(214) 330-1396</td>
                                    <td><a href='https://www.ntfb.org/'>View</a></td>
                                </tr>
                                <tr>
                                    <td>Resource Food Pantry</td>
                                    <td>2701 Reagan St, Dallas, TX 75219</td>
                                    <td>(214) 330-1396</td>
                                    <td><a href='http://www.myresourcecenter.org/'>View</a></td>
                                </tr>
                                <tr>
                                    <td>Pleasant Grove Pantry</td>
                                    <td>1331 Baywood St, Dallas, TX 75217</td>
                                    <td>(214) 505-1928</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Our Community Pantry</td>
                                    <td>1502 Pennsylvania Ave, Dallas, TX 75215</td>
                                    <td>(214) 367-3131</td>
                                    <td><a href='https://www.ntfb.org/ourcommunitypantry/'>View</a></td>
                                </tr>
                                <tr>
                                    <td>CrossRoads Community Services</td>
                                    <td>1822 Young St, Dallas, TX 75201</td>
                                    <td>(214) 560-2511</td>
                                    <td><a href='http://www.ccsdallas.org/'>View</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </CardBasic>
                </CardDeck>
                <MapComponent
                    containerElement={ <div style={ { height: `400px` } } /> }
                    mapElement={ <div style={ { height: `100%` } } /> }
                    isMarkerShown={ this.state.isMarkerShown }
                />
            </div >
        );
    };
};