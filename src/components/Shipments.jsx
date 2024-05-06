// Shipments.js

import React from 'react';

function Shipments() {
    return (
        <div className="sh-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center py-4">
                        <h1>
                             A Single System For All <span> Your Shipments</span>
                        </h1>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="">
                                <div className="d-flex">
                                    <div className="icon_box">
                                        <div className="icon">
                                            <img src='../assets/images/icon1.svg' />
                                        </div></div>
                                    <div className="heading">Simplify Workflows</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Step out of the messy reality of calls, faxes, and endless emails and into a new world, where everything is connected to a single platform — suppliers, shippers, customs, ports, and more.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="">
                                <div className="d-flex">
                                    <div className="icon_box"><div className="icon"><img src='../assets/images/icon2.svg' /></div></div>
                                    <div className="heading">Coordinate Confidence</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Step out of the messy reality of calls, faxes, and endless emails and into a new world, where everything is connected to a single platform — suppliers, shippers, customs, ports, and more.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="">
                                <div className="d-flex ">
                                    <div className="icon_box"><div className="icon"><img src='../assets/images/icon3.svg' /></div></div>
                                    <div className="heading">Make Smarter Decisions</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Step out of the messy reality of calls, faxes, and endless emails and into a new world, where everything is connected to a single platform — suppliers, shippers, customs, ports, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shipments;
