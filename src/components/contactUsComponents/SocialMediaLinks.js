import React from "react"
import { Row, Col } from "react-bootstrap"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
import { IconContext } from "react-icons/lib"

function SocialMediaLinks() {
    return (
        <div>
            <hr className="w-100"/>
            <Row className="mt-3">
                <Col md={8} className="followText mx-auto">
                    FOLLOW US AT OUR SOCIAL MEDIA PAGES!
                    <br /><br />
                    <span style={{fontWeight:"400"}}>
                        <IconContext.Provider value={{size:"40px", style: {marginLeft: "10px", marginRight:"10px", color: "black"}}}>
                            <FaTwitter /> facebook.com/fictionhub
                            <br /><br />
                            <FaFacebook /> twitter.com/fictionhub
                            <br /><br />
                            <FaInstagram /> instagram.com/fictionhub
                            <br /><br />
                        </IconContext.Provider>
                    </span>
                </Col>
            </Row>
        </div>
    )
}

export default SocialMediaLinks