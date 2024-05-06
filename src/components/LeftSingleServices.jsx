// HeroSlider.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LeftSingleServices = () => {
    return (
        <div className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-lg-5">
                    <div className="serivcs-image">
                        <img src="../assets/images/serivcs1.png" alt="Hero" className="img-fluid"
                        />
                    </div>
                </div>
                <div className="col-md-7 col-lg-7">
                    <div className='single-right'>
                        <div className="single-text">
                            <h1>Join the  <span > Revolution</span>  </h1>
                            <p>Ship anywhere, sell everywhere, grow faster. Our new, end-to-end, AI-fueled technology empowers businesses to automate their supply chain from factory floor to customer door or retail store.</p>
                            <button className="btn btn-primary">Sign Up Now <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>

    );
};

export default LeftSingleServices;
