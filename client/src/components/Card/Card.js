import React from 'react';
import './Card.css';

export const Card = props => (
    <React.Fragment>
         <div className="card">  
         {/* <img class="card-img-top" src={props.source} alt={props.header} height='210px'/> */}
            <div className="card-header text-center">{ props.header }</div>
            <div className="card-body d-flex flex-column">
                <p className="card-text">{ props.text} </p>
                <a href={props.route} className="card-link">{props.link}</a>
            </div>
        </div>
    </React.Fragment>
);


