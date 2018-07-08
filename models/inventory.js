// Import Dependencies
const mongoose = require( 'mongoose' );

// Setup Schema
const Schema = mongoose.Schema;

// Define Inventory Schema
const inventorySchema = new Schema( {
    itemName: {
        type: String,
        required: true
    },
    itemBrandName: {
        type: String,
    },
    bestByDate: {
        type: String,
        required: true
    }
} );

const Inventory = mongoose.model( 'Inventory', inventorySchema );
module.exports = Inventory;