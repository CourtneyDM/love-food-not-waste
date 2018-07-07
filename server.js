// Import Dependencies
require( 'dotenv' ).config();

const bodyParser = require( 'body-parser' );
const express = require( 'express' );

// Configure server to use Express
const app = express();

// Configure PORT
const PORT = process.env.PORT || 3001;

// Configure Body-Parser
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

// Start Server...
app.listen( PORT, () => console.log( `Express server listening on PORT ${PORT}` ) );

console.log( process.env.REACT_APP_X_MASHAPE_KEY );

// TODO: Setup server to connect to database - MySQL? Mongoose?