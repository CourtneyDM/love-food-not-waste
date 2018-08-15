import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-6 footer-info">
                        <h3>Waste Not</h3>

                        <p>Committed to fighting food waste and hunger.</p>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h4>Contact Us</h4>
                        <p>
                            1212 Singleton Blvd <br />
                            Dallas, TX 75212<br />
                            United States <br />
                            <strong>Phone:</strong> (212) 212-1212<br />
                            <strong>Email:</strong> info@wastenot.com<br />
                        </p>

                        <div className="social-links">
                            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Sign-up here to receive the lastest news.</p>
                        <form action="" method="post">
                            <input type="email" name="email" /><input type="submit" value="Subscribe" />
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong>WasteNot</strong>. All Rights Reserved
      </div>
            <div className="credits">

                Built by <a href="https://github.com/leabney" target="_blank">Lauren Abney</a> and <a href="https://github.com/CourtneyDM" target="_blank">Courtney Montgomery</a>
            </div>
        </div>

        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </footer>

);

export default Footer;
