import React from 'react';
import './sectionWithImage.css'

const SectionWithImage: React.FC = () => (
    <>
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
                            <button onClick={()=> alert('Hello!')} type="button" className="btn btn-outline-success py-3 px-4 my-3">SAY HELLO <i
                                className="fa-solid fa-envelope"></i></button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </>
)

export default SectionWithImage