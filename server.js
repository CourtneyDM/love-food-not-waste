// Import Dependencies
const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const routes = require( './routes' );

// Configure server to use Express
const app = express();

// Configure PORT
const PORT = process.env.PORT || 3001;

// Setup connection to MongoDB for Heroku
const databaseUri = 'mongodb://localhost:27017/wasteNot';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://heroku_xsqdq0bn:ovl3l58hlmo7tt72lo4sdm8gnm@ds129811.mlab.com:29811/heroku_xsqdq0bn';

if ( MONGODB_URI ) {
    mongoose.connect( MONGODB_URI, { useNewUrlParser: true } );
}
else {
    mongoose.connect( databaseUri, { useNewUrlParser: true } );
}

// Validate connection to database
const db = mongoose.connection;
db.on( 'error', err => console.log( `Mongoose error: ${err}` ) );
db.once( 'open', () => console.log( 'Mongoose connection successful.' ) );

// Configure Body-Parser
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

// Serve Static Pages on Heroku
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}

// Configure routes
app.use( routes );

// Start Server...
app.listen( PORT, () => console.log( `Express server listening on PORT ${PORT}` ) );