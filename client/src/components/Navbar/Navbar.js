import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import "./Navbar.css";

const $ = require('jquery');

export class Navbar extends Component {
  

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

 

    render() {
        const { isAuthenticated } = this.props.auth;
        const nickname = localStorage.getItem( 'nickname' )

        return (


            <header id="header">
                <div className="container-fluid">

                    <div id="logo" className="pull-left">

                        <h1><Link to="/home#intro" className="scrollto">Waste Not</Link></h1>

                    </div>

                    <nav id="nav-menu-container">
                        <ul className="nav-menu">

                            <li className="menu-active"><NavHashLink smooth to="/home#intro">Home</NavHashLink></li>
                            <li id="about-link"><NavHashLink smooth to="/home#about">About</NavHashLink></li>
                            <li><NavHashLink smooth to="/home#food-tracker">Food Tracker</NavHashLink></li>
                            <li><NavHashLink smooth to="/home#recipes">Recipes</NavHashLink></li>
                            <li><NavHashLink smooth to="/home#localResources">Donate</NavHashLink></li>



                            {
                                !isAuthenticated() && (
                                    <li><a href="#" onClick={ this.login.bind( this ) }><i className="ion-ios-contact"></i> Login/Signup</a></li>
                                )
                            }
                            {
                                isAuthenticated() && (
                                    <React.Fragment>
                                        <li><Link to="/dashboard">My Dashboard</Link></li>

                                        <li><a href="#" onClick={ this.logout.bind( this ) }><i className="ion-ios-contact"></i> Logout</a></li>
                                    </React.Fragment>

                                )
                            }

                        </ul>


                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;