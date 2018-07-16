// Routes for handling API calls to the database
const router = require( 'express' ).Router();
const foodController = require( '../../controllers/foodController' );

// Matches with /api/inventory
router.route( '/' )
    .get( foodController.findAll )
    .post( foodController.create );

module.exports = router;