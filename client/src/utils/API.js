require( 'dotenv' ).config();
const unirest = require( 'unirest' );

const X_MASHAPE_KEY = 'jQfnjagUlOmsh6jakRb6pEeFbK99p1ebYpGjsnhQRHifZupNG2';

const SPOONACULAR_HOST = 'spoonacular-recipe-food-nutrition-v1.p.mashape.com';

const query = 'big mac';
const UPC = '013409515372';

const NUTRITIONIX_HOST = 'nutritionix-api.p.mashape.com';



// Search for a given food item
// unirest.get( `https://trackapi.nutritionix.com/v2/search/instant?query=${query}` )
//     .header( 'x-app-key', 'e52dae96ffda6839ead180a00dced399' )
//     .header( 'x-app-id', '0d95c6f7' )
//     .end( function ( response ) {
//         // console.log( result.status, result.headers, result.body );
//         console.log( response.body /*response.data, response.body */ );
//     } );

unirest.get( `https://nutritionix-api.p.mashape.com/v1_1/item?upc=${UPC}` )
    .header( "X-Mashape-Key", X_MASHAPE_KEY )
    .header( "X-Mashape-Host", NUTRITIONIX_HOST )
    .end( function ( result ) {
        console.log( result.status, result.headers, result.body );
    } );
