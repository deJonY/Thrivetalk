import React from 'react';
import "../component/SectionTwo.css";

function SectionTwo() {
    return (
        <>
            <div className="container">
                <div className="row MTtext">
                    <div className="col-xl-3">
                        <div className="leftTitle">
                            <p className="Ltitle">ABOUT US</p>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="rightTitle">
                            <p className="Rtitle1">We want to help you thrive! Whether you are just looking for someone
                                to talk to,
                                or are struggling with a mental wellness issue we’re here to help. Our highly talented
                                therapists
                                can help you with a range of issues including relationships, sex, PTSD, depression,
                                social anxiety,
                                or even just caring for yourself more.
                            </p>

                            <p className="Rtitle2">WE CAN HELP YOU WITH</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 big-box background-pink">
                        <div className="line"/>
                        <div className="dot-text">
                            <div className="dot-box"/>
                            <p className="d-text">Weight Lifting</p>
                        </div>
                    </div>
                    <div className="col-xl-3 big-box background-green">
                        <div className="line"/>
                        <div className="dot-text">
                            <div className="dot-box"/>
                            <p className="d-text">Running & Spinning</p>
                        </div>
                    </div>
                    <div className="col-xl-3 big-box background-bluesky">
                        <div className="line"/>
                        <div className="dot-text">
                            <div className="dot-box"/>
                            <p className="d-text">Pumping Iron</p>
                        </div>
                    </div>
                    <div className="col-xl-3 big-box background-blue">
                        <div className="line"/>
                        <div className="dot-text">
                            <div className="dot-box"/>
                            <p className="d-text">Pumping Iron</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionTwo;