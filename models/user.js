// Import Dependencies
const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcryptjs' );

const Schema = mongoose.Schema;

const UserSchema = new Schema( {
    username: {
        type: String,
        trim: true,
        required: true,
        index: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        match: [ /.+@+\..+/, 'Please enter a valid email address.' ]
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: [
            function ( input ) {
                return input.length >= 6;
            },
            'Password needs to be at least 6 characters.'
        ]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    googleID: {
        type: String
    }
} );

UserSchema.methods.createUser = function ( newUser, cb ) {
    bcrypt.genSalt( 10, ( err, salt ) => {
        bcrypt.hash( newUser.password, salt, ( err, hash ) => {
            newUser.password = hash;
            return newUser.save( cb );
        } );
    } );
};

const User = mongoose.model( 'User', UserSchema );

module.exports = User;