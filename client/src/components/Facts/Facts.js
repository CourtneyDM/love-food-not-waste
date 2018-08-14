import React from "react";
import "./Facts.css";

const Facts = () => (
    <section id="facts"  className="wow fadeIn">
      <div className="container">

        <header className="section-header">
          <h3>Facts</h3>
          <p>
              <img src="assets/images/facts/quote-sign-left.png" className="quote-sign-left" alt=""/>
              Getting food to our tables eats up 10% of the total U.S. energy budget, uses 50% of U.S. land and swallows 80% of freshwater consumed in the United States...and yet, 40% of it is wasted.
              <img src="assets/images/facts/quote-sign-right.png" className="quote-sign-right" alt=""/>
            </p>
        </header>

        <div className="row counters">

  				<div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">35,000,000</span>
            <p>Tons of food wasted <br/>in the US each year</p>
  				</div>

          <div className="col-lg-3 col-6 text-center">
            <span >$</span><span data-toggle="counter-up">2,200</span>
            <p>Food wasted by the average US household each year</p>
  				</div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">90</span><span >%</span>
            <p>Food thrown away too soon</p>
  				</div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">41,000,000</span>
            <p>Americans who struggle with hunger</p>
  				</div>

  			</div>

        <div className="facts-img">
          <img src="img/facts-img.png" alt="" className="img-fluid"/>
        </div>

      </div>
    </section>
);

export default Facts;