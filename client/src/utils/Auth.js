// import axios from 'axios';

// export default {
//     // Create a new user
//     createNewUser: user => {
//         return axios( {
//             method: 'POST',
//             url: '/auth/register',
//             data: {
//                 fullname: user.fullname,
//                 username: user.email,
//                 email: user.email,
//                 password: user.password,
//             }
//         } );
//     },

//     // Authenticate username and password
//     authenticateUser: user => {
//         return axios( {
//             method: 'POST',
//             url: '/auth/login',
//             data: {
//                 username: user.email,
//                 password: user.password
//             }
//         } );
//     },

//     // Logout user and end session
//     logoutUser: () => {
//         return axios( {
//             method: 'GET',
//             url: '/auth/logout'
//         } );
//     }
// }