// Import Inventory Schema
const db = require( '../models' );

module.exports = {
    // Retrieve all items from inventory
    findAll: ( req, res ) => {
        db.Inventory
            .find( req.query )
            .sort( { date: -1 } )
            .then( dbModel =>  res.json({"data":dbModel}))
            .catch( error => res.status( 422 ).json( error ) );
    },

    // Add an item to the inventory
    create: ( req, res ) => {
        db.Inventory
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    },

    // Remove an item from inventory
    remove: ( req, res ) => {
        db.Inventory
            .findById( { _id: req.params.id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    }
}

