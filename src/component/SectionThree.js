import React from 'react';
import "../component/SectionThree.css";

function SectionThree() {
    return (
        <>
            <div className="container-fluid Mtop">
                <div className="row">
                    <div className="col-xl-4 bg-1">
                        <div className="white-line"/>
                        <div className="box">
                            <div className="dot"/>
                            <p className="title">Physical Health</p>
                        </div>
                    </div>
                    <div className="col-xl-4 bg-2">
                        <div className="white-line"/>
                        <div className="box">
                            <div className="dot"/>
                            <p className="title">Mental Health</p>
                        </div>
                    </div>
                    <div className="col-xl-4 bg-image">
                        <div className="white-line"/>
                        <div className="box">
                            <div className="dot"/>
                            <p className="title">Nutrition</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 bg-4">
                        <div className="white-line"/>
                        <div className="box">
                            <div className="dot"/>
                            <p className="title">Gymnastics</p>
                        </div>
                    </div>
                    <div className="col-xl-4 bg-5">
                        <div className="white-line"/>
                        <div className="box">
                            <div className="dot"/>
                            <p className="title">Crossfit</p>
                        </div>
                    </div>
                    <div className="col-xl-4 bg-6">
                        <div className="white-line"/>
                        <div className="box">
                            <div className="dot"/>
                            <p className="title">Aerobics</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionThree;