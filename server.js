// Import Dependencies
const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const routes = require( './routes' );

// Configure server to use Express
const app = express();

// Configure PORT
const PORT = process.env.PORT || 3001;

// Setup connection to MongoDB
const databaseUri = 'mongodb://localhost:27017/wasteNot';

if ( process.env.MONGODB_URI ) {
    mongoose.connect( process.env.MONGODB_URI );
}
else {
    mongoose.connect( databaseUri, { useNewUrlParser: true } );
    // mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/wasteNot', { useNewUrlParser: true } );
}

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