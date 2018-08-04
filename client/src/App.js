import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Dashboard, Home, NoMatch } from './pages';
import { Login, Signup } from './pages/Authentication';
import { FoodWaste, Hunger } from './pages/Educate';
import { Inventory, Recipes } from './pages/AtHome';
import { FoodSupplier, Individual, Resources } from './pages/GetInvolved';
// import {Chatroom, Comment, Message} from './pages/GetInvolved';

export default class App extends Component {

    render() {
        return (
            <Router>
                <Wrapper>
                    <Navbar />
                    <Jumbotron />
                    <div className='siteContent'>
                        <Switch>
                            <Route exact path={ '/' } component={ Home } />
                            <Route path={ '/login' } component={ Login } />
                            <Route path={ '/signup' } component={ Signup } />
                            <Route path={ '/dashboard' } component={ Dashboard } />
                            <Route path={ '/AtHome/Inventory' } component={ Inventory } />
                            <Route path={ '/AtHome/Recipes' } component={ Recipes } />
                            <Route path={ '/Educate/FoodWaste' } component={ FoodWaste } />
                            <Route path={ '/Educate/Hunger' } component={ Hunger } />
                            <Route path={ '/GetInvolved/FoodSupplier' } component={ FoodSupplier } />
                            <Route path={ '/GetInvolved/Individual' } component={ Individual } />
                            <Route path={ '/GetInvolved/Resources' } component={ Resources } />
                            <Route component={ NoMatch } />
                        </Switch>
                    </div>
                    <Footer />
                </Wrapper>
            </Router>
        );
    }
}