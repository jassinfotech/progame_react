import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Feature() {
   

    return (
        <div className='container'>
           
            <div className='row'>
                <div className='col-lg-3 col-md-3 feature_fliter_box p-4'>
                    <h2>Types of Container</h2>
                    <div className='p-3'>
                        <div className="form-check form-check_f">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                20' Standard
                            </label>
                        </div>
                        <div className="form-check form-check_">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                                40' Standard
                            </label>
                        </div>
                        <div className="form-check form-check_">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label" for="flexRadioDefault3">
                                40' High Cube
                            </label>
                        </div>
                        <div className="form-check form-check_">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            <label className="form-check-label" for="flexRadioDefault4">
                                20’ Refrigerated
                            </label>
                        </div>
                        <div className="form-check form-check_">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                            <label className="form-check-label" for="flexRadioDefault5">
                                40’ Refrigerated
                            </label>
                        </div>
                        <div className="form-check form-check_">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                            <label className="form-check-label" for="flexRadioDefault6">
                                45’ High Cube
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                    <div className='feature_box p-4 pb-0 mb-2'>
                        <div className='row'>
                            <div className='col-lg-9 col-md-9'>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12'>
                                        <div className='d-flex'>
                                            <div className='image_box_f'>
                                                <img src='../assets/images/featuch.png' />
                                            </div>
                                            <div className='text_box_f'>
                                                <h3>JJ SHIPPING</h3>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between center_text_f'>
                                            <div><h3>Ho Chi Minh</h3></div>
                                            <div>
                                                <div className='d-flex'>
                                                    <img src='../assets/images/ship.svg' className='px-2'></img>
                                                    12 days
                                                </div>
                                            </div>
                                            <div><h3>Mumbai</h3></div>
                                        </div>
                                        <div className='border_f'></div>

                                        <div className='d-flex justify-content-between center_text_f py-3'>
                                            <div>
                                                <div className='d-flex'>
                                                    Services  <img src='../assets/images/truck.svg' className='px-2'></img>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dropdown dropdown_f px-0">
                                                    <a className="btn dropdown-toggle px-0">
                                                        View Details
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3'>
                                <div className='booking'>
                                    <div className='d-flex'>
                                        <img src='../assets/images/calendar_f.svg' className='px-2'></img> <span><b>Valid : </b> 2023-11-303</span>
                                    </div>
                                </div>
                                <div className='booking'>
                                    <div className='d-flex'>
                                        <img src='../assets/images/ids.svg' className='px-2'></img> <span><b>ID: </b> ID: Nov 07, 2023</span>
                                    </div>
                                </div>
                                <div className='booking'>
                                    <div className='d-flex'>
                                        <img src='../assets/images/leef.png' className='px-2'></img> <span> 695.15 kg CO2</span>
                                    </div>
                                </div>
                                <div className='booking_butoon'>
                                    <div className='d-flex justify-content-between'>
                                        <h2>$ 2,205</h2>
                                        <a className="button_booking" href="#">Book Now</a>
                                        <div className='icon_box_f'>
                                            <img src='../assets/images/lblue.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='feature_box p-4 pb-0 mb-2'>
                        <div className='row'>
                            <div className='col-lg-9 col-md-9'>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12'>
                                        <div className='d-flex'>
                                            <div className='image_box_f'>
                                                <img src='../assets/images/featuch.png' />
                                            </div>
                                            <div className='text_box_f'>
                                                <h3>JJ SHIPPING</h3>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between center_text_f'>
                                            <div><h3>Ho Chi Minh</h3></div>
                                            <div>
                                                <div className='d-flex'>
                                                    <img src='../assets/images/ship.svg' className='px-2'></img>
                                                    12 days
                                                </div>
                                            </div>
                                            <div><h3>Mumbai</h3></div>
                                        </div>
                                        <div className='border_f'></div>

                                        <div className='d-flex justify-content-between center_text_f py-3'>
                                            <div>
                                                <div className='d-flex'>
                                                    Services  <img src='../assets/images/truck.svg' className='px-2'></img>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dropdown dropdown_f px-0">
                                                    <a className="btn dropdown-toggle px-0">
                                                        View Details
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3'>
                                <div className='booking'>
                                    <div className='d-flex'>
                                        <img src='../assets/images/calendar_f.svg' className='px-2'></img> <span><b>Valid : </b> 2023-11-303</span>
                                    </div>
                                </div>
                                <div className='booking'>
                                    <div className='d-flex'>
                                        <img src='../assets/images/ids.svg' className='px-2'></img> <span><b>ID: </b> ID: Nov 07, 2023</span>
                                    </div>
                                </div>
                                <div className='booking'>
                                    <div className='d-flex'>
                                        <img src='../assets/images/leef.png' className='px-2'></img> <span> 695.15 kg CO2</span>
                                    </div>
                                </div>
                                <div className='booking_butoon'>
                                    <div className='d-flex justify-content-between'>
                                        <h2>$ 2,205</h2>
                                        <a className="button_booking" href="#">Book Now</a>
                                        <div className='icon_box_f'>
                                            <img src='../assets/images/lblue.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='feature_box p-4 pb-0 mb-2'>
                        <div className='row'>
                            <div className='col-lg-9 col-md-9'>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12'>
                                        <div className='d-flex'>
                                            <div className='image_box_f'>
                                                <img src='../assets/images/featuch.png' />
                                            </div>
                                            <div className='text_box_f'>
                                                <h3>JJ SHIPPING</h3>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between center_text_f'>
                                            <div><h3>Ho Chi Minh</h3></div>
                                            <div>
                                                <div className='d-flex'>
                                                    <img src='../assets/images/ship.svg' className='px-2'></img>
                                                    12 days
                                                </div>
                                            </div>
                                            <div><h3>Mumbai</h3></div>
                                        </div>
                                        <div className='border_f'></div>

                                        <div className='d-flex justify-content-between center_text_f py-3'>
                                            <div>
                                                <div className='d-flex'>
                                                    Services  <img src='../assets/images/truck.svg' className='px-2'></img>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dropdown dropdown_f px-0">
                                                    <a className="btn dropdown-toggle px-0">
                                                        View Details
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3'>
                                <div className='booking'>
                                    <div className='d-flex'>
                                        <img src='../assets/images/calendar_f.svg' className='px-2'></img> <span><b>Valid : </b> 2023-11-303</span>
                                    </div>
                                </div>
                                <div className='booking'>
                                    <div className='d-flex'>
                                        <img src='../assets/images/ids.svg' className='px-2'></img> <span><b>ID: </b> ID: Nov 07, 2023</span>
                                    </div>
                                </div>
                                <div className='booking'>
                                    <div className='d-flex'>
                                        <img src='../assets/images/leef.png' className='px-2'></img> <span> 695.15 kg CO2</span>
                                    </div>
                                </div>
                                <div className='booking_butoon'>
                                    <div className='d-flex justify-content-between'>
                                        <h2>$ 2,205</h2>
                                        <a className="button_booking" href="#">Book Now</a>
                                        <div className='icon_box_f'>
                                            <img src='../assets/images/lblue.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Feature