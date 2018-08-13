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
        const nickname = localStorage.getItem('nickname')
        
        return (
           
           
        <header id="header">
    <div class="container-fluid">

      <div id="logo" class="pull-left">

        <h1><Link to="/home#intro" class="scrollto">Waste Not</Link></h1>
        
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">

          <li class="menu-active"><Link to="/home#intro">Home</Link></li>
          
          <li><Link to="/home#about" >About</Link></li>
          <li><Link to="/home#food-tracker">Food Tracker</Link></li>
          <li><Link to="/home#recipes">Recipes</Link></li>

          <li class="menu-has-children"><a href="">Get Involved</a>
            <ul>
              <li><a href="#">Business</a></li>
              <li><a href="#">Individual</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
          
          {
                                 !isAuthenticated() && (
                                  <li><a href="#" onClick={this.login.bind(this)}><i className="ion-ios-contact"></i> Login/Signup</a></li>                                      
                                 )
                             }
                             {
                                 isAuthenticated() && (
                                         
                                         <li><a href="#" onClick={this.logout.bind(this)}><i className="ion-ios-contact"></i> Logout</a></li>                                      
                                         
                                     
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