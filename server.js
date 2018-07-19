// Import NPM Modules
const express = require( 'express' );
const uuid = require( 'uuid/v4' );
const session = require( 'express-session' );
const FileStore = require( 'session-file-store' )( session );
const bodyParser = require( 'body-parser' );
const passport = require( 'passport' );
const mongoose = require( 'mongoose' );

// Configure PORT
const PORT = process.env.PORT || 3001;

// Import Routes and Configurations
const apiRoutes = require( './routes/api/' );
const userRoutes = require( './routes/auth/userRoutes' );
const keys = require( './config/keys' );

// Setup connection to MongoDB for Heroku
const databaseUri = keys.databaseURI.host;
const MONGODB_URI = process.env.MONGODB_URI || keys.mongodb.dbURI;

// Connect to MongoDB based on environment
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

// Create Express server
const app = express();

// Add & configure middleware
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( session( {
    genid: ( req ) => {
        console.log( 'Inside the Session middleware genid function' );
        console.log( `Request object sessionID from client: ${req.sessionID}` );
        return uuid();  // Use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: process.env.secret || keys.session.cookieKey,
    resave: true,
    saveUninitialized: true
} ) );

app.use( passport.initialize() );
app.use( passport.session() );

// Serve Static Pages on Heroku
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}

// Configure routes
app.use( '/api/', apiRoutes );
app.use( userRoutes );

// Start Server...
app.listen( PORT, () => console.log( `Express server listening on PORT ${PORT}` ) );