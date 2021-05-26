import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Cards from "./Cards"


function NewReleases() {

    return (
        <div>
            <Container className="newReleaseDiv" fluid>
                <p className="d-none d-sm-block">CHECK OUT THESE AMAZING ITEMS!</p>
            </Container>
            <Container className="text-center p-2 mt-3">
                <Row>
                    <Col sm={12}>
                        <span className="newReleaseText">NEW RELEASES</span>
                        <hr className="w-75 font-weight-bold"></hr>            
                        <span className="newReleaseText2">Check out these new releases from all over the world!</span>
                    </Col>
                </Row>
                <Row className="parentHeight">
                    <Cards id="3" title="EIGHTY-SIX"></Cards>
                    <Cards id="4" title="READY PLAYER ONE"></Cards>
                    <Cards id="5" title="BATMAN"></Cards>
                </Row>
            </Container>
        </div>
        
    )
}

export default NewReleases