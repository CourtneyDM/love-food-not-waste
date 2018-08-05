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

export default class App extends Component {
    render() {
        return (
            <Router>
                <Wrapper>
                    <Navbar />
                    <Jumbotron />
                    <div className='siteContent'>
                        <Switch>
                            <Route exact path='/login' component={ Login } />
                            <Route exact path='/signup' component={ Signup } />
                            <Route exact path='/dashboard' component={ Dashboard } />
                            <Route exact path='/AtHome/Inventory' component={ Inventory } />
                            <Route exact path='/AtHome/Recipes' component={ Recipes } />
                            <Route exact path='/Educate/FoodWaste' component={ FoodWaste } />
                            <Route exact path='/Educate/Hunger' component={ Hunger } />
                            <Route exact path='/GetInvolved/FoodSupplier' component={ FoodSupplier } />
                            <Route exact path='/GetInvolved/Individual' component={ Individual } />
                            <Route exact path='/GetInvolved/Resources' component={ Resources } />
                            <Route exact path='/' component={ Home } />
                            <Route component={ NoMatch } />
                        </Switch>
                    </div>
                    <Footer />
                </Wrapper>
            </Router>
        );
    }
}