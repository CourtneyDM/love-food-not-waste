import React from 'react';
import './Form.css';

export const Form = props => (
    <form { ...props }>
        { props.children }
    </form>
);