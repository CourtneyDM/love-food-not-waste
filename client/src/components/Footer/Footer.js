import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-info">
                        <h3>Waste Not</h3>
                        <p>Committed to fighting food waste and hunger.</p>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                            <li><i class="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                            <li><i class="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                            <li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h4>Contact Us</h4>
                        <p>
                            1212 Singleton Blvd <br />
                            Dallas, TX 75212<br />
                            United States <br />
                            <strong>Phone:</strong> (212) 212-1212<br />
                            <strong>Email:</strong> info@wastenot.com<br />
                        </p>

                        <div class="social-links">
                            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Sign-up here to receive the lastest news.</p>
                        <form action="" method="post">
                            <input type="email" name="email" /><input type="submit" value="Subscribe" />
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong>WasteNot</strong>. All Rights Reserved
      </div>
            <div class="credits">

                Built by <a href="https://github.com/leabney" target="_blank">Lauren Abney</a> and <a href="https://github.com/CourtneyDM" target="_blank">Courtney Montgomery</a>
            </div>
        </div>

        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    </footer>

);

export default Footer;
