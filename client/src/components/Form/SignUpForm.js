import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Input, Button } from '../Form';
import axios from 'axios';
import Dashboard from '../../pages/Landing';
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
        axios( {
            method: 'POST',
            url: '/register',
            data: {
                fullname: this.state.fullname.toLowerCase(),
                username: this.state.email,
                email: this.state.email,
                password: this.state.password
            }
        } ).then( res => {
            console.log( `Data: ${JSON.stringify( res )}` );
        } );

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
                            value={ this.state.value }
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