import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <React.Fragment>
            <section className="footer-section">
                <div className="container">
                    <div className="item-list">
                        <div className="item">
                            <p className="heading">CONNECT</p>
                            <a href="https://www.instagram.com/mnc_artist/"
                               target={"_blank"}
                               rel="noopener noreferrer">
                                Instagram
                            </a>
                            <a  href="https://twitter.com/MNC_artist"
                                target={"_blank"}
                                rel="noopener noreferrer">
                                Twitter
                             </a>
                        </div>
                        {/*<div className="item">*/}
                        {/*    <p className="heading">LEGAL</p>*/}
                        {/*    <a>Payment</a>*/}
                        {/*    <a>Refund Policy</a>*/}
                        {/*    <a>Shipping</a>*/}
                        {/*    <a>Privacy Policy</a>*/}
                        {/*</div>*/}
                        <div className="item">
                            <p className="heading">QUICK LINKS</p>
                            <NavLink eventKey="1" className="nav-link" to="/">Home</NavLink>
                            <NavLink eventKey="1" className="nav-link" to="/store">Store</NavLink>
                            <NavLink eventKey="1" className="nav-link" to="/commission">Commission</NavLink>
                            <NavLink eventKey="1" className="nav-link" to="/events">Events</NavLink>
                        </div>
                        <div className="item">
                            <p className="heading">WORKSHOPS</p>
                            <NavLink eventKey="1" className="nav-link" to="/events">Charcoal Workshop(05/08/22)</NavLink>
                            <NavLink eventKey="1" className="nav-link" to="/events">Urban Sketching(02/07/22)</NavLink>
                            <NavLink eventKey="1" className="nav-link" to="/events">Hyper-realism(14/06/22)</NavLink>
                            <NavLink eventKey="1" className="nav-link" to="/events">Urban Sketching(22/03/22)</NavLink>
                            <NavLink eventKey="1" className="nav-link" to="/events">View All</NavLink>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <p className="logo">
                            MNC ART | Neha Verma
                        </p>
                        <p className="date">2022 © MNC ART</p>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
};


export default Footer;
