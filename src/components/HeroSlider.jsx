// HeroSlider.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSlider = () => {
    return (
        <div className='hero_bg'>
        <div className="hero-slider-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-text">
                            <h1>Your end-to-end
                                <span > supply chain,</span>  all in
                                one platform</h1>
                            <p>Send, receive, deposit, request, invest and exchange money globally
                                in multiple currencies easily, quickly and safely with great rates
                                and low fees.</p>
                            <button className="btn btn-primary">Escrow Money <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero-image">
                            <img src="../assets/images/slide1.png" alt="Hero" className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HeroSlider;
