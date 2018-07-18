// Import Dependencies
const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcryptjs' );

const Schema = mongoose.Schema;

// Setup User Schema
const UserSchema = new Schema( {
    fullname: {
        type: String,
        trim: true,
        required: true,
        index: true
    },
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
        required: true
        // match: [ /.+@+\..+/, 'Please enter a valid email address.' ]
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

// Custom method to create user and hash password
UserSchema.methods.createUser = ( newUser, cb ) => {
    bcrypt.genSalt( 10, ( err, salt ) => {
        bcrypt.hash( newUser.password, salt, ( err, hash ) => {
            newUser.password = hash;
            return newUser.save( cb );
        } );
    } );
};

// TODO: REMOVE
UserSchema.methods.getUserByUsername = ( username, cb ) => {
    const query = { username: username };
    User.findOne( query, cb );
};

// TODO: REMOVE
UserSchema.methods.comparePassword = ( userPassword, hash, cb ) => {
    bcrypt.compare( userPassword, hash, ( err, isMatch ) => {
        if ( err ) { throw err; }
        cb( null, isMatch );
    } );
    User.findOne( query, cb );
};

// TODO: REMOVE
UserSchema.methods.getUserById = ( id, cb ) => {
    User.findById( id, cb );
};

const User = mongoose.model( 'User', UserSchema );

module.exports = User;