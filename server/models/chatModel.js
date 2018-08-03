// Import Dependencies - Love Food Not Waste
const mongoose = require( 'mongoose' );

// Define Mongoose Schema
const Schema = mongoose.Schema;

// Create ChatSchema
const ChatSchema = new Schema( {
    userName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
        required: false
    }
} );

// Define Chat Model from ChatSchema
const Chat = mongoose.model( 'Chat', ChatSchema );

// Export Chat Model
module.exports = Chat;

// TODO: Look at Firebase for realtime chat functionality