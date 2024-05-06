// HeroSlider.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RightSingleService = () => {
    return (
        <div className="py-5">
        <div className="container">
            <div className="row">
               
                <div className="col-md-7 col-lg-7">
                    <div className='single-left'>
                        <div className=" single-text single-text-left">
                            <h1>Launch Products on <span > Time </span>  </h1>
                            <p>Hit your release dates and nail inventory forecasting with shipment visibility, seamless in-app collaboration, and a control tower view of all the information.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-5">
                    <div className="serivcs-image_v2">
                        <img src="../assets/images/serivcs1.png" alt="Hero" className="img-fluid"
                        />
                    </div>
                </div>

            </div>
        </div>
        </div>

    );
};

export default RightSingleService;
