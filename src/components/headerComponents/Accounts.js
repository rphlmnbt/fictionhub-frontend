import React from "react"
import { Button } from "react-bootstrap"
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { LinkContainer } from "react-router-bootstrap"


function Accounts() {
    return (
        <span>
            <LinkContainer to="/fictionhub-reactjs/login">
                <Button className="custom-btn">
                    <IconContext.Provider value={{size:"20px", style: {marginLeft: "10px", marginRight:"10px"}}}>
                        <FaUserCircle />
                    </IconContext.Provider>
                    Log In
                </Button>
            </LinkContainer>
            <Button className="custom-btn">
                <IconContext.Provider value={{size:"20px", style: {marginLeft: "10px", marginRight:"10px"}}}>
                    <FaShoppingCart />
                </IconContext.Provider>
            </Button>
        </span>

    )
}

export default Accounts