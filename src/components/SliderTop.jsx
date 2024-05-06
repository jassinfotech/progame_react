import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SliderTop extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,

      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 2,

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
      <div>
        <Slider  {...settings}>
          <div className="slide-image">
            <img
              src="../assets/images/img2.svg"
              alt="Hero"
              className="img-fluid"
            />
          </div>
          <div className="slide-image">
            <img src="../assets/images/slide2.svg" alt="Hero" className="img-fluid"
            />
          </div>
          <div className="slide-image center">
            <img
              src="../assets/images/img2.svg"
              alt="Hero"
              className="img-fluid"
            />
          </div>
          <div className="slide-image">
            <img
              src="../assets/images/slide2.svg"
              alt="Hero"
              className="img-fluid"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
