import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';

class Recipes extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Test'>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Recipes;