// Import Dependencies - Love Food Not Waste
const mongoose = require( 'mongoose' );

// Define Mongoose Schema
const Schema = mongoose.Schema;

// Create InventorySchema
const InventorySchema = new Schema( {
    itemName: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true
    },
    bestByDate: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
} );

// Define Inventory Model from InventorySchema
const Inventory = mongoose.model( 'Inventory', InventorySchema );

// Export Inventory Model
module.exports = Inventory;