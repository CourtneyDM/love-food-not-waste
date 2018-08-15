import React, { Component } from "react";
import About from '../components/About';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Facts from '../components/Facts';
import FoodTracker from '../components/FoodTracker';
import Recipes from '../components/Recipes';
import MapComponent from '../components/Maps/MapComponent';

export class Home extends Component {

    render() {
        return (
            <div>
                <Carousel />
                <Features />
                <About />
                <Facts />
                <FoodTracker auth={this.props.auth} />
                <Recipes auth={this.props.auth} />
                <section id="localResources" className="section-bg" >

                    <div className="container">

                        <header className="section-header">
                            <h3 className="section-title">Donate</h3>
                            <p>Click on one of the map markers below to find your nearest food donation center.</p>
</header>
                            <MapComponent />
                    </div>
                </section>
            </div>
                )
            };
};