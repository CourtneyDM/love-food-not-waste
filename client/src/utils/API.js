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

    // Get food from user inventory
    getInventory: query => {
        console.log( `getInventory Query: ${JSON.stringify( query )}` );
        console.log( 'getting inventory...' );
        return axios.get( `/api/inventory`, {
            params: {
                user: query
            }
        } )
    },

    // Get recipe from user inventory
    getUserRecipes: query => {
        return axios.get( '/api/recipes', {
            params: {
                user: query
            }
        } )
    },

    // Save recipe to user inventory
    saveRecipe: query => {
        console.log( `saveRecipe Query: ${JSON.stringify( query, null, 2 )}` );
        return axios.post( '/api/recipes', query );

    },
    // Get food from user inventory
    editInventory: ( id, category, item, quantity, date ) => {
        console.log( 'editing inventory...' );
        console.log( 'ID: ' + id );
        console.log( 'Update:' + quantity );
        return axios.put( '/api/inventory/' + id, {
            category: category,
            itemName: item,
            quantity: quantity,
            bestByDate: date,
            params: {
                id: id,
            }
        } )
    },

    saveNewFoodItem: foodData => {
        console.log( 'saving to inventory...' );
        return axios.post( '/api/inventory', foodData );
    },

    // Delete food item from user inventory
    deleteFoodItem: id => {
        // console.log( id );
        return axios.delete( '/api/inventory/' + id );
    },

    // Delete recipe from user inventory
    deleteRecipe: id => {
        return axios.delete( '/api/recipes/' + id );
    },

    // Get food database
    getFoodInventory: query => {
        // console.log( 'API.js getting food: ', query );
        return axios.get( `/api/foods`, {
            params: {
                item: query
            }
        } )
    },

    // Save food to database
    saveFoodInventory: foodData => {
        console.log( 'saving to new database...' );
        return axios.post( '/api/foods', foodData );
    },

    // Get Chat
    getChat: () => {
        console.log( 'getting chat...' );
        return axios.get( '/api/chats' );
    },

    // Save chat
    saveChat: message => {
        console.log( 'saving to chat database...' );
        return axios.post( '/api/chats', message );
    },

    // Get a recipe by ingredient
    getIngredientRecipe: ( ingredients, limit ) => {
        // API call will go here
        const URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients';
        const HOST = 'spoonacular-recipe-food-nutrition-v1.p.mashape.com';
        const KEY = 'jQfnjagUlOmsh6jakRb6pEeFbK99p1ebYpGjsnhQRHifZupNG2';
        return axios( {
            method: 'GET',
            url: URL,
            params: {
                ingredients: ingredients,
                number: limit

            },
            headers: {
                'X-Mashape-Host': HOST,
                'X-Mashape-Key': KEY
            }
        } );
    },

    getFullRecipe: id => {
        const URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information';
        const HOST = 'spoonacular-recipe-food-nutrition-v1.p.mashape.com';
        const KEY = 'jQfnjagUlOmsh6jakRb6pEeFbK99p1ebYpGjsnhQRHifZupNG2';
        return axios( {
            method: 'GET',
            url: URL,
            headers: {
                'X-Mashape-Host': HOST,
                'X-Mashape-Key': KEY
            }
        } );
    }



}