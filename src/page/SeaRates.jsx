// HeroSlider.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SeaRates = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 col-md-6">
                      <div className="backgrou_udimg">
                       <h1>SeaRates today</h1>
                       <p>The lowest rates. The shortest transit times. SeaRates is the largest tariff search engine in the world for international shipping</p>
                       <p>We compare all available cargo delivery options at your request and arrange their transportation and insurance.</p>
                       <p>We provide transparency and control, the cheapest price and the fastest transit time.</p>
                      </div>
                     </div>
                     <div className="col-lg-6 col-md-6">
                     
                     <img src='../assets/images/sipe.png' className='h-50 w-100' />
                     <div className="backgrou_udimg2">
                       <h1>Part of DP World</h1>
                       <p>Rest assured that your cargo is in safe hands when <br/>you book with SeaRates by DP World.</p>
                      </div>
                     </div>

                 


                </div>
               
            </div>
        </div>

    );
};

export default SeaRates;
