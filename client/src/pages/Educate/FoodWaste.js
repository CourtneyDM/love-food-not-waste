import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';

class FoodWaste extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Test'>
                        <p>Statistics about food waste go here</p>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default FoodWaste;