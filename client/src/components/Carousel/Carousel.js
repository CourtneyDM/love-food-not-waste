import React from "react";
import "./Carousel.css";

const Carousel = () => (
    <section id="intro">
        <div className="intro-container">
            <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

                <ol className="carousel-indicators"></ol>

                <div className="carousel-inner" role="listbox">

                    <div className="carousel-item active">
                        <div className="carousel-background"><img src="/assets/images/intro-carousel/1.jpg" alt="" width="100%" /></div>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2>Love Food, Fight Waste</h2>
                                <a href="#featured-services" className="btn-get-started scrollto">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-background"><img src="/assets/images/intro-carousel/2.jpg" alt="" /></div>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2>Love Food, Fight Waste</h2>
                                <a href="#featured-services" className="btn-get-started scrollto">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-background"><img src="/assets/images/intro-carousel/3.jpg" alt="" /></div>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2>Love Food, Fight Waste</h2>
                                <a href="#featured-services" className="btn-get-started scrollto">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-background"><img src="/assets/images/intro-carousel/4.jpg" alt="" /></div>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2>Love Food, Fight Waste</h2>
                                <a href="#featured-services" className="btn-get-started scrollto">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-background"><img src="/assets/images/intro-carousel/5.jpg" alt="" /></div>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2>Love Food, Fight Waste</h2>
                                <a href="#featured-services" className="btn-get-started scrollto">Learn More</a>
                            </div>
                        </div>
                    </div>

                </div>

                <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        </div>
    </section>


);

export default Carousel;
