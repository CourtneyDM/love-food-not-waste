import React from 'react';

export const FormGroup = props => (
    <div className='form-group'>
        <label htmlFor={ props.name }>{ props.label }</label>
        <input
            className={ props.className }
            id={ props.id }
            name={ props.name }
            onChange={ props.onChange }
            placeholder={ props.placeholder }
            type={ props.type }
        />
    </div>
);