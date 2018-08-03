import React from 'react';
import './Wrapper.css';

const Wrapper = props => (
    <div className='wrapper'>
        <div className={ props.className } id={ props.id } >
            { props.children }
        </div>
    </div>
);

export default Wrapper;