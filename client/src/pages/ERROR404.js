import React, { Component } from 'react';


const $ = require('jquery');

export class NoMatch extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        $('#header').addClass('header-fill');
        
    }

    componentWillUnmount() {
        $('#header').removeClass('header-fill');
    }

    render() {
        return (
            <section name="notFound" id="notFound">
            <div className="container text-center">
      
              <header className="section-header">
                <h3>404</h3>
                <p>Sorry!  We cannot find that page.  Either something went wrong or the page no longer exists.</p>
                <a className="cta-btn" href="/">Home</a>
              </header>
              </div>
              </section>
        );
    };
};