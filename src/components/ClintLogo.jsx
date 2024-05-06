import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ClintLogo extends Component {

    render() {
        const settings = {
            dots: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="cl-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 text-center ">
                            <h5 className="headding_text pb-5">  A Single System For All <span> Your Shipments</span></h5>
                        </div>
                        <div className="py-3">
                            <Slider {...settings}>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                                <div className="logo_cl">
                                    <img src="../assets/clints/01-dark.svg" alt="Hero" className="img-fluid" />
                                </div>
                            </Slider>
                        </div>
                        <div className="col-md-12 col-lg-12 text-center mt-5">
                        <button className="btn btn-primary">Read Their Stories <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
