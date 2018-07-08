// Import Dependencies
const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const routes = require( './routes' );

// Configure server to use Express
const app = express();

// Configure PORT
const PORT = process.env.PORT || 3001;

// Configure Body-Parser
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

// Serve Static Pages on Heroku
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}

// Configure routes
app.use( routes );

// Setup connection to MongoDB
// mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/wasteNot', { useNewUrlParser: true } );
mongoose.connect( 'mongodb://localhost:27017/wasteNot', { useNewUrlParser: true } );

// Start Server...
app.listen( PORT, () => console.log( `Express server listening on PORT ${PORT}` ) );