// Import Dependencies - Love Food Not Waste
const router = require( 'express' ).Router();
const chatController = require( '../../controllers/chatController' );

// Routes to /api/chats
router.route( '/' )
    .get( chatController.findAll )
    .post( chatController.create );

// Export Chat Router Routes
module.exports = router;