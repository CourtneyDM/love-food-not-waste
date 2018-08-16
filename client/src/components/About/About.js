import React from "react";
import "./About.css";

const About = () => (
    <section name="about" id="about">
      <div className="container">

        <header className="section-header">
          <h3>About</h3>
          <p>Waste Not is a Dallas, TX based organization committed to tackling two big problems that go hand in hand -  food waste and hunger.  We serve the greater Dallas area by educating consumers, providing easy solutions for cutting food waste and resources for fighting hunger.</p>
        </header>

        <div className="row about-cols">

          <div className="col-md-4 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src="/assets/images/about/about-waste.jpg" alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-ios-nutrition"></i></div>
              </div>
              <h2 className="title">Food Waste</h2>
              <p>
                Did you know that between 30 to 40% of food in the US is wasted each year? That amounts to about $165 billion dollars we are throwing in the trash or about $2,200 per family of four.  That's like throwing away 24 boxes of cereal each month!
                We believe we can do better!  
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-col">
              <div className="img">
                <img src="/assets/images/about/about-hunger.jpg" alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-android-restaurant"></i></div>
              </div>
              <h2 className="title">Hunger</h2>
              <p>
                49 million Americans struggle to put food on the table.  1 in 6 are hungry.  That statistic jumps even higher among minorities.  It's really shocking, especially considering it's not due to a lack of food.  We think instead of tossing 30-40% of our food, we should be using it to fight hunger! 
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
                <img src="/assets/images/about/about-vision.jpg" alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-ios-eye-outline"></i></div>
              </div>
              <h2 className="title">Our Vision</h2>
              <p>
                We see a future where we approach food smarter.  At Waste Not, we love food and don't want to see it wind up in the trash - especially when so many people in our community are going hungry.  Our aim is to change the way think about food and to make it easy to donate to those in need.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
);

export default About;