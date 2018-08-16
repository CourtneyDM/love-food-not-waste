import React from "react";
import "./Features.css";

const Features = () => (
    <section id="featured-services">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 box">
                    <i className="ion-ios-cart"></i>

                    <h4 className="title"><a href="">Track Your Food</a></h4>
                    <p className="description">Don't wind up throwing food in the trash just because you forgot about it or didn't understand storage guidelines. Use our food tracker to help keep a handle on your consumption!</p>
                </div>

                <div className="col-lg-4 box box-bg">
                    <i className="ion-ios-heart"></i>
                    <h4 className="title"><a href="">Find Recipes</a></h4>
                    <p className="description">Don't know what to do with your scraps or the random items in your fridge?  Use our recipe search to find and save recipes you love!</p>
                </div>

                <div className="col-lg-4 box">
                    <i className="ion-ios-body"></i>
                    <h4 className="title"><a href="">Get Involved</a></h4>
                    <p className="description">Help tackle hunger in Dallas!  Use our map to locate food donation centers near you &amp; take your food there instead of letting it wind up in the trash!</p>
                </div>

            </div>
        </div>
    </section>
);

export default Features;