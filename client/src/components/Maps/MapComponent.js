import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const NTFB = { lat: 32.6889959, lng: -96.8927529 };
const RFP = { lat: 32.8078581, lng: -96.8159636 };
const PGP = { lat: 32.7347708, lng: -96.6798481 };
const OCP = { lat: 32.7588686, lng: -96.7784619 };
const CRCS = { lat: 32.7782536, lng: -96.7961399 };

const MapComponent = compose(
    withProps( {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCYUCuWg5hDZOmPFegBDjf5rDE6SAqofMc&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={ { height: `100%` } } />,
        containerElement: <div style={ { height: `400px` } } />,
        mapElement: <div style={ { height: `100%` } } />,
    } ),
    withScriptjs,
    withGoogleMap
)( props =>
    <GoogleMap
        defaultZoom={ 12 }
        defaultCenter={ { lat: 32.7767, lng: -96.7970 } } >
        { props.isMarkerShown &&
            <Marker
                labelAnchor={ `Dallas, Texas` }
                position={ { lat: 32.7767, lng: -96.7970 } }
                onClick={ props.onMarkerClick } /> }
        { props.isMarkerShown &&
            <Marker position={ NTFB }
                onClick={ props.onMarkerClick } /> }
        { props.isMarkerShown &&
            <Marker position={ RFP }
                onClick={ props.onMarkerClick } /> }
        { props.isMarkerShown &&
            <Marker position={ PGP }
                onClick={ props.onMarkerClick } /> }
        { props.isMarkerShown &&
            <Marker position={ OCP }
                onClick={ props.onMarkerClick } /> }
        { props.isMarkerShown &&
            <Marker position={ CRCS }
                onClick={ props.onMarkerClick } /> }
    </GoogleMap>
);

export default MapComponent;