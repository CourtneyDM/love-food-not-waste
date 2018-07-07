import React from 'react';
import { Link } from 'react-router-dom'; //to let text be link to home page
import './Jumbotron.css';

const Jumbotron = () =>
    (
        <div className='jumbotron-fluid'>
            <div className='foodImage'></div> 
            <Link className='navbar-brand' to='/'>
            <h1 id='logoText'>Waste Not</h1>
            {/* <img  class='img-fluid' src='/assets/images/lovefoodnotwaste.jpg' alt='logo' width='150px' height='200px'/> */}
            </Link>
        </div>
    );

export default Jumbotron;