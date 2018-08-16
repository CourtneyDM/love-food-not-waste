// Import Dependencies - Love Food Not Waste
const mongoose = require( 'mongoose' );

// Define Mongoose Schema
const Schema = mongoose.Schema;

// Create RecipeSchema
const RecipeSchema = new Schema( {
    recipeID: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
} );

// Define Recipe Model for RecipeSchema
const Recipe = mongoose.model( 'Recipe', RecipeSchema );

// Export Recipe Model
module.exports = Recipe;