// // Use Environment Variables
// require( 'dotenv' ).config();

// // Import Dependencies - Love Food Not Waste
// const passport = require( 'passport' );
// const LocalStrategy = require( 'passport-local' ).Strategy;
// const GoogleStrategy = require( 'passport-google-oauth20' );
// const bcrypt = require( 'bcryptjs' );

// // Import User Model
// const User = require( '../models/userModel' );

// // Create Local Strategy
// passport.use( new LocalStrategy(
//     { usernameField: 'username' },
//     ( username, password, done ) => {
//         User.findOne( { username: username }, ( error, user ) => {
//             if ( error ) { throw error; }
//             if ( !user ) {
//                 return done( null, false, { message: 'You have entered an invalid username. Please try again.' } );
//             }
//             if ( !bcrypt.compareSync( password, user.password ) ) {
//                 return done( null, false, { message: 'You have entered an invalid password. Please try again.' } );
//             }
//             return done( null, user );
//         } );
//     }
// ) );

// // Request cookie from the client
// passport.serializeUser( ( user, done ) => {
//     done( null, user.id );
// } )

// // Handle cookie received from the client
// passport.deserializeUser( ( id, done ) => {
//     User.findById( id ).then( user => {
//         done( null, user );
//     } );
// } );

// // Create Google OAuth Strategy
// passport.use( new GoogleStrategy( {
//     // Options for Google Strategy
//     callbackURL: '/auth/google/redirect',
//     clientID: process.env.clientID,
//     clientSecret: process.env.clientSecret,
// }, ( accessToken, refreshToken, profile, done ) => {
//     // Check if user exists in our database
//     User.findOne( {
//         googleID: profile.id
//     } ).then( currentUser => {
//         if ( currentUser ) {
//             // Already have the user
//             console.log( `Current user is ${currentUser}` );
//         }
//         else {
//             // Create new user
//             new User( {
//                 fullname: profile.displayName,
//                 email: profile.id,
//                 googleID: profile.id
//             } ).save().then( newUser => {
//                 console.log( `Created user: ${newUser}` );
//                 done( null, newUser );
//             } );
//         }
//     } );
// } ) );