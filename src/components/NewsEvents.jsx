import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class NewsEvents extends Component {
    render() {
        const settings = {
            dots: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 text-center pb-5">
                            <h5 className="headding_text">  A Single System For All <span> Your Shipments</span></h5>
                        </div>
                        <div>
                            <Slider  {...settings}>
                                <div className="slide_blog">
                                    <div className="slide_blogimg"><img src="../assets/blog/blog2.svg" alt="Image 1" className="img-fluid" /> </div>
                                    <h3>VIDEO</h3>
                                    <p>Taram Revolution: A Q&A With EVP of
                                        SMB Product and Technology Parisa
                                        Sadrzadeh</p>
                                    <button>Button</button>
                                </div>
                                <div className="slide_blog">
                                    <div className="slide_blogimg"><img src="../assets/blog/blog1.svg" alt="Image 1" className="img-fluid" /> </div>
                                    <h3>VIDEO</h3>
                                    <p>Taram Revolution: A Q&A With EVP of
                                        SMB Product and Technology Parisa
                                        Sadrzadeh</p>
                                    <button>Button</button>
                                </div>
                                <div className="slide_blog">
                                    <div className="slide_blogimg"><img src="../assets/blog/blog3.svg" alt="Image 1" className="img-fluid" /> </div>
                                    <h3>VIDEO</h3>
                                    <p>Taram Revolution: A Q&A With EVP of
                                        SMB Product and Technology Parisa
                                        Sadrzadeh</p>
                                    <button>Button</button>
                                </div>
                                <div className="slide_blog">
                                    <div className="slide_blogimg"><img src="../assets/blog/blog1.svg" alt="Image 1" className="img-fluid" /> </div>
                                    <h3>VIDEO</h3>
                                    <p>Taram Revolution: A Q&A With EVP of
                                        SMB Product and Technology Parisa
                                        Sadrzadeh</p>
                                    <button>Button</button>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
