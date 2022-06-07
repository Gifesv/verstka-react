import React from 'react';
import './section2.css'

const Section2: React.FC = () => (
    <>

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
                    <button onClick={()=> alert('Viewing on Dribbble')} type="button" className="btn btn-outline-danger py-3 px-4 my-5">VIEW ON DRIBBBLE <i
                            className="fa-brands fa-dribbble"></i></button>
                </div>

            </div>

        </div>

    </div>
    </>
)

export default Section2