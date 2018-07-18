const router = require( 'express' ).Router();
const inventoryRoutes = require( './inventory' );
const foodRoutes = require( './food' );
const chatRoutes = require('./chat');

// Routes to Inventory
router.use( '/inventory', inventoryRoutes );

//Routes to Food
router.use( '/food', foodRoutes );

//Routes to Chat
router.use('/chat', chatRoutes);

module.exports = router;