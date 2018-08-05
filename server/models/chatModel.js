// Import Dependencies - Love Food Not Waste
const mongoose = require( 'mongoose' );

// Define Mongoose Schema
const Schema = mongoose.Schema;

// Create ChatSchema
const ChatSchema = new Schema( {
    username: {
        type: String,
        trim: true,
        required: false,
        index: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
} );

// Define Chat Model from ChatSchema
const Chat = mongoose.model( 'Chat', ChatSchema );

// Export Chat Model
module.exports = Chat;