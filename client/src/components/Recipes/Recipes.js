import React from "react";
import { Link } from 'react-router-dom';
import "./Recipes.css";

const Recipes = () => (
    <section id="recipes" className="section-bg" >

        <div className="container">

            <header className="section-header">
                <h3 className="section-title">Recipes</h3>
                <p>Need ideas to help cut food waste?  Browse featured recipes below or click to search recipes by ingredients you have on hand.</p>
                <Link className="cta-btn" to="/Recipes">More Recipes</Link>

            </header>

            <div className="row portfolio-container">

                <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/portfolio/app1.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="ion ion-eye"></i></a>
                            <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="#">Beet Greens</a></h4>
                            <p>App</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/portfolio/web3.png" className="img-fluid" alt="" />
                            <a href="/assets/images/portfolio/web3.png" className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye"></i></a>
                            <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="#">Carrots &amp; Potatoes</a></h4>
                            <p>Web</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/portfolio/app2.png" className="img-fluid" alt="" />
                            <a href="/assets/images/portfolio/app2.png" className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i className="ion ion-eye"></i></a>
                            <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="#">Chicken Bones</a></h4>
                            <p>App</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/portfolio/card2.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/portfolio/card2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i className="ion ion-eye"></i></a>
                            <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="#">Potato Peels</a></h4>
                            <p>Card</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/portfolio/web2.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/portfolio/web2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i className="ion ion-eye"></i></a>
                            <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="#">Yogurt</a></h4>
                            <p>Web</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/portfolio/app3.png" className="img-fluid" alt="" />
                            <a href="/assets/images/portfolio/app3.png" className="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i className="ion ion-eye"></i></a>
                            <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="#">Cilantro</a></h4>
                            <p>App</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/portfolio/card1.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/portfolio/card1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i className="ion ion-eye"></i></a>
                            <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="#">Cheese Rinds</a></h4>
                            <p>Card</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/portfolio/card3.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/portfolio/card3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i className="ion ion-eye"></i></a>
                            <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="#">Onions, Herbs, Veggies, Potatoes</a></h4>
                            <p>Card</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/portfolio/web1.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/portfolio/web1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye"></i></a>
                            <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="#">Strawberries</a></h4>
                            <p>Web</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
);

export default Recipes;