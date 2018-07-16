// Import Dependencies
const mongoose = require( 'mongoose' );

// Setup Schema
const Schema = mongoose.Schema;

// Define Inventory Schema
const foodSchema = new Schema( {
    category: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    pantry: {
        type: String,
        required: false
    },
    refrigerator: {
        type: String,
        required: false
    },
    freezer: {
        type: String,
        required: false
    }
    
} );

const Food = mongoose.model( 'Food', foodSchema );
module.exports = Food;