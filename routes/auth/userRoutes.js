// const cors = require( 'cors' );
const LocalStrategy = require( 'passport-local' ).Strategy;
const passport = require( 'passport' );
const router = require( 'express' ).Router();
const User = require( '../../models/user' );
// const axios = require( 'axios' );


// Create local strategy
passport.use( new LocalStrategy(
    ( username, password, done ) => {
        User.findOne( { username: username }, ( err, user ) => {
            // User.getUserByUsername( username, ( err, user ) => {
            if ( err ) { return done( err ); }
            if ( !user ) {
                return done( null, false, { message: 'Incorrect username.' } );
            }
            if ( !user.validPassword( password ) ) {
                return done( null, false, { message: 'Incorrect password.' } );
            }
            return done( null, user );

        } );
    } )
);

// Tell passport how to serialize the user
passport.serializeUser( ( user, done ) => {
    done( null, user.id );
} );

passport.deserializeUser( ( id, done ) => {
    newUser.getUserById( id, ( err, user ) => {
        done( err, user );
    } );
} );

// Create the login GET and POST routes
router.get( '/login', ( req, res ) => {
    console.log( `Inside GET /login callback.` );
    console.log( req.sessionID );
    return res.redirect( '/' );
} );

router.post( '/login', ( req, res, next ) => {
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

router.get( '/authrequired', ( req, res ) => {
    if ( req.isAuthenticated() ) {
        res.send( 'you hit the authentication endpoint.\n' );
    }
    else {
        res.redirect( '/' );
    }
} );

// Create signup route
router.post( '/signup', ( req, res ) => {

    const newUser = new User( req.body );
    // console.log( req.body.email );

    // Encrypt user password and create new user
    newUser.createUser( newUser, ( err, user ) => {
        if ( err ) { throw err; }
        console.log( user );
        res.send( user );
    } );
} );


// router.post( '/login',
//     passport.authenticate( 'local',
//         { successRedirect: '/', failureRedirect: '/signup' } ), ( req, res ) => {
//             res.redirect( '/profile' + req.user.username );
//         } );
// Authenticate with Google
// router.get( '/google', cors(), passport.authenticate( 'google', {
//     scope: [ 'profile' ]
// } ) );

// Callback for Google redirection route
// router.get( '/google/redirect', cors(), passport.authenticate( 'google' ), ( req, res ) => {
//     // Send the suer data back to the brower
//     console.log( 'Handling Google redirect...' );
//     res.send( req.user );
//     // res.redirect('/profile/');
// } );

module.exports = router;