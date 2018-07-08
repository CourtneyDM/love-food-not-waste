import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '../Form';
import "./Navbar.css";

const Navbar = () => (

<nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="/">Dallas, TX</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         What's the Problem?
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Inventory">Food Waste</a>
          <a class="dropdown-item" href="/Recipes">Hunger</a>
        </div>
      </li>

      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Help at Home
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Inventory">Food Inventory</a>
          <a class="dropdown-item" href="/Recipes">What can I make?</a>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/GetInvolved" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Get Involved
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Donate">Donate</a>
          <a class="dropdown-item" href="/Pickup">Pickup</a>
        </div>
      </li>


    </ul>
    <form class="form-inline my-2 my-lg-0">
    <Link className="nav-link" to="/Login"><Button
        className='btn login'
        text='Login' />
    </Link>
    <Link className="nav-link" to="/SignUp">
        <Button
            className='btn'
            text='Sign Up' />
    </Link>
    </form>
  </div>
</nav>

    

)

export default Navbar;

{/* <nav className="navbar navbar-dark">
    
<form className="form-inline ml-auto">
    
</form>
</nav> */}