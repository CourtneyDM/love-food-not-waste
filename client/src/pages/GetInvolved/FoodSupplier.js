import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';
import Comment from './Comment';

export class FoodSupplier extends Component {
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
