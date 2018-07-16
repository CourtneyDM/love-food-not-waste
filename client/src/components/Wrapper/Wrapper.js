import React from 'react';
import './Wrapper.css';

export const Wrapper = props => (   
    <div className='wrapper'> 
        <div className={props.className} id={props.id}>
            {props.children}
        </div>
        </div>
);