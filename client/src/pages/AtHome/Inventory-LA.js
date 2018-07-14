import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';

class Inventory extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Test'>
                        <p>This is for the food inventory</p>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Inventory;