import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import Iphone5 from './img/iphone5.png';
import Logo from './img/logo.png'


function App() {
  return (
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

      <div className="section-with-image">
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <h1 className="section-with-image-header text-start">A Longwinded Header
                    </h1>
                    <p className="my-4 text-start section-with-image-text-1">She'll be
                        right paddock how lets throw a ciggies. She'll be right ute to built like a doovalacky.
                        We're going
                        rack off bloody she'll be right pash. You little ripper tucker also get a dog up ya greenie.
                    </p>
                    <p className="line text-start section-with-image-text-2">You
                        little ripper boozer no worries she'll be right holy dooley!. Come a
                        freo also as cross as a your shout. Lets throw a khe sanh flamin dead
                        dingo's donger. Lets get some fisho with grab us a trackie dacks.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-outline-success py-3 px-4 my-3">SAY HELLO <i
                                className="fa-solid fa-envelope"></i></button>
                    </div>



                </div>
            </div>
        </div>
    </div>

    <div className="section2">
        <div className="container">
            <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5">
                    <h1 className="section2-header">Get a Dog Up Ya’</h1>
                    <p className="section2-text-1">She'll be right
                        paddock how lets throw a ciggies.
                        She'll be right ute to built like a doovalacky.</p>
                    <p className="section2-text-2">We're going rack off
                        bloody she'll be right pash. You
                        little ripper tucker also get a dog up ya greenie.</p>
                    <button type="button" className="btn btn-outline-danger py-3 px-4 my-5">VIEW ON DRIBBBLE <i
                            className="fa-brands fa-dribbble"></i></button>
                </div>

            </div>

        </div>

    </div>

    <div className="section3">
        <div className="container">
            <h1 className="text-center section3-header">Like What
                You See?</h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button type="button" className="btn btn-outline-light py-3 px-4 my-4">BUY ME A BEER <i
                        className="fa-solid fa-beer-mug-empty"></i></button>
            </div>
        </div>
    </div>

    <div className="section4">
        <div className="container">
            <div className="socials text-center">
                <a className="m-4 text-dark section4__ikon" href="#"><i className="fa-brands fa-dribbble fa-2x"></i></a>
                <a className="m-4 text-dark section4__ikon" href="#"><i className="fa-brands fa-facebook-f fa-2x"></i></a>
                <a className="m-4 text-dark section4__ikon" href="#"><i className="fa-brands fa-twitter fa-2x"></i></a>
                <a className="m-4 text-dark section4__ikon" href="#"><i className="fa-brands fa-telegram fa-2x"></i></a>
            </div>


            <form action="" className="mt-5">
                <div className="row mb-3 justify-content-center align-items-center">
                    <label for="inputEmail" className="input_text col-3 col-form-label">Newsletter Subscription</label>
                    <div className="col-auto ">
                        <input type="email" className="input_form form-control rounded " id="inputEmail" placeholder="Enter Email"/>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="input_ikon"> <i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <footer className="footer my-5">
        <div className="container">
            <p className="footer_text text-center">© 2013 <span className="perth">Perth.</span>  Breeding pixels since the naughties.</p>
        </div>
       
    </footer>
    </>
  );
}

export default App;
