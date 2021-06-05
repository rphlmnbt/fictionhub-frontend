import React from "react"
import { Row, Col, Image } from "react-bootstrap"

function Vision(props) {
    return (
        <div>
            <hr className="w-100"/>
            <Row className="mt-3">
                <Col className="mv-title">
                    VISION
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={8} className="mv-text">
                To become the leading supplier of fiction merchandise of all kinds around the world all while providing superior quality service.
                </Col>
                <Col sm={12} md={6} lg={4} className="text-center">
                    <Image src={props.logo}/>
                </Col>
            </Row>
        </div>
    )
}

export default Vision