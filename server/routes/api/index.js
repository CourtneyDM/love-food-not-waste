// Define routes to be used by Express server - Love Food Not Waste
const path = require( 'path' );
const router = require( 'express' ).Router();
const chatRoutes = require( './chatRoutes' );
const foodRoutes = require( './foodRoutes' );
const inventoryRoutes = require( './inventoryRoutes' );
const recipeRoutes = require( './recipeRoutes' );

// Routes for Saved Chats -> /api/chats
router.use( '/chats', chatRoutes );

// Routes for Saved Foods -> /api/foods
router.use( '/foods', foodRoutes );

// Routes for Saved Inventories -> /api/inventory
router.use( '/inventory', inventoryRoutes );

// Routes for Saved Recipes -> /api/recipes
router.use( '/recipes', recipeRoutes );

// Export Router Routes
module.exports = router;