import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import Logo from "./Logo"
import Accounts from "./Accounts"

function NavMenu() {

    const fhNameStyle = {
        color: "rgba(255,255,255,.8)",
        fontSize: 20,
        letterSpacing: "0.3em",
        fontWeight: "500"
    }


    return (
        <div>
            <Navbar className="navbar" variant="dark" expand="lg">
                <LinkContainer to="/fictionhub-reactjs/">
                    <Navbar.Brand style={fhNameStyle}>
                        <Logo height="60px"/>
                        FICTIONHUB
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <LinkContainer to="/fictionhub-reactjs/">
                        <Nav.Link className="item-style">HOME</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="SHOP" id="basic-nav-dropdown">
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