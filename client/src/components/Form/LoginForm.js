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
            isAuthenitcated: false
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
            url: "/user/login",
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
                window.sessionStorage.setItem( "fullname", res.data.user.fullname );
                window.sessionStorage.setItem( "email", res.data.user.email );
                window.sessionStorage.setItem( "sessionID", res.data.sessionID );
                window.sessionStorage.setItem( "userID", res.data.user._id );
                window.sessionStorage.setItem( "isLoggedIn", true );
                this.setState( { isAuthenitcated: true } );
                window.location.pathname = '/Welcome';
            }
        } ).catch( err => { throw err } );
    }

    render() {
        return (
            ( this.state.isAuthenitcated ?
                ( <React.Fragment>
                    <Dashboard />
                </React.Fragment>
                )
                :
                ( <React.Fragment>

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