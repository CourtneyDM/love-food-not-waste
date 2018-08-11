import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Form';
import "./Navbar.css";

export class Navbar extends Component {
    // constructor( props ) {
    //     super( props );
    //     this.endSession = this.endSession.bind( this );
    // }

    // If user is login in or signing up, hide login/signup buttons in navbar
    // componentDidUpdate() {
    //     if ( window.location.pathname === '/login' || window.location.pathname === '/signup' ) {
    //         document.getElementById( 'login-btn' ).setAttribute( 'class', 'hidden' );
    //         document.getElementById( 'signup-btn' ).setAttribute( 'class', 'hidden' );
    //     }
    // }

    // Logout user and clear information from session storage
    // endSession = () => {
    //     console.log( 'clicked' );
    //     window.sessionStorage.clear();
    //     window.location = '/';
    // }


    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const nickname = localStorage.getItem('nickname')
        
        return (
            < nav className="navbar navbar-expand-lg navbar-dark" >
                <a className="navbar-brand" href="/">Dallas, TX</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="Educate" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                What's the Problem? </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/Educate/FoodWaste">Food Waste</Link>
                                <Link className="dropdown-item" to="/Educate/Hunger">Hunger</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="AtHome" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Help at Home </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/AtHome/Inventory">Food Inventory</Link>
                                <Link className="dropdown-item" to="/AtHome/Recipes">Recipes</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="GetInvolved" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Get Involved </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/GetInvolved/Individual">Message Board</Link>
                                <Link className="dropdown-item" to="/GetInvolved/Resources">Resources</Link>
                            </div>
                        </li>
                    </ul >
                    <form className="form-inline my-2 my-lg-0">
                        {/* { sessionStorage.length > 0 ?
                            <ul className='navbar-nav'>
                                <li className='userInfo nav-item'>Welcome, { `${window.sessionStorage.getItem( 'fullname' )}` }</li>
                                <li onClick={ this.endSession } className='nav-item btn'>
                                    <Button
                                        id='logout-btn'
                                        className='btn btn-danger'
                                        text='Logout' />
                                </li>
                            </ul>
                            : <React.Fragment>
                                <Link className='nav-link' to='/login'>
                                    <Button
                                        id='login-btn'
                                        className='btn btn-login'
                                        text='Login' />
                                </Link>
                                <Link className='nav-link' to='/signup'>
                                    <Button
                                        id='signup-btn'
                                        className='btn btn-signup'
                                        text='Signup' />
                                </Link>
                            </React.Fragment>
                        } */}

                        {
                                !isAuthenticated() && (
                                    <Button
                                        text="Log In"
                                        id="loginButton"
                                        onClick={this.login.bind(this)}
                                    />
                                       
                                )
                            }
                            {
                                isAuthenticated() && (
                                    <div>
                                        <Link to="/profile" id="viewProfile">Welcome, {nickname} </Link>
                                        <Button
                                            text="Log Out"
                                            id="logoutButton"
                                            onClick={this.logout.bind(this)}
                                        />
                                         
                                    </div>
                                )
                            }
                    </form>
                </div >
            </nav >
        );
    }
}

export default Navbar;