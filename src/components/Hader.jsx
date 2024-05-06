
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
            <div className="container">
                <a className="navbar-brand brand-name" href="#home">TARAM</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-link_1 dropdown-toggle" href="#product" id="productDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="productDropdown">
                                <li><a className="dropdown-item" href="#product/1">Product 1</a></li>
                                <li><a className="dropdown-item" href="#product/2">Product 2</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#product/all">All Products</a></li>
                            </ul>
                        </li>

                        <li className="nav-item nav-link_1 dropdown">
                            <a className="nav-link  dropdown-toggle" href="#solution" id="solutionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solution
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="solutionDropdown">
                                <li><a className="dropdown-item" href="#solution/1">Solution 1</a></li>
                                <li><a className="dropdown-item" href="#solution/2">Solution 2</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#solution/all">All Solutions</a></li>
                            </ul>
                        </li>

                        <li className="nav-item nav-link_1 dropdown">
                            <a className="nav-link dropdown-toggle" href="#solution" id="solutionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Developers
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="solutionDropdown">
                                <li><a className="dropdown-item" href="#solution/1">Solution 1</a></li>
                                <li><a className="dropdown-item" href="#solution/2">Solution 2</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#solution/all">All Solutions</a></li>
                            </ul>
                        </li>

                        <li className="nav-item nav-link_1 dropdown">
                            <a className="nav-link dropdown-toggle" href="#solution" id="solutionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="solutionDropdown">
                                <li><a className="dropdown-item" href="#solution/1">Solution 1</a></li>
                                <li><a className="dropdown-item" href="#solution/2">Solution 2</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#solution/all">All Solutions</a></li>
                            </ul>
                        </li>

                        <li className="nav-item nav-link_1 dropdown">
                            <a className="nav-link dropdown-toggle" href="#solution" id="solutionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Company
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="solutionDropdown">
                                <li><a className="dropdown-item" href="#solution/1">Solution 1</a></li>
                                <li><a className="dropdown-item" href="#solution/2">Solution 2</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#solution/all">All Solutions</a></li>
                            </ul>
                        </li>



                    </ul>
                </div>
                <div className="d-none d-lg-block d-lg-block ">
                    <div className='d-flex d-flex justify-content-between '>
                        <a className="nav-link search" href="#search"><i className="fas fa-search"></i></a>
                        <a className="nav-link button_login mx-4" href="#login">Log In</a>
                        <a className="nav-link button_signup" href="#register">Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Hader;

