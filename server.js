// Import NPM Modules
const express = require( 'express' );
const uuid = require( 'uuid/v4' );
const session = require( 'express-session' );
const FileStore = require( 'session-file-store' )( session );
const bodyParser = require( 'body-parser' );
const passport = require( 'passport' );
const LocalStrategy = require( 'passport-local' );
const mongoose = require( 'mongoose' );
const bycrpt = require( 'bcrypt-nodejs' );

// Import Routes and Configurations
const apiRoutes = require( './routes/api/inventory' );
const User = require( './models/user' );
const keys = require( './config/keys' );

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

// Configure Local Strategy for Passport
passport.use( new LocalStrategy(
    { usernameField: 'username' },
    ( username, password, done ) => {
        User.findOne( { username: username }, ( err, user ) => {
            if ( err ) { throw err; }
            if ( !user ) {
                return done( null, false, { message: 'Invalid username.\n' } );
            }
            if ( !bycrpt.compareSync( password, user.password ) ) {
                return done.null, false, { message: 'Invalid password.' };
            }

            return done( null, user );
        } );
    }
) );

// Tell Passport how to serialize the user
passport.serializeUser( ( user, done ) => {
    done( null, user.id );
} );

passport.deserializeUser( ( id, done ) => {
    User.findById( id, ( err, user ) => {
        done( err, user );
    } );
} );

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
    secret: 'waste not',
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
app.use( '/api/inventory', apiRoutes );

// Create the login get and post routes
app.get( '/login', ( req, res ) => {
    console.log( `Inside GET /login callback.` );
    console.log( req.sessionID );
    return res.redirect( '/' );
} );


app.get( '/users', ( req, res ) => {
    User.find().then( users => {
        res.json( users );
    } )
} );

app.post( '/login', ( req, res, next ) => {
    passport.authenticate( 'local', ( err, user, info ) => {
        if ( info ) { return res.send( info.message ); }
        if ( err ) { return next( err ); }
        if ( !user ) { return res.redirect( '/login' ); }
        req.login( user, ( err ) => {
            if ( err ) { return next( err ); }
            return res.redirect( '/authrequired' );
        } );
    } )( req, res, next );
} );

app.get( '/authrequired', ( req, res ) => {
    if ( req.isAuthenticated() ) {
        res.send( 'you hit the authentication endpoint.\n' );
    }
    else {
        // console.log( 'User unable to be authenticated' );
        res.send( 'User cannot be authenticated' );
        res.redirect( '/' );
    }
} );

// Create signup route
app.post( '/signup', ( req, res ) => {
    const newUser = new User( req.body );
    User.findOne( { username: newUser.username }, ( err, user ) => {
        if ( err ) {
            res.status( 500 ).send( 'error occured' );
        }
        else {
            if ( user ) {
                res.status( 500 ).send( 'User already exists.' );
            }
        }
    } );

    // Encrypt user password and create new user
    newUser.createUser( newUser, ( err, user ) => {
        if ( err ) { throw err; }
        // res.redirect( '/welcome' );
        console.log( user );
        res.json( { 'user': user } );
    } );
} );

// Configure PORT
const PORT = process.env.PORT || 3001;

// Start Server...
app.listen( PORT, () => console.log( `Express server listening on PORT ${PORT}` ) );