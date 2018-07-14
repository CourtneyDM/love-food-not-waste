const cors = require( 'cors' );
const passport = require( 'passport' );
const router = require( 'express' ).Router();
const User = require( '../../models/user' );

router.get( '/', ( res, req ) => { console.log( 'here' ) } );

router.get( '/profile', ( req, res ) => {
    console.log( req.body );
} );

// Receive form details from user
router.post( '/signup', ( req, res ) => {
    const newUser = new User( req.body );
    console.log( req.body.email );
    // Encrypt user password and create new user

    newUser.createUser( newUser, function ( err, user ) {
        if ( err ) { throw err; }
        console.log( user );
    } );
} );

// Authenticate with Google
router.get( '/google', cors(), passport.authenticate( 'google', {
    scope: [ 'profile' ]
} ) );

// Callback for Google redirection route
router.get( '/google/redirect', cors(), passport.authenticate( 'google' ), ( req, res ) => {
    // Send the suer data back to the brower
    console.log( 'Handling Google redirect...' );
    res.send( req.user );
    // res.redirect('/profile/');
} );

module.exports = router;