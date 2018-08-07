// Import Dependencies - Love Food Not Waste
const router = require( 'express' ).Router();
const inventoryController = require( '../../controllers/inventoryController' );

// Routes to /api/inventory
router.route( '/' )
    .get( inventoryController.findAll )
    .post( inventoryController.create );


// Routes to /api/inventory/:id
router.route( '/:id' )
    .get( inventoryController.findById )
    .put( inventoryController.update )
    .delete( inventoryController.remove );

// Export Inventory Router Routes
module.exports = router;