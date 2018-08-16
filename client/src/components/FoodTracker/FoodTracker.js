import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./FoodTracker.css";

export class FoodTracker extends Component {
  login() {
    this.props.auth.login();
  }



  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <section id="food-tracker" className="wow fadeIn">
        <div className="container text-center">
          <h3>Food Tracker</h3>
          <p className='text-left'>Do you know how long your food lasts? The average American household wastes $2,200 of food each year - 90% of which is thrown away too soon.  Forgetting when your food expires or misinterpreting labels is a big contributer to food waste.</p>
          <p className='text-left'>  We believe we can do better! Use our food tracker to keep an inventory of items you have on hand.</p>
          {
            !isAuthenticated() && (
              <a className="cta-btn" href="#" onClick={this.login.bind(this)}>Start Tracking</a>
            )
          }
          {
            isAuthenticated() && (
              <Link className="cta-btn" to="/FoodTracker">Start Tracking</Link>
            )
          }

        </div>
      </section>
    )
  }
};

export default FoodTracker;