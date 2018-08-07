// Import Chat Model - Love Food Not Waste
const db = require( '../models' );

// Export Chat Controller
module.exports = {
    // Retrieve All Chats from Database
    findAll: ( req, res ) => {
        db.Chat
            .find( req.query )
            .sort( { dateCreated: 1 } )
            .then( dbModel => res.json( { 'data': dbModel } ) )
            .catch( error => res.status( 422 ).json( error ) );
    },
    // Add Chat to Database
    create: ( req, res ) => {
        db.Chat
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    },
    // Find Chat by ID
    findById: ( req, res ) => {
        db.Chat
            .findById( req.params.id )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    // Update Chat in Database
    update: ( req, res ) => {
        db.Chat
            .findOneAndUpdate( { _id: req.params.id }, req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    // Remove Chat Message from Database
    remove: ( req, res ) => {
        console.log( req.params.id );
        db.Chat
            .findById( { _id: req.params.id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    }
};