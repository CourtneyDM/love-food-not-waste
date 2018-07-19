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
const routes = require( './routes );
const userRoutes = require( './routes/auth/userRoutes' );
// const keys = require( './config/keys' );

// Setup connection to MongoDB for Heroku
const databaseUri = 'mongodb://localhost:27017/wasteNot';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://heroku_xsqdq0bn:ovl3l58hlmo7tt72lo4sdm8gnm@ds129811.mlab.com:29811/heroku_xsqdq0bn';

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
    secret: process.env.secret || 'wastenotsmudallastexas',
    resave: false,
    saveUninitialized: true
} ) );

app.use( passport.initialize() );
app.use( passport.session() );

// Serve Static Pages on Heroku
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}

// Configure routes
app.use( routes );
app.use( userRoutes );

// Start Server...
app.listen( PORT, () => console.log( `Express server listening on PORT ${PORT}` ) );