import React from 'react';
import footerimg from "../image/autumn-goodman-242825.png";
import "../component/Footer.css";

function Footer() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-5 ps-0">
                    <img src={footerimg} alt=""/>
                </div>
                <div className="col-xl-7">
                    <div className="ft-boxs">
                        <div className="minibox">
                            <p className="footer-title">SOME INFO</p>

                            <a href="#" className="footer-text1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula.</a>
                        </div>
                        <div className="minibox">
                            <p className="footer-title">ENFOLD HEALTH</p>

                            <a href="#" className="streetName">
                                Main Street 1, Olcott
                                Buffalo, United States
                            </a>
                            <a href={"tell:+555283784333"} className="tell">+555 283 784 333</a>

                            <a href="#" className="site">office@enfold-health.com</a>

                        </div>
                        <div className="minibox">
                            <p className="footer-title">OFFICE HOURS</p>

                            <p className="days">Mo-Fr: 8:00-19:00</p>
                            <p className="days">Sa: 8:00-14:00</p>
                            <p className="days">Su: closed</p>
                        </div>
                    </div>
                </div>

                <div className="ft-last">
                    <p className="sign">©</p>
                    <p className="last-text">Copyright - ThriveTalk  2017</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
