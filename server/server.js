// Import Dependencies - Love Food Not Waste
const express = require( 'express' );
const uuid = require( 'uuid/v4' );
const session = require( 'express-session' );
const FileStore = require( 'session-file-store' )( session );
const bodyParser = require( 'body-parser' );
const passport = require( 'passport' );
const mongoose = require( 'mongoose' );

// Define Server PORT
const PORT = process.env.PORT || 3001;

// Import Configs
const passportConfig = require( './config/passport-config' );
const keys = require( './config/keys' );

// Import Routes
const authRoutes = require( './routes/authentication/authRoutes' );
const apiRoutes = require( './routes/api' );

// Configure and Setup Connections for MongoDB
const dbURI = keys.dbURI.host;
const MONGODB_URI = process.env.MONGODB_URI || keys.mongodb.dbURI;
if ( MONGODB_URI ) {
    mongoose.connect( MONGODB_URI, { useNewUrlParser: true } );
}
else {
    mongoose.connect( dbURI, { useNewUrlParser: true } );
}
// Validate connection to database
const db = mongoose.connection;
db.on( 'error', error => console.log( `Mongoose error: ${error}` ) );
db.once( 'open', () => console.log( 'Mongoose connection successful.' ) );

// Define Express Server
const app = express();

// Add/Configure Body Parser Middleware
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

// Add/Configure Express-Session Middleware
app.use( session( {
    genid: ( req ) => {
        console.log( 'Inside Session middleware genid function' );
        console.log( `Request sessionID object from client: ${req.sessionID}` );
        return uuid(); //Use UUID for session IDs
    },
    store: new FileStore(),
    secret: process.env.secret || keys.session.cookieKey,
    resave: true,
    saveUninitialized: true
} ) );

// Add/Configure Passport Middleware
app.use( passport.initialize() );
app.use( passport.session() );

// Configure Routes
app.use( '/auth', authRoutes );
app.use( '/api', apiRoutes );

// Start Express Server
app.listen( PORT, () => { console.log( `Server now listening on PORT ${PORT}...` ) } );