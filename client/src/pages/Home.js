import React, { Component } from "react";
import { Link } from 'react-router-dom';
import About from '../components/About';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Facts from '../components/Facts';
import CalltoAction from '../components/CalltoAction';
import Recipes from '../components/Recipes';
import { CardWithImage, CardDeck } from '../components/Card';
import { List, ListItem } from '../components/List';

export class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Features />
                <About />
                <Facts />
                <CalltoAction auth={ this.props.auth } />
                <Recipes />
            </div>
        )
    };
};