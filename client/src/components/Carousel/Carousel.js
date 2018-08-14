import React from "react";
import "./Carousel.css";

const Carousel = () => (
  <section id="intro">
    <div class="intro-container">
      <div id="introCarousel" class="carousel  slide carousel-fade" data-ride="carousel">

        <ol class="carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <div class="carousel-item active">
            <div class="carousel-background"><img src="/assets/images/intro-carousel/1.jpg" alt="" width="100%" /></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>Love Food, Fight Waste</h2>
                <a href="#featured-services" class="btn-get-started scrollto">Learn More</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background"><img src="/assets/images/intro-carousel/2.jpg" alt="" /></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>Love Food, Fight Waste</h2>
                <a href="#featured-services" class="btn-get-started scrollto">Learn More</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background"><img src="/assets/images/intro-carousel/3.jpg" alt="" /></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>Love Food, Fight Waste</h2>
                <a href="#featured-services" class="btn-get-started scrollto">Learn More</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background"><img src="/assets/images/intro-carousel/4.jpg" alt="" /></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>Love Food, Fight Waste</h2>
                <a href="#featured-services" class="btn-get-started scrollto">Learn More</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background"><img src="/assets/images/intro-carousel/5.jpg" alt="" /></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>Love Food, Fight Waste</h2>
                <a href="#featured-services" class="btn-get-started scrollto">Learn More</a>
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
    </div>
  </section>


);

export default Carousel;
