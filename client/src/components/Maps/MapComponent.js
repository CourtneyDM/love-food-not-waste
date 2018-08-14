import React from 'react';
import { compose, withProps, withStateHandlers, withState } from 'recompose';
import { GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

// Static positions for food bank resources
const NTFB = { lat: 32.6889959, lng: -96.8927529 };
const RFP = { lat: 32.8078581, lng: -96.8159636 };
const PGP = { lat: 32.7347708, lng: -96.6798481 };
const OCP = { lat: 32.7588686, lng: -96.7784619 };
const CRCS = { lat: 32.7782536, lng: -96.7961399 };

// Google Maps Component
const MapWithInfoWindow = compose(
    // Props for the Google Maps higher-order component
    withProps( {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCYUCuWg5hDZOmPFegBDjf5rDE6SAqofMc&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={ { height: `100%` } } />,
        containerElement: <div style={ { height: `400px` } } />,
        mapElement: <div style={ { height: `100%` } } />,
    } ),
    // Wrapper helper for state changes
    withStateHandlers( () => ( {
        isOpenNTFB: false,
        isOpenRFP: false,
        isOpenPGP: false,
        isOpenOCP: false,
        isOpenCRCS: false
    } ), {
            // Method to check the visibility state of each marker
            onToggleNTFB: ( { isOpenNTFB } ) => () => (
                { isOpenNTFB: !isOpenNTFB } ),
            onToggleRFP: ( { isOpenRFP } ) => () => (
                { isOpenRFP: !isOpenRFP } ),
            onTogglePGP: ( { isOpenPGP } ) => () => (
                { isOpenPGP: !isOpenPGP } ),
            onToggleOCP: ( { isOpenOCP } ) => () => (
                { isOpenOCP: !isOpenOCP } ),
            onToggleCRCS: ( { isOpenCRCS } ) => () => (
                { isOpenCRCS: !isOpenCRCS } )
        } ),
    withScriptjs,
    withGoogleMap
)( props =>
    <GoogleMap
        defaultZoom={ 11 }
        defaultCenter={ { lat: 32.7767, lng: -96.7970 } } >
        <Marker
            defaultTitle={ 'North Texas Food Bank' }
            position={ NTFB }
            onClick={ props.onToggleNTFB } >
            { props.isOpenNTFB && <InfoWindow onCloseClick={ props.onToggleNTFB }>
                <address className={ 'map_marker' }>
                    <h4>North Texas Food Bank</h4>
                    4500 S. Cockerill Hill Rd.<br />
                    Dallas, Texas 75236<br />
                    (214) 330-1396<br />
                    <a
                        href={ 'https://www.ntfb.org/' }
                        target={ '_blank' }>https://www.ntfb.org</a>
                </address>
            </InfoWindow> }
        </Marker>
        <Marker
            defaultTitle={ 'Resource Food Pantry' }
            position={ RFP }
            onClick={ props.onToggleRFP } >
            { props.isOpenRFP && <InfoWindow onCloseClick={ props.onToggleRFP }>
                <address className={ 'map_marker' }>
                    <h4>Resource Food Pantry</h4>
                    2701 Reagan St.<br />
                    Dallas, Texas 75219<br />
                    (214) 528-0144< br />
                    <a
                        href={ 'http://www.myresourcecenter.org/' }
                        target={ '_blank' }>
                        http://www.myresourcecenter.org</a>
                </address>
            </InfoWindow> }
        </Marker>
        <Marker
            defaultTitle={ 'Pleasant Grove Pantry' }
            position={ PGP }
            onClick={ props.onTogglePGP } >
            { props.isOpenPGP && <InfoWindow onCloseClick={ props.onToggleOpenPGP }>
                <address className={ 'map_marker' }>
                    <h4>Pleasant Grove Pantry</h4>
                    1331 Baywood St.<br />
                    Dallas, Texas 75217<br />
                    (214) 505-1928<br />
                </address>
            </InfoWindow> }
        </Marker>
        <Marker
            defaultTitle={ 'Our Community Pantry' }
            position={ OCP }
            onClick={ props.onToggleOCP }       >
            { props.isOpenOCP && <InfoWindow onCloseClick={ props.onToggleOpenOCP }>
                <address className={ 'map_marker' }>
                    <h4>Our Community Pantry</h4>
                    1502 Pennsylvania Ave.<br />
                    Dallas, Texas 75215<br />
                    (214) 376-3131
                </address>
            </InfoWindow> }
        </Marker>
        <Marker
            defaultTitle={ 'CrossRoads Community Services' }
            position={ CRCS }
            onClick={ props.onToggleCRCS } >
            { props.isOpenCRCS && <InfoWindow onCloseClick={ props.onToggleOpenCRCS }>
                <address className={ 'map_marker' }>
                    <h4>CrossRoads Community Services</h4>
                    1822 Young St.<br />
                    Dallas, Texas 75201<br />
                    (214) 560-2511<br />
                    <a
                        href={ 'http://www.ccsdallas.org/' }
                        target={ '_blank' }>
                        www.cscdallas.org</a>
                </address>
            </InfoWindow> }
        </Marker>
    </GoogleMap>
);

export default MapWithInfoWindow;