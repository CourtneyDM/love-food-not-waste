import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';

class FoodSupplier extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Test'>
                        <p>This is where restaurants, caterers, grocers and other food service establishments can share food</p>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default FoodSupplier;