import React, {useState} from "react"
import {Carousel, Col, Row, Container, Image, Button} from "react-bootstrap"
import Images from "../pseudoDb/images"

function BestSellers() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="mb-5">
        <Carousel.Item>
            <Image src={Images.images[1].url} className="w-100"></Image>
            <Carousel.Caption className="center-caption mx-auto p-5 w-25">
            <div className="page-title">YOUR NAME</div>
            <div className="caption-text">LIGHT NOVELS</div>
            </Carousel.Caption>
            <Container className="mt-3 bestseller-desc" fluid>
                <Row className="p-5">
                    <Col md={4} className="mx-auto">
                        A story of two people determined to hold on to one another. Mitsuha, a high school girl from a town deep in the mountains, dreams of an unfamiliar life in Tokyo. Taki, a high school boy from Tokyo, dreams that he is a girl living in the mountains. As the two begin swapping lives, a miraculous story is set in motion.
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col md={4} className="mx-auto">
                        <Button className="form-submit mx-2">BUY NOW</Button>
                        <Button className="form-submit mx-2">CHECK ON GOODREADS</Button>
                    </Col>
                </Row>
            </Container>
        </Carousel.Item>
    
        </Carousel>
    )
}

export default BestSellers