import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Form, FormGroup, Button } from '../../components/Form';
import Auth from '../../utils/Auth';
import './authentication.css';

export class Login extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false
        };

        this.handleInputChange = this.handleInputChange.bind( this );
        this.handleButtonClick = this.handleButtonClick.bind( this );
    }

    componentWillMount() {
        this.setState( {
            email: '',
            password: '',
            isAuthenticated: false
        } );
    }

    // Authenticate username and password
    authenticateUser = user => {
        return Auth.authenticateUser( user ).then( response => {
            if ( response.data.message ) {
                console.log( response );
                document.getElementById( 'login-message' ).innerHTML = response.data.message
            }
            else {
                // Save user details to session storage
                console.log( response.data );
                window.sessionStorage.setItem( 'userID', response.data.userID );
                window.sessionStorage.setItem( 'fullname', response.data.fullname );
                window.sessionStorage.setItem( 'username', response.data.username );
                window.sessionStorage.setItem( 'email', response.data.email );
                window.sessionStorage.setItem( 'date_joined', response.data.member_since );
                this.setState( { isAuthenticated: true } );
            }
        } );
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    handleButtonClick = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        return this.authenticateUser( user );
    }

    render() {
        return (
            <Route exact path='/login' render={ () => (
                // Load dashboard if authenticated user details is saved to session storage
                window.sessionStorage.length > 0 ? ( <Redirect to='/dashboard' /> )
                    : (
                        // Otherwise load the form for user to sign in
                        <Form className='auth-form'>
                            <h2>Dashboard Login</h2>
                            <FormGroup
                                id='user-email'
                                className='form-control'
                                name='email'
                                label='Email:'
                                type='text'
                                placeholder='Enter your email address'
                                onChange={ this.handleInputChange } />
                            <FormGroup
                                id='user-password'
                                className='form-control'
                                name='password'
                                label='Password:'
                                type='password'
                                placeholder='Enter your password'
                                onChange={ this.handleInputChange } />
                            <Button
                                id='login'
                                className='btn btn-success'
                                text='Login'
                                onClick={ this.handleButtonClick } />
                            <p id='login-message'></p>
                        </Form>
                    )
            ) } />
        );
    }
}