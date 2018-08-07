// Import Dependencies - Love Food Not Waste
const router = require( 'express' ).Router();
const foodController = require( '../../controllers/foodController' );

// Routes to /api/foods
router.route( '/' )
    .get( foodController.findAll )
    .post( foodController.create );

// Routes to /api/food:item
router.route( '/:item' )
    .get( foodController.findAll )
    .post( foodController.create );

// Export Food Router Routes
module.exports = router;