import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '../Form';
import "./Navbar.css";

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">Dallas, TX</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="_BLANK" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        What's the Problem?
        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/Inventory">Food Waste</a>
                        <a className="dropdown-item" href="/Recipes">Hunger</a>
                    </div>
                </li>


                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="_BLANK" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Help at Home
        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/Home/Inventory">Food Inventory</a>
                        <a className="dropdown-item" href="/Home/Recipes">What can I make?</a>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/GetInvolved" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Get Involved
        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/Donate">Donate</a>
                        <a className="dropdown-item" href="/Pickup">Pickup</a>
                    </div>
                </li>


            </ul>
            <form className="form-inline my-2 my-lg-0">
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