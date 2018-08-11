import React from 'react';
import { Link } from 'react-router-dom'; 
import './Social.css';

const Social = () =>
(
    <div className='social'>
    <h5 id='connect' className='text-center'>Connect with us</h5>
    <div className='socialIcons d-flex justify-content-between'>
    <Link to='/'>
        <img className='img-fluid' id='facebook' src='/assets/images/facebook.png' alt='facebook' height="50px" width="50px" />
    </Link>
    <Link to='/'>
        <img className='img-fluid' id='twitter' src='/assets/images/twitter.png' alt='twitter' height="50px" width="50px" />
    </Link>
    <Link to='/'>
        <img className='img-fluid' id='insta' src='/assets/images/instagram.png' alt='instagram' height="50px" width="50px" />
    </Link>
    <Link to='/'>
        <img className='img-fluid' id='email' src='/assets/images/email.png' alt='e-mail' height="50px" width="50px" />
    </Link>
</div>
</div>
);

export default Social;
