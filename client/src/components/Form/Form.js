import React from 'react';
import './Form.css';

export const Form = props => <form className='form-inline'>
    <div className='form-group mb-2'>
        { props.children }
    </div>
</form>;