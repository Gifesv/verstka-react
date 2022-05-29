import React, { Component } from 'react';
import './section4.css'

const Section4 = () => (
    <>
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
    </>
)

export default Section4