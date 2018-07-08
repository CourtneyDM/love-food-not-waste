import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Wrapper } from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Inventory from './pages/Inventory';



const App = () => (

    <Router>
        <Wrapper>
            <Jumbotron />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Wrapper>
    </Router>
)

export default App;

