import React from 'react';


export const Input = props => (
    <React.Fragment>
        <div className='form-group'>
            <label htmlFor={ props.name }>{ props.label }</label>
            <input
                id={props.id}
                name={ props.name }
                type={ props.type }
                className={ props.className }
                placeholder={ props.placeholder }
                onChange={ props.onChange } />
                {props.children}
        </div>


    </React.Fragment>
);