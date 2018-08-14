// Import Inventory Model - Love Food Not Waste
const db = require( '../models' );

// Export Inventory Controller
module.exports = {
    // Retrieve All Inventory Items from Database
    findAll: ( req, res ) => {
        let queryUser = req.query.user;
        console.log( queryUser );
        db.Inventory
            .find( { user: queryUser } )
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
    // Find Inventory Item by ID
    findById: ( req, res ) => {
        db.Inventory
            .findById( req.params.id )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    // Update Inventory Item in Database
    update: ( req, res ) => {
        db.Inventory
            .findOneAndUpdate( { _id: req.params.id }, req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
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