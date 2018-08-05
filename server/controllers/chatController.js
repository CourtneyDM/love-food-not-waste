// Import Chat Model - Love Food Not Waste
const db = require( '../models' );

// Export Chat Controller
module.exports = {
    // Retrieve All Chats from Database
    findAll: ( req, res ) => {
        db.Chat
            .find( req.query )
            .sort( { date: 1 } )
            .then( res => res.set( 'Content-Type', 'application/json' ) )
            .then( dbModel => res.json( { 'data': dbModel } ) )
            .catch( error => res.status( 422 ).json( error ) );
    },
    // Add Chat to Database
    create: ( req, res ) => {
        console.log( `Checking request: ${req.body.post}` );
        res.end();
        // db.Chat
        //     .create( req.body )
        // then(res => res.set('Content-Type', 'application/json'))
        //     .then( dbModel => res.json( dbModel ) )
        //     .catch( error => res.status( 422 ).json( error ) );
    }
};