// Import Recipe Model - Love Food Not Waste
const db = require( '../models' );

// Export Recipe Controller
module.exports = {
    // Retrieve All Recipe Items from Database
    findAll: ( req, res ) => {
        let queryUser = req.query.user;
        console.log( queryUser );
        db.Recipe
            .find( { user: queryUser } )
            .sort( { date: -1 } )
            .then( dbModel => res.json( { 'data': dbModel } ) )
            .catch( error => res.status( 422 ).json( error ) );
    },
    // Add Recipe Item to Database
    create: ( req, res ) => {
        db.Recipe
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    },
    // Find Recipe Item by ID
    findById: ( req, res ) => {
        db.Recipe
            .findById( req.params.id )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    // Update Recipe Item in Database
    update: ( req, res ) => {
        db.Recipe
            .findOneAndUpdate( { _id: req.params.id }, req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    // Remove Recipe Item from Database
    remove: ( req, res ) => {
        db.Recipe
            .findById( { _id: req.params.id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    }
};