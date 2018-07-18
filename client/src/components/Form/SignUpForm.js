import React, { Component } from 'react';
import { Input, Button } from '../Form';
import axios from 'axios';
import Login from '../../pages/Login';
import './Form.css';

export class SignUpForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: '',
            isRegisterd: false,
            redirect: false
        };
        this.handleClick = this.handleClick.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );
    }

    componentDidMount() {
        window.sessionStorage.clear();
    }

    handleClick = event => {
        event.preventDefault();
        this.setState( {
            fullname: this.state.fullname.toUpperCase().trim(),
            username: this.state.email.trim(),
            email: this.state.email.trim(),
            password: this.state.password.trim()
        } );
        return axios( {
            method: 'POST',
            url: '/register',
            data: {
                fullname: this.state.fullname.toUpperCase().trim(),
                username: this.state.email.trim(),
                email: this.state.email.trim(),
                password: this.state.password.trim()
            }
        } ).then( res => {
            window.location.pathname = '/login'
            this.setState( { isRegisterd: true } );
        } ).catch( err => { throw err } );
    }

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState( { [ name ]: value } )

    }

    render() {
        return (
            // Check if user has registered
            ( !this.state.isRegisterd ? (
                < React.Fragment >
                    <h2>Sign Up Form</h2>
                    <div className='signup'>
                        <div className='form-group'>

                            <Input
                                label='Name'
                                name='fullname'
                                type='text'
                                className='form-control'
                                onChange={ this.handleInputChange }
                            />
                            <Input
                                label='Email'
                                name='email'
                                type='email'
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
                                text='Create Account'
                                className='btn btn-success'
                            />
                        </div>
                    </div>
                </React.Fragment > )
                // If user completed registration, take them to login page
                : <Login /> )
        );
    }
}

// TODO: LOOK AT HOW PASSPORT IS PASSING THE SESSION IDS FROM THE SERVER TO THE CLIENT - WHERE IS IT STORED?
// TODO: MODIFY THE DASHBOARD TO SHOW A LOGOUT BUTTON INSTEAD OF A LOGIN BUTTON
// TODO: HAVE THE LOGOUT BUTTON CLEAR/RESET THE SESSION
// TODO: LOOK AT THE "isAuthenticated" FLAG - MAYBE ADD IT TO THE LOCAL STORAGE/SESSION STORAGE