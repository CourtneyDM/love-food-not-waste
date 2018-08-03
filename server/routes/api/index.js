// Define routes to be used by Express server - Love Food Not Waste
const path = require( 'path' );
const router = require( 'express' ).Router();
const chatRoutes = require( './chatRoutes' );
const foodRoutes = require( './foodRoutes' );
const inventoryRoutes = require( './inventoryRoutes' );
const userRoutes = require( './userRoutes' );

// Routes for Saved Chats -> /api/chats
router.use( '/chats', chatRoutes );

// Routes for Saved Foods -> /api/foods
router.use( '/foods', foodRoutes );

// Routes for Saved Inventories -> /api/inventory
router.use( '/inventory', inventoryRoutes );

// Routes for Saved Users -> /api/users
router.use( '/users', userRoutes );

// If no API routes are hit, send the React app pages
router.use( function ( req, res ) {
    res.sendFile( path.join( __dirname, '../../client/build/index.html' ) );
} );

// Export Router Routes
module.exports = router;