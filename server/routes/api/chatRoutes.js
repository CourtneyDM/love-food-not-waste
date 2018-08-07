// Import Dependencies - Love Food Not Waste
const router = require( 'express' ).Router();
const chatController = require( '../../controllers/chatController' );

// Routes to /api/chats
router.route( '/' )
    .get( chatController.findAll )
    .post( chatController.create );

// Routes to /api/chats/:id
router.route( '/:id' )
    .get( chatController.findById )
    .put( chatController.update )
    .delete( chatController.remove );

// Export Chat Router Routes
module.exports = router;