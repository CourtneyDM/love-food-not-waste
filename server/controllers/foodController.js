// Import Food Model - Love Food Not Waste
const db = require( '../models' );

// Export Food Controller
module.exports = {
    // Retrieve All Food Items from Database
    findAll: ( req, res ) => {
        let queryItem = req.query.item;
        console.log( queryItem );
        db.Food
            .find( {
                $or: [ { 'item': { $regex: queryItem, $options: 'i' } },
                { 'category': { $regex: queryItem, $options: 'i' } } ]
            } )
            .sort( { item: 1 } )
            .then( dbModel => res.json( { 'data': dbModel } ) )
            .catch( error => res.status( 422 ).json( error ) );
    },
    // Add Food Item to Database
    create: ( req, res ) => {
        db.Food
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    }
};