// Import Dependencies
const mongoose = require( 'mongoose' );

// Setup Schema
const Schema = mongoose.Schema;

// Define Inventory Schema
const ChatSchema = new Schema( {
    userName: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now,
        required: false
    }
})

const Chat = mongoose.model( 'Chat', ChatSchema );

module.exports = Chat;