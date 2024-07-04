import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CgProfile } from "react-icons/cg";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import style from './Header.module.css';

function Header() {


    return (
        <div>
            <nav className="navbar container navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand fs-4" href="#"> <img  alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto mx-auto">
                            <li className="nav-item active">
                                <button className="nav-link link-button" >
                                    24x7 Customer Helpline
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link link-button" >
                                    <FaPhoneAlt style={{ fontSize: '22px', color: 'red' }} />
                                    <span style={{ fontWeight: 'bold', fontSize: '20px' }}> 03340193300</span>
                                </button>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span> <img  alt="image" /></span> India
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">


                                <button className="btn btn-outline-danger btn-custom" type="button">
                                <CgProfile className={style.profileIcon} /> SIGN IN
                                </button>




                                {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    
                                </a> */}
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* 2nd Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><FaHome size={20} className={style.iconn} /></a>
                            </li>
                            <li className={`nav-item ${style.bgc}`}>
                                <a className={`nav-link ${style.bgb}`} href="#">Flights</a>
                            </li>
                            <li className={`nav-item ${style.bgc}`}>
                                <a className={`nav-link ${style.bgb}`} href="#">Hotels</a>
                            </li>
                            <li className={`nav-item ${style.bgc}`}>
                                <a className={`nav-link ${style.bgb}`} href="#">Holidays</a>
                            </li>
                            <li className={`nav-item ${style.bgc}`}>
                                <a className={`nav-link ${style.bgb}`} href="#">Forex</a>
                            </li>
                            <li className={`nav-item ${style.bgc}`}>
                                <a className={`nav-link ${style.bgb}`} href="#">Visa</a>
                            </li>
                            <li className={`nav-item ${style.bgc}`}>
                                <a className={`nav-link ${style.bgb}`} href="#">Insurance</a>
                            </li>
                            <li className={`nav-item ${style.bgc}`}>
                                <a className={`nav-link ${style.bgb}`} href="#">Travel Diaries</a>
                            </li>
                            {/* <li className={`nav-item mr-auto mx-auto ${style.bgc}`}>
                                <a className={`nav-link   ${style.bgb}` } href="#">Travel Diaries</a>
                            </li> */}

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
