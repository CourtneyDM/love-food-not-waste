// import React, { Component } from 'react';
// import { Form, FormGroup, Button } from '../../components/Form';
// import { Route, Redirect } from 'react-router-dom';
// import Auth from '../../utils/Auth';
// import './authentication.css';

// export class Signup extends Component {
//     constructor( props ) {
//         super( props );
//         this.state = {
//             user: {
//                 fullname: '',
//                 email: '',
//                 password: ''
//             },
//             confirmed: '',
//             createdUser: false,
//         };
//         this.handleButtonClick = this.handleButtonClick.bind( this );
//         this.handleInputChange = this.handleInputChange.bind( this );
//     }

//     componentWillUnmount() {
//         this.setState( {
//             user: {
//                 fullname: '',
//                 email: '',
//                 password: ''
//             },
//             confirmed: '',
//             createdUser: false
//         } );
//     }

//     // Create a new user based on form details
//     createNewUser = user => {
//         return Auth.createNewUser( user ).then( response => {
//             if ( response.status === 500 ) {
//                 console.log( response.message );
//             }
//             else {
//                 console.log( response.data );
//                 this.setState( { createdUser: true } );
//             }
//         } );
//     }

//     handleInputChange = event => {
//         const { name, value } = event.target;
//         this.setState( { [ name ]: value } );

//         // TODO: Setup form validation
//     }

//     handleButtonClick = event => {
//         event.preventDefault();
//         if ( this.state.password !== this.state.confirmed ) {
//             document.getElementById( 'pwd-confirmed' ).setAttribute( 'style', 'border: 2px solid red' );
//             document.getElementById( 'message' ).innerText = 'Password do not match.';
//             console.log( this.state.password, this.state.confirmed );
//         }
//         else {
//             document.getElementById( 'pwd-confirmed' ).setAttribute( 'style', 'border: 2px solid green' );
//             document.getElementById( 'message' ).innerText = 'Password match';
//             console.log( `match: ${this.state.password}` );

//             const user = {
//                 fullname: this.state.fullname,
//                 email: this.state.email,
//                 password: this.state.password
//             };
//             return this.createNewUser( user )
//         }
//     }

//     render() {
//         return (
//             <Route exact path='/signup' render={ () => (
//                 // Check to see if a user is already logged in
//                 ( this.state.createdUser ) || ( window.sessionStorage.getItem( 'username' ) ) ? (
//                     // Go to login page if user is not logged in or user profile was created successfully
//                     <Redirect to='/login' /> ) : (

//                         < Form className='auth-form'>
//                             <h2>New User Signup</h2>
//                             <FormGroup
//                                 id='fullname'
//                                 className='form-control'
//                                 name='fullname'
//                                 label='Full Name'
//                                 type='text'
//                                 placeholder='i.e. Johnny Appleseed'
//                                 onChange={ this.handleInputChange } />
//                             <FormGroup
//                                 id='user-email'
//                                 className='form-control'
//                                 name='email'
//                                 label='Email'
//                                 type='email'
//                                 placeholder='i.e. jappleseed@myemail.com'
//                                 onChange={ this.handleInputChange } />
//                             <FormGroup
//                                 id='user-pwd'
//                                 className='form-control'
//                                 name='password'
//                                 label='Password'
//                                 type='password'
//                                 placeholder='Enter a password'
//                                 onChange={ this.handleInputChange } />
//                             <FormGroup
//                                 id='pwd-confirmed'
//                                 className='form-control'
//                                 name='confirmed'
//                                 label='Confirm Password'
//                                 type='password'
//                                 placeholder='Re-enter your password'
//                                 onChange={ this.handleInputChange } />

//                             <p id='message'></p>

//                             <Button
//                                 id='submit-btn'
//                                 className='btn btn-success'
//                                 text='Create Account'
//                                 onClick={ this.handleButtonClick } />
//                         </ Form>

//                     ) ) } />
//         );
//     }
// }