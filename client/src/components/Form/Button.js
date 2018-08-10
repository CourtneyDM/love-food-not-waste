import React from 'react';

export const Button = props => (
    <button
        type='button'
        className={ props.className }
        id={ props.id }
        onClick={ props.onClick }>{ props.text }
    </button>
);
