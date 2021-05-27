import React from "react"
import Logo from "./Logo"
import Accounts from "./Accounts"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import {LinkContainer} from 'react-router-bootstrap'


function NavMenu() {

    const fhNameStyle = {
        color: "rgba(255,255,255,.8)",
        fontSize: 20,
        letterSpacing: "0.3em",
        fontWeight: "500"
    }


    return (
        <div>
            <Navbar className="navbar" variant="dark" expand="lg" sticky="top">
                <LinkContainer to="/fictionhub-reactjs/">
                    <Navbar.Brand style={fhNameStyle}>
                        <Logo height="60px"/>
                        asdadsa
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <LinkContainer to="/fictionhub-reactjs/">
                        <Nav.Link className="item-style">HOME</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="SHOP" id="basic-nav-dropdown" disabled>
                        <LinkContainer to="/fictionhub-reactjs/bestsellers">
                            <NavDropdown.Item href="#">BEST SELLERS</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="#" disabled>MEGA SALE</NavDropdown.Item>
                        <NavDropdown.Item href="#" disabled>STORE</NavDropdown.Item>
                    </NavDropdown>
                    <LinkContainer to="/fictionhub-reactjs/contactus">
                        <Nav.Link className="item-style">CONTACT US</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/fictionhub-reactjs/aboutus">
                        <Nav.Link className="item-style">ABOUT US</Nav.Link>
                    </LinkContainer>
                    <Nav.Link className="item-style" disabled>CUSTOMER CARE</Nav.Link>
                    </Nav>
                    <Accounts />
                </Navbar.Collapse>
            </Navbar>
            <div className="white-bar"></div>
        </div>
        

    )
}

export default NavMenu