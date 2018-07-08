const router = require( 'express' ).Router();
const inventoryRoutes = require( './inventory' );

// Routes to Inventory
router.use( '/inventory', inventoryRoutes );

module.exports = router;