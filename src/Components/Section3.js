import React, { Component } from 'react';

const Section3 = () => (
    <>
        <div className="section3">
        <div className="container">
            <h1 className="text-center section3-header">Like What
                You See?</h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button onClick={()=> alert('Thank you!')} type="button" className="btn btn-outline-light py-3 px-4 my-4">BUY ME A BEER <i
                        className="fa-solid fa-beer-mug-empty"></i></button>
            </div>
        </div>
    </div>
    </>
)

export default Section3