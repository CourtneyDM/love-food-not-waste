const router = require( 'express' ).Router();
const inventoryRoutes = require( './inventory' );
const foodRoutes = require( './food' );
const userRoutes = require( './userRoutes' );

// Routes to Inventory
router.use( '/inventory', inventoryRoutes );

//Routes to Food
router.use( '/food', foodRoutes );

// Routes to Users
router.use( '/user', userRoutes );


module.exports = router;