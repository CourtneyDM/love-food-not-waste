import React from 'react';

export const Button = props =>
    <button onClick={ props.onClick } className={ props.className }>
        { props.text }
    </button>;