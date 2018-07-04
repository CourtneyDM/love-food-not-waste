import React from 'react';

export const Input = props => (
    <React.Fragment>
        <label htmlFor={ props.id }>{ props.label }</label>
        <input type={ props.type } className={ props.className } id={ props.id } />
    </React.Fragment>
);
