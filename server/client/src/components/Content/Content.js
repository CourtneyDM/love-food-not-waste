import React from 'react';
import './Content.css';

export const Content = props => (
    <p className={ props.className } id={ props.id }>
        { props.children }
    </p>
);