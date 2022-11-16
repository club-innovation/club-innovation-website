import React from "react";

import logo from "../img/logo-white.png";
import section_shape_1 from "../img/section-shape-1.png";

function Footer() {
    return (
        <footer className="footer-wrap bg-f pt-100 ">
            <img src={section_shape_1} alt="Image" className="section-shape" />
            <div className="container">
                <div className="row pb-75">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
                        <div className="footer-widget">
                            <a href="index.html" className="footer-logo">
                                <img src={logo} alt="Image" />
                            </a>
                            <p className="comp-desc">
                                Lorem ipsum dolor sit amet consec tetur aditonsi
                                soom isotope elit esumo tempo incidunt labore
                                dolore magna aliqu core tetur adip iscing.
                            </p>
                            <ul className="social-profile list-style style1">
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://facebook.com/"
                                    >
                                        <i className="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://twitter.com/"
                                    >
                                        <i className="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://instagram.com/"
                                    >
                                        <i className="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://linkedin.com/"
                                    >
                                        <i className="flaticon-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="copyright-text">
                    <i className="ri-copyright-line"></i>
                    <script>document.write(new Date().getFullYear())</script>.
                    All Rights Reserved By{" "}
                    <a
                        href="https://uuinc.github.io/club-innovation-website"
                        target="_blank"
                    >
                        Club Innovation Emsi Marrakech
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
