import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import Images from "../../pseudoDb/images"

function ContactUsDescription() {
    const logo = Images.images[0].url

    return (
        <div>
            <Row>
                <Col className="page-title">
                    CONTACT US
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={4}>
                    <Image src={logo}  className="mx-auto d-block"/>
                </Col>
                <Col sm={12} md={6} lg={8} className="contactus-text">
                Here at FictionHub, we aim to provide the best service poissble! Written below are the various way you could contact us so that we could address all of your concerns! Our team is composed of trained Customer Service Representatives that are sure to aid you in all of your problems 24/7.
                </Col>
            </Row>
        </div>
    )
}

export default ContactUsDescription