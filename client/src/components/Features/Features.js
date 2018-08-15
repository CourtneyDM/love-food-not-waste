import React from "react";
import "./Features.css";

const Features = () => (
    <section id="featured-services">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 box">
                    <i className="ion-ios-cart"></i>

                    <h4 className="title"><a href="">Track Your Food</a></h4>
                    <p className="description">Up to 40% of the food produced in the U.S. is wasted. Yet, 1 in 6 people are going hungry.</p>
                </div>

                <div className="col-lg-4 box box-bg">
                    <i className="ion-ios-heart"></i>
                    <h4 className="title"><a href="">Find Recipes</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>

                <div className="col-lg-4 box">
                    <i className="ion-ios-body"></i>
                    <h4 className="title"><a href="">Get Involved</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>

            </div>
        </div>
    </section>
);

export default Features;