import React from 'react';
import MyNavbar from "./MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Header.css"
import z1img from "../image/Mask Group (1).png"
import z0img from "../image/Rectangle 3.1.png"

function Header() {
    return (
        <>
            <div className="qwe"/>
            <div className="container-fluid zindex">

                <MyNavbar/>

                <div className="row">
                    <div className="col-xl-9 paddingleft">
                        <p className="first-title">Thrivetalk</p>
                        <p className="second-title">HELPING YOU THRIVE IN ALL AREAS OF LIFE</p>

                        <p className="texts">Our highly talented therapists can help you with a range of issues
                            including
                            relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself
                            more.</p>

                        <div className="btn-text">
                            <button type="button" className="buttons"><a href="#" className="buttons-link">WHO AM I</a>
                            </button>
                            <p className="text">WHAT DO I DO</p>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="images">
                            <img className="bg-img" src={z0img} alt=""/>
                            <img className="fr-img" src={z1img} alt=""/>
                        </div>
                        <div className="box"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;