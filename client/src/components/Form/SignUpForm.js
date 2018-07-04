import React, { Component } from 'react';
import { Input, Button } from '../Form';
import './Form.css';

export class SignUpForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: ''
        }

        this.handleClick = this.handleClick.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );

    }
    componentDidMount() {
        this.setState = {
            fullName: this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
    }

    handleClick = event => {
        event.preventDefault();
        alert( 'Clicked' );
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
                            id='fullName'
                            type='text'
                            className='form-control'
                        />
                        <Input
                            label='Email'
                            id='email'
                            type='email'
                            className='form-control'
                        />
                        <Input
                            label='Username'
                            id='userName'
                            type='text'
                            className='form-control'
                        />
                        <Input
                            label='Password'
                            id='password'
                            type='password'
                            className='form-control'
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