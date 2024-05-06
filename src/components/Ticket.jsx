import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const Ticket = () => {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [showFromDropdown, setShowFromDropdown] = useState(false);
    const [showToDropdown, setShowToDropdown] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date()); // Set default date to today
    const [showPopup, setShowPopup] = useState(false);
    const [activeTab, setActiveTab] = useState('tab1');
    let location = [
        {
            "name": "Chennai",
            "latitude": 13.0825,
            "longitude": 80.275,
            "country": "IN",
            "population": 11324000,
            "is_capital": false
        },
        {
            "name": "Chengdu",
            "latitude": 30.6636,
            "longitude": 104.067,
            "country": "CN",
            "population": 11309000,
            "is_capital": false
        },
        {
            "name": "Yancheng",
            "latitude": 33.3936,
            "longitude": 120.134,
            "country": "CN",
            "population": 7260240,
            "is_capital": false
        },
        {
            "name": "Liaocheng",
            "latitude": 36.45,
            "longitude": 115.983,
            "country": "CN",
            "population": 5955300,
            "is_capital": false
        },
        {
            "name": "Yuncheng",
            "latitude": 35.0304,
            "longitude": 110.998,
            "country": "CN",
            "population": 4860000,
            "is_capital": false
        }
    ]


    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleFromLocationChange = (event) => {
        const input = event.target.value;
        setFromLocation(input);
        setShowFromDropdown(!!input);
    };

    const handleToLocationChange = (event) => {
        const input = event.target.value;
        setToLocation(input);
        setShowToDropdown(!!input);
    };

    const handleFromLocationSelect = (selectedLocation) => {
        setFromLocation(selectedLocation.name);
        setShowFromDropdown(false);

    };

    const handleToLocationSelect = (selectedLocation) => {
        setToLocation(selectedLocation.name);
        setShowToDropdown(false);

    };

    const getMatchingLocations = (input) => {
        return location.filter(loc => loc.name.toLowerCase().includes(input.toLowerCase()));
    };

    return (
        <div className="pt-5 fixtop">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 col-md-6 col-12 mx-auto text-center pb-3">
                        <div className="btn-group btn-group_2">
                            <button type="button" className="btn active">Rates</button>
                            <button type="button" className="btn">Tracking</button>
                            <button type="button" className="btn">Schedules</button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-dark_req">Request a quote  <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="bg_find">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="d-flex mobile">
                                <div className="icon_lo">
                                    <img src='../assets/images/map.svg' alt="map icon" />
                                </div>
                                <div className="lo-dropdown">
                                    <h4>From</h4>
                                    <input
                                        className='input_lo'
                                        type='text'
                                        placeholder='Enter your location'
                                        value={fromLocation}
                                        onChange={handleFromLocationChange}
                                    />
                                    {showFromDropdown && (
                                        <ul className='boxDropdown'>
                                            {getMatchingLocations(fromLocation).map((loc, index) => (
                                                <li key={index} onClick={() => handleFromLocationSelect(loc)}>
                                                    {loc.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <div className="d-flex mobile">
                                <div className="icon_lo">
                                    <img src='../assets/images/map.svg' alt="map icon" />
                                </div>
                                <div className="lo-dropdown">
                                    <h4>To</h4>
                                    <input
                                        className='input_lo'
                                        type='text'
                                        placeholder='Enter your location'
                                        value={toLocation}
                                        onChange={handleToLocationChange}
                                    />

                                    {showToDropdown && (
                                        <ul className='boxDropdown'>
                                            {getMatchingLocations(toLocation).map((loc, index) => (
                                                <li key={index} onClick={() => handleToLocationSelect(loc)}>
                                                    {loc.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <div className="d-flex mobile">
                                <div className="icon_lo">
                                    <img src='../assets/images/calendar.svg' alt="map icon" />
                                </div>
                                <div className="lo-dropdown">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        dateFormat="dd MMMM yyyy"
                                        placeholderText="Select a date"
                                        className='input_lo'
                                        customInput={<CustomDatePickerInput />}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <div className="d-flex mobile justify-content-between">
                                <div className="d-flex" onClick={togglePopup}>
                                    <div className="icon_lo">
                                        <img src="../assets/images/plan.svg" alt="calendar icon" />
                                    </div>
                                    <div className="lo-dropdown">
                                        <span className="input_lo">FCL, 20st</span>
                                    </div>
                                </div>
                                {showPopup && (
                                    <div className="Shipping_popup">
                                        <div >
                                            <div className="mt-3">
                                                <h6>Shipping Type</h6>
                                            </div>
                                            <div className="d-flex">
                                                <div>
                                                    <ul className="nav nav-tabs bg_color mb-2">
                                                        <li className="nav-item">
                                                            <button
                                                                className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                                                                onClick={() => handleTabClick('tab1')}
                                                            >
                                                                SEA
                                                            </button>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button
                                                                className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                                                                onClick={() => handleTabClick('tab2')}
                                                            >
                                                                LAND
                                                            </button>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button
                                                                className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                                                                onClick={() => handleTabClick('tab3')}
                                                            >
                                                                AIR
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>

                                            {/* Content for each tab */}
                                            <div className="tab-content type-ayra">
                                                <div className={`tab-pane py-3 fade ${activeTab === 'tab1' ? 'show active' : ''}`} id="tab1Content">
                                                    <h6>Shipping Type</h6>
                                                    <div className="form-floating">
                                                        <select className="border w-100 select-fild" id="floatingSelect" >
                                                            <option selected>Full Container load</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>

                                                    <div className="mt-2">
                                                        <h6> Type</h6>
                                                    </div>

                                                    <div className="form-floating">
                                                        <select className="border w-100 select-fild" id="floatingSelect" >
                                                            <option selected>Full Container load</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} id="tab2Content">
                                                    {/* Content for Tab 2 */}
                                                    <p>Tab 2 Content Goes Here</p>
                                                </div>
                                                {/* Add more tab content as needed */}
                                            </div>
                                        </div>
                                        <button className='btn btn-primary w-100 mt-3'> Select</button>
                                    </div>
                                )}
                                <div className=''>
                                    <button className="icon_search">
                                        <img src="../assets/images/searchIcon.svg" alt="search icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const CustomDatePickerInput = ({ value, onClick }) => (
    <button className="btn text_of-date" onClick={onClick}>
        {value ? format(new Date(value), 'dd MMMM yyyy') : 'Select a date'}
    </button>
);
export default Ticket;