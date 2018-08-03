import React from 'react';


export const Input = props => (
    <div className='form-group'
        id={ props.id }>
        <label htmlFor={ props.name }>{ props.label }</label>
        <input
            id={ props.id }
            name={ props.name }
            type={ props.type }
            className={ props.className }
            placeholder={ props.placeholder }
            onChange={ props.onChange } />{ props.children }
    </div>
);