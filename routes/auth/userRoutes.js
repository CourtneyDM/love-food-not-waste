// const cors = require( 'cors' );
const LocalStrategy = require( 'passport-local' ).Strategy;
const passport = require( 'passport' );
const router = require( 'express' ).Router();
const User = require( '../../models/user' );
const bcrypt = require( 'bcrypt-nodejs' );


// Create local strategy
passport.use( new LocalStrategy(
    { usernameField: 'email' },
    ( email, password, done ) => {
        User.findOne( { username: email }, ( err, user ) => {
            if ( err ) { throw err; }
            if ( !user ) {
                return done( null, false, { message: 'Invalid username.\n' } );
            }
            if ( !bcrypt.compareSync( password, user.password ) ) {
                return done( null, false, { message: 'Invalid password.' } );
            }
            return done( null, user );
        } );
    }
) );

// Tell passport how to serialize the user
passport.serializeUser( ( user, done ) => {
    done( null, user.id );
} );

passport.deserializeUser( ( id, done ) => {
    User.findById( id, ( err, user ) => {
        done( err, user );
    } );
} );

router.get( '/users', ( req, res ) => {
    User.find().then( users => {
        return res.json( users );
    } )
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
        req.login( user, err => {
            if ( err ) { return next( err ); }
            return res.redirect( '/authrequired' );
        } );
    } )( req, res, next );
} );

// Authenticate session ID
router.get( '/authrequired', ( req, res ) => {
    if ( req.isAuthenticated() ) {
        return res.send( { user: req.user, sessionID: req.sessionID } );
    }
    else {
        return res.send( 'User cannot be authenticated' );
    }
} );

// Create signup route
router.post( '/register', ( req, res ) => {
    const newUser = new User( req.body );
    return User.findOne( { username: newUser.username }, ( err, user ) => {
        if ( err ) {
            res.status( 500 ).send( 'error occured' );
        }
        else
            if ( user ) {
                res.status( 500 ).send( 'User already exists.' );
            }
            else {
                // Encrypt user password and create new user
                newUser.createUser( newUser, ( err, user ) => {
                    if ( err ) { throw err; }
                    console.log( user );
                    res.json( user );
                } );
            }
    } );
} );

module.exports = router;


// TODO: Implement Google Login Later
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

