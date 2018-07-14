import React, { Component } from 'react';
import { Input, Button } from '../Form';
import axios from 'axios';
import './Form.css';

export class LoginForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            userName: '',
            password: ''
        };
        this.handleClick = this.handleClick.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );
    }

    handleClick = event => {
        event.preventDefault();
        return axios( {
            method: 'GET',
            url: '/api/auth/google',
            headers: {
                'Access-Control-Allow-Origin': '/api/user/google'
            }
        } );
        // TODO: Create functionality to handle form submission
    }

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    render() {
        return (
            <React.Fragment>
                <h2>Account Login</h2>
                <div className='signup'>
                    <div className='form-group'>
                        <Input
                            label='Username'
                            name='userName'
                            type='text'
                            className='form-control'
                        />
                        <Input
                            label='Password'
                            name='password'
                            type='password'
                            className='form-control'
                        />
                        <Button
                            onClick={ this.handleClick }
                            text='Login'
                            className='btn btn-success'
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}