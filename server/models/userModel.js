// // Import Dependencies - Love Food Not Waste
// const mongoose = require( 'mongoose' );
// const bcrypt = require( 'bcryptjs' );

// // Define Mongoose Schema
// const Schema = mongoose.Schema;

// // Create UserSchema
// const UserSchema = new Schema( {
//     fullname: {
//         type: String,
//         trim: true,
//         required: true,
//         index: true
//     },
//     username: {
//         type: String,
//         trim: true,
//         required: true,
//         index: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         trim: true,
//         required: true
//     },
//     password: {
//         type: String,
//         trim: true,
//         required: true,
//         validate: [
//             input => {
//                 return input.length >= 6;
//             },
//             'Password needs to be at least 6 characters long.'
//         ]
//     },
//     googleID: {
//         type: String
//     },
//     userCreated: {
//         type: Date,
//         default: Date.now
//     }
// } );

// // Custom method to create user and hash passwordff
// UserSchema.methods.createUser = ( newUser, cb ) => {
//     bcrypt.genSalt( 10, ( error, salt ) => {
//         bcrypt.hash( newUser.password, salt, ( error, hash ) => {
//             newUser.password = hash;
//             return newUser.save( cb );
//         } )
//     } );
// };

// // Define User Model from UserSchema
// const User = mongoose.model( 'User', UserSchema );

// // Export User Model
// module.exports = User