// Routes for handling API calls to the database
const router = require( 'express' ).Router();
const foodController = require( '../../controllers/foodController' );

// Matches with /api/food
router.route( '/' )
    .get( foodController.findAll )
    .post( foodController.create );

router.route( '/:item' )
    .get( foodController.findAll )
    .post( foodController.create );

// // Routes to /api/inventory
// router.route( '/' )
//     .get( inventoryController.findAll )
//     .post( inventoryController.create );

// // Matches with /api/inventory/:id
// router
//     .route( '/:id' )
//     .delete( inventoryController.remove );

module.exports = router;