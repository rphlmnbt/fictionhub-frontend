import React from "react"
import Button from "react-bootstrap/Button"
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"
import { IconContext } from "react-icons/lib"


function Accounts() {
    return (
        <span>
            <Button className="custom-btn">
                <IconContext.Provider value={{size:"20px", style: {marginLeft: "10px", marginRight:"10px"}}}>
                    <FaUserCircle />
                </IconContext.Provider>
                Log In
            </Button>
            <Button className="custom-btn">
                <IconContext.Provider value={{size:"20px", style: {marginLeft: "10px", marginRight:"10px"}}}>
                    <FaShoppingCart />
                </IconContext.Provider>
            </Button>
        </span>

    )
}

export default Accounts