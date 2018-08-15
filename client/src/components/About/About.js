import React from "react";
import "./About.css";

const About = () => (
    <section name="about" id="about">
      <div className="container">

        <header className="section-header">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </header>

        <div className="row about-cols">

          <div className="col-md-4 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src="/assets/images/about/about-waste.jpg" alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-ios-nutrition"></i></div>
              </div>
              <h2 className="title"><a href="#">Food Waste</a></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-col">
              <div className="img">
                <img src="/assets/images/about/about-hunger.jpg" alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-android-restaurant"></i></div>
              </div>
              <h2 className="title"><a href="#">Hunger</a></h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
                <img src="/assets/images/about/about-vision.jpg" alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-ios-eye-outline"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Vision</a></h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
);

export default About;