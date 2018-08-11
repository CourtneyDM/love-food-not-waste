// Routes for handling API calls to the database
const router = require( 'express' ).Router();
const chatController = require( '../../controllers/chatController' );

// Routes to /api/chat
router.route( '/' )
    .get( chatController.findAll )
    .post( chatController.create );


module.exports = router;