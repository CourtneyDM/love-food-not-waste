// Define routes to be used by Express server - Love Food Not Waste
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

// Export Router Routes
module.exports = router;