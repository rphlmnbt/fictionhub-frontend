import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Cards from "./Cards"


function NewReleases() {

    return (
        <div>
            <Container className="new-release-div" fluid>
                <p className="d-none d-sm-block">CHECK OUT THESE AMAZING ITEMS!</p>
            </Container>
            <Container className="text-center p-2 mt-3">
                <Row>
                    <Col sm={12}>
                        <span className="new-release-text">NEW RELEASES</span>
                        <hr className="w-75 font-weight-bold"></hr>            
                        <span className="new-release-subtext">Check out these new releases from all over the world!</span>
                    </Col>
                </Row>
                <Row className="h-100">
                    <Cards id="3" title="EIGHTY-SIX"></Cards>
                    <Cards id="4" title="READY PLAYER ONE"></Cards>
                    <Cards id="5" title="BATMAN"></Cards>
                </Row>
            </Container>
        </div>
        
    )
}

export default NewReleases