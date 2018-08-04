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
<<<<<<< HEAD
                            <Route exact path='/' component={ Home } />
                            <Route path='/:login' component={ Login } />
                            <Route path='/:signup' component={ Signup } />
                            <Route path='/:dashboard' component={ Dashboard } />
                            <Route path='/:AtHome/Inventory' component={ Inventory } />
                            <Route path='/AtHome/Recipes' component={ Recipes } />
                            <Route path='/Educate/FoodWaste' component={ FoodWaste } />
                            <Route path='/Educate/Hunger' component={ Hunger } />
                            <Route path='/GetInvolved/FoodSupplier' component={ FoodSupplier } />
                            <Route path='/GetInvolved/Individual' component={ Individual } />
                            <Route path='/GetInvolved/Resources' component={ Resources } />
=======
                            <Route exact path={ '/' } component={ Home } />
                            <Route path={ `${match.params}/login` } component={ Login } />
                            <Route path={ `${match.params}/signup` } component={ Signup } />
                            <Route path={ '/:dashboard' } component={ Dashboard } />
                            <Route path={ '/:AtHome/Inventory' } component={ Inventory } />
                            <Route path={ '/AtHome/Recipes' } component={ Recipes } />
                            <Route path={ '/Educate/FoodWaste' } component={ FoodWaste } />
                            <Route path={ '/Educate/Hunger' } component={ Hunger } />
                            <Route path={ '/GetInvolved/FoodSupplier' } component={ FoodSupplier } />
                            <Route path={ '/GetInvolved/Individual' } component={ Individual } />
                            <Route path={ '/GetInvolved/Resources' } component={ Resources } />
>>>>>>> 3304935d8f77029f8f79d0678a7c04ad0a85a458
                            <Route component={ NoMatch } />
                        </Switch>
                    </div>
                    <Footer />
                </Wrapper>
            </Router>
        );
    }
}