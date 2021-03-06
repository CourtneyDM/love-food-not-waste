// Use  Environment Variables
require( 'dotenv' ).config();

// Import Dependencies - Love Food Not Waste
const express = require( 'express' );
const path = require( 'path' );
const uuid = require( 'uuid/v4' );
const session = require( 'express-session' );
const FileStore = require( 'session-file-store' )( session );
const bodyParser = require( 'body-parser' );
// const passport = require( 'passport' );
const mongoose = require( 'mongoose' );

// Define Server PORT
const PORT = process.env.PORT || 5000;

// Import Configs
// const passportConfig = require( './config/passport-config' );

// Import Routes
// const authRoutes = require( './routes/authentication/authRoutes' );
const apiRoutes = require( './routes/api' );

// Configure and Setup Connections for MongoDB
const dbURI = process.env.dbURI;
const MONGODB_URI = process.env.MONGODB_URI;
if ( MONGODB_URI ) {
    mongoose.connect( MONGODB_URI, { useNewUrlParser: true } );
    console.log( 'Connected to mLab database' );
}
else {
    mongoose.connect( dbURI, { useNewUrlParser: true } );
    console.log( 'Connected to local MongoDB database' );
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
// app.use( session( {
//     genid: ( req ) => {
//         console.log( 'Inside Session middleware genid function' );
//         console.log( `Request sessionID object from client: ${req.sessionID}` );
//         return uuid(); //Use UUID for session IDs
//     },
//     store: new FileStore(),
//     secret: process.env.cookieKey,
//     resave: true,
//     saveUninitialized: true
// } ) );

// Add/Configure Passport Middleware
// app.use( passport.initialize() );
// app.use( passport.session() );

// Configure Server for Static React Routes on Heroku
if ( process.env.NODE_ENV === "production" ) {
    app.use( express.static( path.resolve( __dirname, "../client/build" ) ) );
}

// Configure Routes
// app.use( '/auth', authRoutes );
app.use( '/api', apiRoutes );

// Get React files if no other route is found
app.get( '*', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, '../client/build', 'index.html' ) );
} );

// Start Express Server
app.listen( PORT, () => { console.log( `Server now listening on PORT ${PORT}...` ) } );