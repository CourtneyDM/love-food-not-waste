// Import Dependencies - Love Food Not Waste
const router = require( 'express' ).Router();
const recipeController = require( '../../controllers/recipeController' );


// Routes to /api/recipes
router.route( '/' )
    .get( recipeController.findAll )
    .post( recipeController.create );

// Routes to /api/recipes/:id
router.route( '/:id' )
    .get( recipeController.findById )
    .put( recipeController.update )
    .delete( recipeController.remove );

// Export Food Router Routes
module.exports = router;