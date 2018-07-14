import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';

class Hunger extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Test'>
                        <p>Statistics about hunger go here</p>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Hunger;