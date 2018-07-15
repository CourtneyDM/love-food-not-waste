import React from 'react';
import './Card.css';

export const CardWithImage = props => (
    <React.Fragment>
         <div className="card card-image">  
         <img class="card-img-top" src={props.source} alt={props.header} width='180px' height='180px'/>
            <div className="card-header card-header-image text-center">{ props.header }</div>
            <div className="card-body d-flex flex-column">
                <p className="card-text">{ props.text} </p>
                {props.children}
            </div>
           
        </div>
    </React.Fragment>
);


