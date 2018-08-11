import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Dashboard, Home, NoMatch } from './pages';
import { Login, Signup } from './pages/Authentication';
import { FoodWaste, Hunger } from './pages/Educate';
import { Inventory, Recipes } from './pages/AtHome';
import { FoodSupplier, Individual, Resources } from './pages/GetInvolved';
import Auth from './utils/Auth/Auth';
import Callback from './utils/Callback/Callback';
import Profile from './pages/Profile/Profile';
import history from './utils/Auth/history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

  

const App = () => (
   
            <Router history={history} >
                <Wrapper>
                    <Navbar auth={auth} />
                    <Jumbotron />
                    <div className='siteContent'>
                        <Switch>
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/signup' component={Signup} />
                            <Route exact path='/dashboard' component={Dashboard} />
                            <Route exact path='/AtHome/Inventory' render={(props) => <Inventory auth={auth} {...props} />} />
                            <Route exact path='/AtHome/Recipes' component={Recipes} />
                            <Route exact path='/Educate/FoodWaste' component={FoodWaste} />
                            <Route exact path='/Educate/Hunger' component={Hunger} />
                            <Route exact path='/GetInvolved/FoodSupplier' component={FoodSupplier} />
                            <Route exact path='/GetInvolved/Individual' component={Individual} />
                            <Route exact path='/GetInvolved/Resources' component={Resources} />
                            <Route exact path='/' component={Home} />
                            <Route exact path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
                            <Route path="/callback" render={(props) => {
                                handleAuthentication(props);
                                return <Callback {...props} />
                            }} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                    <Footer />
                </Wrapper>
            </Router>
        );

        export default App;