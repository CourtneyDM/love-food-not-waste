import React, { Component } from 'react';
import { LoginForm } from '../components/Form';
import { CardDeck, CardBasic } from '../components/Card'

class Login extends Component {

    render() {
        return (
            <React.Fragment>
                <CardDeck>
                    <CardBasic
                        header='Account Login'>
                        <LoginForm />
                    </CardBasic>
                </CardDeck>
            </React.Fragment>
        )
    }
}

export default Login;