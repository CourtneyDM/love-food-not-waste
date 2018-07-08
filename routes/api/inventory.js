// Routes for handling API calls to the database
const router = require( 'express' ).Router();
const inventoryController = require( '../../controllers/inventoryController' );

// Matches with /api/inventory
router.route( '/' )
    .get( inventoryController.findAll )
    .post( inventoryController.create );

// Matches with /api/inventory/:id
router
    .route( '/:id' )
    .delete( inventoryController.remove );

module.exports = router;