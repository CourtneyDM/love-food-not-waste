// Import Dependencies - Love Food Not Waste
const mongoose = require( 'mongoose' );

// Define Mongoose Schema
const Schema = mongoose.Schema;

// Create FoodSchema
const FoodSchema = new Schema( {
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

// Define Food Model from FoodSchema
const Food = mongoose.model( 'Food', FoodSchema );

// Export Food Model
module.exports = Food;