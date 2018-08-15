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
           
            <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/recipes/recipe1.png" className="img-fluid" alt="" />
                            <a href="/assets/images/recipes/recipe1-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Nearly Sour Milk" title="Preview"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="/assets/images/recipes/recipe1-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Nearly Sour Milk" title="Preview">Nearly Sour Milk</a></h4>
                            <p>Sour Milk Pancakes</p>
                        </div>
                    </div>
                </div>
                

                <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/recipes/recipe2.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/recipes/recipe2-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Overripe Avocados" title="Preview"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="/assets/images/recipes/recipe2-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Overripe Avocados" title="Preview">Overripe Avocados</a></h4>
                            <p>Buried Avocado Chocolate Mousse</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/recipes/recipe3.png" className="img-fluid" alt="" />
                            <a href="/assets/images/recipes/recipe3-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Chicken Bones" title="Preview"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="/assets/images/recipes/recipe3-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Chicken Bones" title="Preview">Chicken Bones</a></h4>
                            <p>Blonde Chicken Stock</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/recipes/recipe4.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/recipes/recipe4-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Potato Peels" title="Preview"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="/assets/images/recipes/recipe4-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Potato Peels" title="Preview">Potato Peels</a></h4>
                            <p>Rustic Potato Chips</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/recipes/recipe5.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/recipes/recipe5-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Yogurt" title="Preview"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="/assets/images/recipes/recipe5-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Yogurt" title="Preview">Yogurt</a></h4>
                            <p>Tandoori Marinade</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/recipes/recipe6.png" className="img-fluid" alt="" />
                            <a href="/assets/images/recipes/recipe6-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Stale Bread" title="Preview"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="/assets/images/recipes/recipe6-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Stale Bread" title="Preview">Stale Bread</a></h4>
                            <p>Panzanella</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/recipes/recipe7.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/recipes/recipe7-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Cheese Rinds" title="Preview"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="/assets/images/recipes/recipe7-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Cheese Rinds" title="Preview">Cheese Rinds</a></h4>
                            <p>Fromage Fort</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/recipes/recipe8.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/recipes/recipe8-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Onions, Herbs, Veggies, Potatoes" title="Preview"><i className="ion ion-android-open"></i></a>
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="/assets/images/recipes/recipe8-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Onions, Herbs, Veggies, Potatoes" title="Preview">Onions, Herbs, Veggies, Potatoes</a></h4>
                            <p>Scraps Falafel</p>
                        </div>
                    </div>
                </div>

               <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                    <div className="portfolio-wrap">
                        <figure>
                            <img src="/assets/images/recipes/recipe9.jpg" className="img-fluid" alt="" />
                            <a href="/assets/images/recipes/recipe9-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Browned Bananas"><i className="ion ion-android-open"></i></a>
                           
                        </figure>

                        <div className="portfolio-info">
                            <h4><a href="/assets/images/recipes/recipe9-detail.jpg" className="link-preview" data-lightbox="recipe" data-title="Browned Bananas">Browned Bananas</a></h4>
                            <p>Banana Bread</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
);

export default Recipes;