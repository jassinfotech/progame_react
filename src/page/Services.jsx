// HeroSlider.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4> Services </h4>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className=" justify-content-center  mt-5" style={{ width: '18rem' }}>
                            <div className="d-flex justify-content-center">
                                <img src='../assets/images/ship8.png' />
                            </div>
                            <div className="card-body mt-2">
                                <h5 className="card-title text-center">Freight Services</h5>
                                <p className="card-text text-center mt-2">
                                    Open up new opportunities to grow your business. Enter new markets and discover new continents. We are with you, door-to-door.
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className=" justify-content-center  mt-5" style={{ width: '18rem' }}>
                            <div className="d-flex justify-content-center">
                                <img src='../assets/images/ship8.png' />
                            </div>
                            <div className="card-body mt-2">
                                <h5 className="card-title text-center">Shipping & Logistics</h5>
                                <p className="card-text text-center mt-2">
                                    Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.
                                </p>

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className=" justify-content-center  mt-5" style={{ width: '18rem' }}>
                            <div className="d-flex justify-content-center">
                                <img src='../assets/images/ship8.png' />
                            </div>
                            <div className="card-body mt-2">
                                <h5 className="card-title text-center">Business Services</h5>
                                <p className="card-text text-center mt-2">
                                    We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.
                                </p>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="row ">
                    <div className="col-lg-4 col-md-4">
                        <div className=" justify-content-center  mt-5" style={{ width: '18rem' }}>
                            <div className="d-flex justify-content-center">
                                <img src='../assets/images/ship8.png' />
                            </div>
                            <div className="card-body mt-2">
                                <h5 className="card-title text-center">Digital Technologies</h5>
                                <p className="card-text text-center mt-2">
                                    Our priority is to offer a mix of tools and
                                    insights for businesses, no matter the size of your operation, the volume of your sales or the age of your company.
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className=" justify-content-center  mt-5" style={{ width: '18rem' }}>
                            <div className="d-flex justify-content-center">
                                <img src='../assets/images/ship8.png' />
                            </div>
                            <div className="card-body mt-2">
                                <h5 className="card-title text-center">24/7 Support</h5>
                                <p className="card-text text-center mt-2">
                                  Receive support from our experts all over the world at every stage of the process, 24/7.
                                </p>

                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>

    );
};

export default Services;
