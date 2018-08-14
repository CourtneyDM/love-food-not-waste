import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home, NoMatch } from './pages';
import { Dashboard } from './pages/Dashboard';
import { FoodTracker } from './pages/FoodTracker';
import { Recipes } from './pages/Recipes';
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
                    <div className='siteContent'>
                        <Switch>
                            

                            <Route exact path='/Dashboard' component={Dashboard} />
                            <Route exact path='/FoodTracker' render={(props) => <FoodTracker auth={auth} {...props} />} />
                            <Route exact path='/Recipes' component={Recipes} />

                            <Route exact path='/GetInvolved/FoodSupplier' component={FoodSupplier} />
                            <Route exact path='/GetInvolved/Individual' component={Individual} />
                            <Route exact path='/GetInvolved/Resources' component={Resources} />
                            <Route exact path='/' render={(props) => <Home auth={auth} {...props} />} />

                            <Route exact path='/home' render={(props) => <Home auth={auth} {...props} />} />
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