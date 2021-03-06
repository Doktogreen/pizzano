import React from "react";
import Cart from '../Cart';
export default function NavBar(){
    return(
        // START NavBar
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="index.html"><span className="flaticon-pizza-1 mr-1"></span>Pizzano<br /><small>Delicous</small></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                        <li className="nav-item"><span className="nav-link"><i className="bi bi-cart"></i><Cart /></span></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                    </ul>
                </div>
		  </div>
        </nav>
        // END NavBar
    )
}