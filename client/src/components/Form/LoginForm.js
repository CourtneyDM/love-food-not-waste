import React, { Component } from 'react';
import { Input, Button } from '../Form';
import Dashboard from '../../pages/Landing';
import axios from 'axios';
import './Form.css';

export class LoginForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            email: '',
            password: '',
            sessionID: ''
        };
        this.handleClick = this.handleClick.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );
    }

    // Handle the button click event
    handleClick = event => {
        event.preventDefault();
        const user = {
            email: this.state.email.trim(),
            password: this.state.password.trim()
        };

        return this.getUserData( user );
    }

    // Handle input change event for input fields
    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    // Get the user data from back-end server
    getUserData = user => {
        axios( {
            method: 'POST',
            url: "/login",
            data: {
                email: user.email.trim(),
                password: user.password.trim()
            }
        } ).then( res => {
            console.log( res );
            if ( res.data === 'Invalid password.' ) {
                return alert( 'You have entered the wrong password.' );
            }
            else if ( res.data === 'Invalid username.' ) {
                return alert( 'You have entered the wrong username.' );
            } else if ( res.data === 'Missing credentials' ) {
                return alert( 'Please check your submission and try again.' );
            }
            else {
                window.sessionStorage.setItem( "fullname", res.data.fullname );
                window.sessionStorage.setItem( "email", res.data.email );
                window.sessionStorage.setItem( "sessionID", res.data.sessionID );
            }
        } ).catch( err => { throw err } );
    }

    render() {
        return (
            ( window.sessionStorage ?
                ( <React.Fragment>
                    { window.sessionStorage.setItem( 'username', this.state.email ) }
                    { window.sessionStorage.setItem( 'sessionID', this.state.sessionID ) }
                    <Dashboard />
                </React.Fragment>
                )
                :
                ( <React.Fragment>
                    <h2>Account Login</h2>
                    <div className='signup'>
                        <div className='form-group'>
                            <Input
                                label='Email'
                                name='email'
                                type='text'
                                className='form-control'
                                onChange={ this.handleInputChange }
                            />
                            <Input
                                label='Password'
                                name='password'
                                type='password'
                                className='form-control'
                                onChange={ this.handleInputChange }
                            />
                            <Button
                                onClick={ this.handleClick }
                                text='Login'
                                className='btn btn-success'
                            />
                        </div>
                    </div>
                </React.Fragment> ) )
        );
    }
}