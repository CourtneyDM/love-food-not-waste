import React from "react";
import "./Features.css";

const Features = () => (
<section id="featured-services">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 box">
          <i class="ion-ios-cart"></i>
          
            <h4 class="title"><a href="">Track Your Food</a></h4>
            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>

          <div class="col-lg-4 box box-bg">
          <i class="ion-ios-heart"></i>
            <h4 class="title"><a href="">Find Recipes</a></h4>
            <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>

          <div class="col-lg-4 box">
            <i class="ion-ios-body"></i>
            <h4 class="title"><a href="">Get Involved</a></h4>
            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>

        </div>
      </div>
    </section>
);

export default Features;