import React from "react";

import logo from "../img/logo-white.png";

function NavBar() {
    return (
        <header className="header-wrap style1">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="logo" />
                    </a>
                    <div
                        className="collapse navbar-collapse main-menu-wrap"
                        id="navbarSupportedContent"
                    >
                        <div className="menu-close d-lg-none">
                            <a href="#">
                                <i className="ri-close-line"></i>
                            </a>
                        </div>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Learn
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Members
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="mobile-bar-wrap">
                    <div className="mobile-menu d-lg-none">
                        <a href="#">
                            <i className="ri-menu-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
