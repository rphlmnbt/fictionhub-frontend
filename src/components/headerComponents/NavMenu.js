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
                <LinkContainer to="/">
                    <Navbar.Brand style={fhNameStyle}>
                        <Logo height="60px"/>
                        FICTIONHUB
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link className="itemStyle">HOME</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="SHOP" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">BEST SELLERS</NavDropdown.Item>
                        <NavDropdown.Item href="#">MEGA SALE</NavDropdown.Item>
                        <NavDropdown.Item href="#">STORE</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="CONTACT US" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">REACH US HERE</NavDropdown.Item>
                        <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
                        <LinkContainer to="/aboutus">
                            <NavDropdown.Item>COMPANY PROFILE</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="#">MEET THE TEAM</NavDropdown.Item>
                        <NavDropdown.Item href="#">AWARDS</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="CUSTOMER CARE" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">PAYMENT OPTIONS</NavDropdown.Item>
                        <NavDropdown.Item href="#">DELIVERY OPTIONS</NavDropdown.Item>
                        <NavDropdown.Item href="#">PROXY BUYING SERVICE</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Accounts />
                </Navbar.Collapse>
            </Navbar>
            <div className="whiteBar"></div>
        </div>
        

    )
}

export default NavMenu