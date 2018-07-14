import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';

class Resources extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Test'>
                        <p>This will contain information on Dallas area food banks</p>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Resources;