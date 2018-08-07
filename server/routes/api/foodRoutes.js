// Import Dependencies - Love Food Not Waste
const router = require( 'express' ).Router();
const foodController = require( '../../controllers/foodController' );

// Routes to /api/foods
router.route( '/' )
    .get( foodController.findAll )
    .post( foodController.create );

// Routes to /api/food/:id
router.route( '/:id' )
    .get( foodController.findAll )
    .put( foodController.update )
    .delete( foodController.remove );

// Export Food Router Routes
module.exports = router;