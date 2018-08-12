import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox;'

const NTFB = { lat: 32.6889959, lng: -96.8927529 };
const RFP = { lat: 32.8078581, lng: -96.8159636 };
const PGP = { lat: 32.7347708, lng: -96.6798481 };
const OCP = { lat: 32.7588686, lng: -96.7784619 };
const CRCS = { lat: 32.7782536, lng: -96.7961399 };
let coordinates;

if ( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition( position => {
        coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        console.log( `Coordinates - latitude: ${coordinates.lat}, longitude: ${coordinates.lng}` );
    } );
}

const MapComponent = compose(
    withProps( {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCYUCuWg5hDZOmPFegBDjf5rDE6SAqofMc&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={ { height: `100%` } } />,
        containerElement: <div style={ { height: `400px` } } />,
        mapElement: <div style={ { height: `100%` } } />,
        center: coordinates
    } ),
    withScriptjs,
    withGoogleMap
)( props =>
    <GoogleMap
        defaultZoom={ 12 }
        defaultCenter={ { lat: 32.7767, lng: -96.7970 } }
    // defaultCenter={ props.center }

    >
        {
            props.isMarkerShown &&
            <Marker
                defaultTitle={ 'North Texas Food Bank' }
                position={ NTFB }
                onClick={ props.onMarkerClick } />
        }
        {
            props.isMarkerShown &&
            <Marker
                defaultTitle={ 'Resource Food Pantry' }
                position={ RFP }
                onClick={ props.onMarkerClick } />
        }
        {
            props.isMarkerShown &&
            <Marker
                defaultTitle={ 'Pleasant Grove Pantry' }
                position={ PGP }
                onClick={ props.onMarkerClick } />
        }
        {
            props.isMarkerShown &&
            <Marker
                defaultTitle={ 'Our Community Pantry' }
                position={ OCP }
                onClick={ props.onMarkerClick } />
        }
        {
            props.isMarkerShown &&
            <Marker
                defaultTitle={ 'CrossRoads Community Services' }
                position={ CRCS }
                onClick={ props.onMarkerClick } />
        }
    </GoogleMap >
);

export default MapComponent;
