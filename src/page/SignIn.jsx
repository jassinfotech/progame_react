

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
    return (
        <body style={{ backgroundColor: '#ebf2fb' }}>
            <div className="container c">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <h1 className="let">
                            Sign In
                        </h1>
                        <p className="text">Make your booking experience excellent</p>

                        <label htmlFor="email" className="mb-2 l mt-5">Email</label><br/>
                        <input type="email" id="email" className="rounded-input mb-4 mt-2 ll w-100"/><br/>

                        <label htmlFor="number" className="mb-2 l">Phone</label><br/>
                        <input type="number" id="number" className="rounded-input mb-3 ll w-100"/><br/>

                        <p className="text-end for">Forgot Password</p>

                        <div className="d-grid gap-2 mt-5">
                            <button type="button" className="btn btn-primary reg">Sign In</button>
                        </div>
                        <p className="text-center mt-3">Already have an User? <span className="text-primary">Sign Up</span></p>
                    </div>

                    <div className="col-md-6">
                    <img src='../assets/images/Rectangle2.png'className="w-100" height="700" alt="Mask Group"/>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default SignIn;
