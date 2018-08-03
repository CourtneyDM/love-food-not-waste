// Import Inventory Model - Love Food Not Waste
const db = require( '../models' );

// Export Inventory Controller
module.exports = {
    // Retrieve All Inventory Items from Database
    findAll: ( req, res ) => {
        db.Inventory
            .find( req.query )
            .sort( { date: -1 } )
            .then( dbModel => res.json( { 'data': dbModel } ) )
            .catch( error => res.status( 422 ).json( error ) );
    },
    // Add Inventory Item to Database
    create: ( req, res ) => {
        db.Inventory
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    },
    // Remove Inventory Item from Database
    remove: ( req, res ) => {
        db.Inventory
            .findById( { _id: req.params.id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    }
};