

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    return (
        <div className="container c">
            <div className="row">
                <div className="col-md-6 mt-3">
                    <h1 className="let">
                        Let's Started
                    </h1>
                    <p className="text">Make your booking experience excellent</p>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <label htmlFor="fname" className="l">First Name</label>
                            <input type="text" id="fname" value="Sahil" className="mt-2 w-100 rounded-input mb-4 ll"/>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="lname" className="l">Last Name</label>
                            <input type="text" id="lname" value="Saifi" className="mt-2 rounded-input lll mb-4 w-100"/>
                        </div>
                    </div>

                    <label htmlFor="email" className="mb-2 l">Email</label>
                    <input type="email" id="email" className="w-100 rounded-input mb-4 mt-2 ll"/><br/>

                    <label htmlFor="number" className="mb-2 l">Phone</label>
                    <input type="number" id="number" className="w-100 rounded-input mb-4 ll"/><br/>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="pass" className="l">Password</label>
                            <input type="password" id="pass" className="mt-2 w-100 rounded-input ll"/>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <label htmlFor="retypePassword" className="l">Retype Password</label>
                            <input type="password" id="retypePassword" className="mt-2 w-100 rounded-input ll"/>
                        </div>
                    </div>
                    <div className="d-grid gap-2 mt-4">
                        <button type="button" className="btn btn-primary reg">Register</button>
                    </div>
                    <p className="text-center mt-3">Already have an User? <span className="text-primary">Sign In</span></p>
                </div>

                <div className="col-md-6">
                    <img src='../assets/images/Mask-group.png'className="w-100" height="700" alt="Mask Group"/>
                </div>
            </div>
        </div>
    );
};

export default Register;
