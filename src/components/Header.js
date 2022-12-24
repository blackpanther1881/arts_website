import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import Logo from "../assets/images/logo.svg";
import Icon from "./Icon";
const Header = () => {
    return(
        <Navbar collapseOnSelect expand="lg">
            <div className="container">
                <Navbar.Brand href="/" className="logo-text">
                    MNC ART
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto nav-links">
                        <NavLink eventKey="1" className="nav-link" to="/">Home</NavLink>
                        <NavLink eventKey="2" className="nav-link" to="/store">Store</NavLink>
                        <NavLink eventKey="3" className="nav-link" to="/commission">Commission</NavLink>
                        <NavLink eventKey="4" className="nav-link" to="/events">Events</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
};


export default Header;
