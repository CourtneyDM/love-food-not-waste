import axios from 'axios';

export default {

    // Query Nutritionix database for food item
    getFoodDetails: query => {
        const X_APP_KEY = 'e52dae96ffda6839ead180a00dced399';
        const X_APP_ID = '0d95c6f7';
        return axios( {
            method: 'get',
            url: `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
            headers: {
                'x-app-key': X_APP_KEY,
                'x-app-id': X_APP_ID
            }
        } );
    },

    // TODO: Query Nutritionix database for upc item 
    getBarcodeDetails: query => {
        const X_APP_KEY = 'e52dae96ffda6839ead180a00dced399';
        const X_APP_ID = '0d95c6f7';
        return axios( {
            method: 'get',
            url: `https://nutritionix-api.p.mashape.com/v1_1/item?upc=${query}`,
            headers: {
                'x-app-key': X_APP_KEY,
                'x-app-id': X_APP_ID
            }
        } );
    },

    // Save a food item to inventory
    saveFoodItem: foodData => {
        console.log( 'saving to inventory...' );
        return axios.post( '/api/inventory', foodData );
    },

    getInventory: () => {
        console.log( 'getting inventory...' );
        return axios.get( '/api/Inventory' );
    },

    deleteFoodItem: id => {
        console.log( id );
        return axios.delete( '/api/inventory/' + id );
    }
}