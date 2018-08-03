import React from 'react';
import './Content.css';

export const Section = props => (
    <div className={ props.className } id={ props.id }>{ props.children }</div>
);