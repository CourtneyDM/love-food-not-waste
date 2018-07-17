import React, { Component } from 'react';
import { SignUpForm } from '../components/Form';
import { CardDeck, CardBasic } from '../components/Card'

class Signup extends Component {

    render() {
return(
    <React.Fragment>
    <CardDeck>
        <CardBasic
         header='Create an Account'>
<SignUpForm />
</CardBasic>
</CardDeck>
</React.Fragment>
)
    }
}

export default Signup;