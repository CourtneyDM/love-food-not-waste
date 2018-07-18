// Import Chat Schema
const db = require( '../models' );

module.exports = {
    // Retrieve all items from chat
    findAll: (req, res) => {

       db.Chat
            .find(req.query)
            .sort( { date: 1 } )
            .then( dbModel =>  res.json({"data":dbModel}))
            .catch( error => res.status( 422 ).json( error ) );
        
    },
     // Add an item to the inventory
     create: ( req, res ) => {
        db.Chat
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    }
}