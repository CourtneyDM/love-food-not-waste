import React from 'react';
import './Card.css';

export const CardDeck = props => (
    <div className='card-deck'>
        { props.children }
    </div>
);

