import React, { Component } from 'react';
import Iphone5 from '../img/iphone5.png';


const Header = () => (
    <>
      <header className="header">
        <div className="container">
          <h1 className="text-end header_text_1">Meet Perth,</h1>
          <p className="text-end header_text_2">A stupidly
            simple, flat PSD. Oh yeah, it’s <b><i>free</i></b> too!</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end py-3">
            <button type="button" className="btn btn-outline-light text-center py-3 px-4">DOWNLOAD <i
              className="fa-solid fa-cloud-arrow-down"></i></button>
          </div>
          <img className="px-5" src={Iphone5} alt="iphone5" />

        </div>
      </header>
    </>
)

export default Header