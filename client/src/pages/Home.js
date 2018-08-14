import React, { Component } from "react";
import About from '../components/About';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Facts from '../components/Facts';
import FoodTracker from '../components/FoodTracker';
import Recipes from '../components/Recipes';

export class Home extends Component {
   
    render() {
        return (
            <div>
                <Carousel/>
                <Features/>
                <About/>
                <Facts/>
                <FoodTracker auth={this.props.auth}/>
                <Recipes/>
                
            </div>
        )
    };
};