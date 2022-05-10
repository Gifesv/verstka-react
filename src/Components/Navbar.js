import React, { Component } from 'react';
import Logo from '../img/logo.png'

const Navbar = () => (
    <>
      <nav className="navbar navbar-expand-lg navbar-light header-nv">
        <div className="container">
             <a href="#" className="navbar-brand"><img className="header-logo" src={Logo} alt=""/></a>
            <button className="navbar-toggler header-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto mb-2 header-menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Drop me a line</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
    </>
)

export default Navbar