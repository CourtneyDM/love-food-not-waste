import React, { Component } from 'react';
import { Input, Button } from '../Form';
import axios from 'axios';
import './Form.css';

export class LoginForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            email: '',
            password: ''
        };
        this.handleClick = this.handleClick.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );
    }

    handleClick = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        return axios( {
            method: 'POST',
            url: "/login",
            data: {
                email: this.state.email,
                password: this.state.password
            }
        } ).then( res => console.log( res ) ).catch( err => { throw err } );
        // axios.post( '/login', user )
        //     .then( res => console.log( res ) )
        //     .catch( err => { throw err; } );
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
            </React.Fragment>
        );
    }
}