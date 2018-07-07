import React, { Component } from 'react';
import { Input, Button } from '../Form';
import './Form.css';

export class LoginForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            userName: '',
            password: ''
        }

        this.handleClick = this.handleClick.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );

    }
    componentDidMount() {
        this.setState = {
            userName: this.state.userName,
            password: this.state.password
        }
    }

    handleClick = event => {
        event.preventDefault();
        alert( 'Clicked' );
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
                            text='Login'
                            className='btn btn-success'
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}