import React, { Component } from "react";
import { Link } from 'react-router-dom';
import About from '../components/About';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Facts from '../components/Facts';
<<<<<<< HEAD
import CalltoAction from '../components/CalltoAction';
=======
import FoodTracker from '../components/FoodTracker';
>>>>>>> 2933083952a67dbcfc00fda8f80cfb31347cdd32
import Recipes from '../components/Recipes';
import { CardWithImage, CardDeck } from '../components/Card';
import { List, ListItem } from '../components/List';

export class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Features/>
                <About/>
                <Facts/>
<<<<<<< HEAD
                <CalltoAction auth={this.props.auth}/>
=======
                <FoodTracker auth={this.props.auth}/>
>>>>>>> 2933083952a67dbcfc00fda8f80cfb31347cdd32
                <Recipes/>
                
            </div>
        )
    };
};