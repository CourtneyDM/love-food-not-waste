import React from 'react';
import { Link } from 'react-router-dom'; //to let text be link to home page
import './Jumbotron.css';

const Jumbotron = () =>
    (
        <div className='jumbotron-fluid'>
            <Link to='/'>
            <img  className='img-fluid' id='logo' src='/assets/images/logo3.jpg' alt='logo'/>
            </Link>
        </div>
    );

export default Jumbotron;