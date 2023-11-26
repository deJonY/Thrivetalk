import React from 'react';
import "../component/SectionOne.css";
import image from "../image/christopher-campbell-40367.png"

function SectionOne() {
    return (
        <div className="backgroundColor">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 ps-0">
                        <p className="s1-title">Why Thrive?</p>

                        <p className="s1-text1">Want to improve your well-being from the comfort of your own couch? Are
                            you having trouble
                            finding the right therapist? <span className="s1-text2">Here at ThriveTalk, our licensed therapists provide the same
                            quality care you would get in office from anywhere you can access your laptop or mobile
                            phone. Become your best self with ThriveTalk. Start therapy now with a licensed
                            therapist!</span>
                        </p>
                    </div>
                    <div className="col-xl-4">
                        <img className="imgR1" src={image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionOne;