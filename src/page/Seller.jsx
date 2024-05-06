import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Seller = () => {
  
    return (
        <body style={{ backgroundColor: '#ebf2fb' }}>
            <div className="container c">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <h1 className="let">
                            Are you a buyer or seller?
                        </h1>
                        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesett<br/>
                            Lorem Ipsum has been the industry</p>

                        <div className="row mt-5">
                            <div className="col-md-6">
                                <button type="button" className="btn btn-primary bt"> <i className="fa-solid fa-bag-shopping"></i> Buyer</button>
                            </div>

                            <div className="col-md-6">
                                <button type="button" className="btn btt"> <i className="fa-solid fa-tag"></i> Seller</button>
                            </div>
                        </div>

                        <label htmlFor="text" className="mb-2 l mt-5">Send Invitation</label><br/>
                        <input type="text" id="text" className="rounded-input mb-4 mt-2 ll" defaultValue="Cheyenne_Wehner@gmail.com"/><br/>

                        <div className="d-grid gap-2 mt-4">
                            <button type="button" className="btn btn-primary reg">Send invitation</button>
                        </div>
                    </div>

                    <div className="col-md-6">
                    <img src='../assets/images/Rectangle2.png' className="w-100" height="700" alt="Rectangle 5025"/>
                    </div>
                </div>
            </div>
        </body>
    );
};

  


export default Seller;
