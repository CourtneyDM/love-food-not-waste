const passport = require( 'passport' );
const GoogleStrategy = require( 'passport-google-oauth20' );
const LocalStrategy = require( 'passport-local' );
const keys = require( './keys' );
const User = require( '../models/user' );

// Request cookie from the client
passport.serializeUser( ( user, done ) => {
    done( null, user.id );
} );

// Handle cookie received from client
passport.deserializeUser( ( id, done ) => {
    User.findById( id ).then( ( user ) => {
        done( null, user )
    } );
} );

// Configure Google OAuth Strategy
passport.use(
    new GoogleStrategy( {
        // options for Google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, ( accessToken, refreshToken, profile, done ) => {
        // Check if user exists in our database
        User.findOne( {
            googleId: profile.id
        } ).then( currentUser => {
            if ( currentUser ) {
                // Already have the use
                console.log( `Current user is ${currentUser}` );
                done( null, currentUser );
            }
            else {
                // Create new user
                new User( {
                    username: profile.displayName,
                    googleId: profile.id
                } ).save().then( ( newUser ) => {
                    console.log( `Created user: ${newUser}` );
                    done( null, newUser );
                } );
            }
        } );
    } ) );

// Configure Local Strategy
passport.use( new LocalStrategy( ( username, password, done ) => {
    User.findOne( { username: username }, ( err, user ) => {
        if ( err ) { return done( err ); }
        if ( !user ) { return done( null, false ); }
        if ( !user.verifyPassword( password ) ) { return done( null, false ); }
        return done( null, user );
    } );
} ) );