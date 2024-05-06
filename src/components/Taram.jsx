import React from 'react'
import SliderTop from './SliderTop'

function Taram() {
    return (
        <div className="tm-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="icon_tm">
                            <img src='../assets/images/qotes_icon.svg' />
                        </div>
                        <p className='communication'>
                            We have a dedicated space for
                            communication on each shipment,
                            reporting tools, line level invoices — all
                            of this information allows us to make
                            educated decisions.
                        </p>

                        <div className='clint_box'>
                            <div className='img_cl'>
                                <img src='../assets/images/clint_pik.svg'></img>
                            </div>
                            <div className='text_cl'>
                                <h6>Jhone Denver </h6>
                                <p>Digital Product Manager </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 m-0 p-0">
                        <div className='image_box'>
                            <img src='../assets/images/girls.svg'></img>
                        </div>
                        
                    </div>

                    <div className="col-md-4 mb-4 m-0 p-0">
                        <SliderTop/>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Taram
