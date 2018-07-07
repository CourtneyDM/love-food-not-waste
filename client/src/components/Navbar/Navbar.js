import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '../Form';
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-dark">
        <form className="form-inline ml-auto">
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
    </nav>
)

export default Navbar;