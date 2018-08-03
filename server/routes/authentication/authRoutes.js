// Import Dependencies - Love Food Not Waste
const passport = require( 'passport' );
const router = require( 'express' ).Router();
const User = require( '../../models/userModel' );

// Login GET route
router.get( '/login', ( req, res ) => {
    console.log( 'Inside the GET /login callback' );
    console.log( `Current Session ID: ${req.sessionID}` );
    return res.send( `User: ${req.user}, Session ID: ${req.sessionID}` );
} );

// Login POST route
router.post( '/login', ( req, res, next ) => {
    // Use Local Strategy to authenticate user
    passport.authenticate( 'local', ( error, user, info ) => {
        console.log( 'Inside POST /login authenticate route' );
        if ( info ) { return res.send( { message: info.message } ); }
        if ( error ) { console.log( `Error: ${error} ` ); }
        if ( !user ) { return res.redirect( '/login' ); }

        req.logIn( user, error => {
            if ( error ) { return next( error ); }
            return res.redirect( '/auth/authrequired' );
        } );
    } )( req, res, next );
} );

// Route to authenticate session ID
router.get( '/authrequired', ( req, res ) => {
    console.log( 'Inside the  GET /authrequired route' );
    if ( req.isAuthenticated() ) {
        console.log( `User authenticated: ${req.user}\n Session ID: ${req.sessionID}` );
        return res.send( {
            userID: req.user._id,
            fullname: req.user.fullname,
            username: req.user.username,
            email: req.user.email,
            member_since: req.user.userCreated,
            sessionID: req.sessionID
        } );
    }
    else {
        return res.send( { message: 'User cannot be authenticated.' } );
    }
} );

// Route to create a new user
router.post( '/register', ( req, res ) => {
    const newUser = new User( req.body );
    console.log( `newUser: ${newUser}` );
    return User.findOne( { username: newUser.username }, ( error, user ) => {
        if ( error ) {
            console.log( `Error occured: ${error}` );
            res.status( 500 ).send( `Error occurred: ${error}` );
        }
        else if ( user ) {
            console.log( 'User already exists' );
            res.send( {
                status: 500,
                message: 'User already exists.'
            } );
        }
        else {
            newUser.createUser( newUser, ( error, user ) => {
                if ( error ) { throw error; }
                console.log( user );
                res.send( {
                    userID: user._id,
                    fullname: user.fullname,
                    username: user.username,
                    email: user.email,
                    member_since: user.userCreated,
                    sessionID: req.sessionID
                } );
            } );;
        }
    } )
} );

// Route for user logout
router.get( '/logout', ( req, res ) => {
    console.log( 'Attempting to logout' );

    // Terminate session
    // req.session.destroy();
    req.logout();
    console.log( `Session ID: ${req.sessionID}` );
    return res.end();
} );

// Route to authenticate with Google
router.get( '/google', passport.authenticate( 'google', {
    scope: [ 'profile' ]
} ) );

// Callback route for Google redirection
router.get( '/google/redirect', passport.authenticate( 'google' ), ( req, res ) => {
    // Send user data back to the browser
    res.send( req.user );
} );

module.exports = router;