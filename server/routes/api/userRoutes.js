// Import Dependencies - Love Food Not Waste
const router = require( 'express' ).Router();
const User = require( '../../models/userModel' );

// GET route to log session ID on server console
router.get( '/', ( req, res ) => {
    console.log( `Current sessionID: ${req.sessionID}` );
    return res.send( `Current sessionID: ${req.sessionID}` );
} );

// GET route to return all users in database
router.get( '/data', ( req, res ) => {
    User.find().then( users => {
        return res.json( users );
    } );
} );

module.exports = router;