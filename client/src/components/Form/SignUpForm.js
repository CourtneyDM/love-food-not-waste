import React, { Component } from 'react';
import { Input, Button } from '../Form';
import axios from 'axios';
import './Form.css';

export class SignUpForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleClick = this.handleClick.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );
    }

    handleClick = event => {
        event.preventDefault();
        return axios( {
            method: 'POST',
            url: '/api/user/signup',
            data: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
        } ).then( res => console.log( res ) );

        // TODO: create functionality to handle form submission
    }

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );

    }

    render() {
        return (
            <React.Fragment>
                <h2>Sign Up Form</h2>
                <div className='signup'>
                    <div className='form-group'>
                        <Input
                            label='Name'
                            name='username'
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
                            value={ this.state.value }
                            className='form-control'
                            onChange={ this.handleInputChange }
                        />
                        <Input
                            label='Confirm Password'
                            name='confirm'
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
            </React.Fragment>
        );
    }
}