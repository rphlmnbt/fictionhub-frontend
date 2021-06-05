import React from "react"
import { Row, Col, Image } from "react-bootstrap"

function Mission(props) {
    return (
        <div>
           <hr className="w-100"/>
            <Row className="mt-3">
                <Col className="mv-title">
                    MISSION
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={4} className="text-center">
                    <Image src={props.logo} />
                </Col>
                <Col sm={12} md={6} lg={8} className="mv-text">
                    To provide access, entertain, inform and inspire people around the globe through the power of fiction.
                </Col>
            </Row>
        </div>
    )
}

export default Mission