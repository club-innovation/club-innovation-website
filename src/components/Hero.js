import React from "react";

import hero_shape_1 from "../img/hero/hero-shape-1.png";
import dataImg from "../img/stickers/data.png";

function Hero() {
    return (
        <section className="hero-wrap style1">
            <img
                src={hero_shape_1}
                alt="background Hero"
                className="hero-shape-one"
            />
            <div className="container">
                <div className="row align-items-center gx-5">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <span
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="200"
                            >
                                Our WebSite
                            </span>
                            <h1
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                            >
                                Welcome To Club Innovation
                            </h1>
                            <p
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="400"
                            >
                                Innovation Club where students with different
                                interests such as computing. Innovation is
                                responsible for conducting programming events
                                for the students of Emsi Marrakech.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-img-slider owl-carousel">
                            <div className="nft-item">
                                <img src={dataImg} alt="data" />
                            </div>
                            <div className="nft-item">
                                <img src={dataImg} alt="data 2" />
                            </div>
                            <div className="nft-item">
                                <img src={dataImg} alt="data 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
