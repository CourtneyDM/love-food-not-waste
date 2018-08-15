import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Form';
import "./Navbar.css";

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

                            <li className="menu-active"><Link to="/home#intro">Home</Link></li>

                            <li><Link to="/home#about" >About</Link></li>
                            <li><Link to="/home#food-tracker">Food Tracker</Link></li>
                            <li><Link to="/home#recipes">Recipes</Link></li>
                            <li><Link to="/home#resources">Donate</Link></li>



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