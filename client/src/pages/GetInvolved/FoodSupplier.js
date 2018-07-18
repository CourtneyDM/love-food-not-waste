import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';
import Comment from './Comment';

class FoodSupplier extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic>
						<Comment>

						</Comment>
                       
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default FoodSupplier;


