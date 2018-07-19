import React from 'react';
import './Card.css';

export const CardBasic = props => (
    <React.Fragment>
         <div className="card">  
            <div className="card-header card-header-basic text-center">{ props.header }</div>
            <div className="card-body d-flex flex-column">
            {props.children}
            </div>
        </div>
    </React.Fragment>
);


