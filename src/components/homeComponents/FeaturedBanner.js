import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import Images from "../../pseudoDb/images"

function FeaturedBanner() {
    const bannerUrl = Images.images[1].url
    const featImg = {
        backgroundImage : "url("+bannerUrl+")",
        backgroundRepeat : "no-repeat",
        backgroundSize: "100%",
        height: "35vw",
        padding: 0,
        margin: 0,
    }

    return (
        <Jumbotron style={featImg} fluid>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="feat-box d-none d-sm-block"> 
                        <p className="feat-text">FEATURED ITEMS</p>
                        <Button className="feat-btn mt-3 px-5">SHOP NOW</Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default FeaturedBanner