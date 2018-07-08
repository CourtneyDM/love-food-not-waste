import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';

class Individual extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Test'>
                        <p>This is where individuals can post excess food &amp; where they can volunteer to deliver food from suppliers to donation centers</p>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Individual;