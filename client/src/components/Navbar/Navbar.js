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

    scroll(section) {
        var top_space = 0;

        if ($('#header').length) {
            top_space = $('#header').outerHeight();

            if (!$('#header').hasClass('header-fixed')) {
                top_space = top_space - 20;
            }

            $('html, body').animate({
                scrollTop: $("#" + section.id).offset().top - top_space
            }, 1500);

        }
    }


    render() {
        const { isAuthenticated } = this.props.auth;
        const nickname = localStorage.getItem('nickname')

        return (


            <header id="header">
                <div className="container-fluid">

                    <div id="logo" className="pull-left">

                        <h1><NavHashLink smooth to="/home#intro" scroll={el => this.scroll(el)}>Waste Not</NavHashLink></h1>

                    </div>

                    <nav id="nav-menu-container">
                        <ul className="nav-menu">

                            <li className="menu-active"><NavHashLink smooth to="/home#intro" scroll={el => this.scroll(el)}>Home</NavHashLink></li>
                            <li id="about-link"><NavHashLink smooth to="/home#about" scroll={el => this.scroll(el)}>About</NavHashLink></li>
                            <li><NavHashLink to="/home#food-tracker" scroll={el => this.scroll(el)}>Food Tracker</NavHashLink></li>
                            <li><NavHashLink smooth to="/home#recipes" scroll={el => this.scroll(el)}>Recipes</NavHashLink></li>
                            <li><NavHashLink smooth to="/home#localResources" scroll={el => this.scroll(el)}>Donate</NavHashLink></li>



                            {
                                !isAuthenticated() && (
                                    <li><a href="#" onClick={this.login.bind(this)}><i className="ion-ios-contact"></i> Login/Signup</a></li>
                                )
                            }
                            {
                                isAuthenticated() && (
                                    <React.Fragment>
                                        <li><Link to="/dashboard">My Dashboard</Link></li>

                                        <li><a href="#" onClick={this.logout.bind(this)}><i className="ion-ios-contact"></i> Logout</a></li>
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