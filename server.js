// Import Module Dependencies
const bodyParser = require( 'body-parser' );
const cookieSession = require( 'cookie-session' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const passport = require( 'passport' );

// Import Routes and Configurations
const apiRoutes = require( './routes/api/inventory' );
const authRoutes = require( './routes/auth/authRoutes' );
const keys = require( './config/keys' );
const passportSetup = require( './config/passport-setup' );

// Configure server to use Express
const app = express();

// Configure PORT
const PORT = process.env.PORT || 3001;

// Setup connection to MongoDB for Heroku
const databaseUri = keys.databaseURI.host;
const MONGODB_URI = process.env.MONGODB_URI || keys.mongodb.dbURI;

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

// Configure Cookie Session
app.use( cookieSession( {
    maxAge: 24 * 60 * 60 * 1000,
    keys: [ keys.session.cookieKey ]
} ) );

// Initialize Passort
app.use( passport.initialize() );
app.use( passport.session() );

// Configure routes
app.use( '/api/inventory', apiRoutes );
app.use( '/api/user', authRoutes );

// Start Server...
app.listen( PORT, () => console.log( `Express server listening on PORT ${PORT}` ) );