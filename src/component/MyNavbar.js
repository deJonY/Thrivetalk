import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/MyNavbar.css";

function MyNavbar() {
    return (
        <div className="container">
            <div className="row Nav">
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-logo" href="#">Thrivetalk</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="navbar-brand" href="#">Thrivetalk</a>
                            </li>
                            <li className="center-link">
                                <a className="nav-link" href="#">Home</a>
                                <a className="nav-link marginleft" href="#">About</a>
                                <a className="nav-link marginleft" href="#">Services</a>
                                <a className="nav-link marginleft" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <button className="nav-button" type="button">CONTACT US</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MyNavbar;