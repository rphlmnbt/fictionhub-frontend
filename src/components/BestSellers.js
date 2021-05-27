import React, {useState} from "react"
import {Carousel, Col, Row, Container, Image, Button} from "react-bootstrap"
import Images from "../pseudoDb/images"

function BestSellers() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        console.log(selectedIndex);
    }

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} className="mb-5">
            <Carousel.Item>
                <Image src={Images.images[1].url} className="w-100" />
                <Carousel.Caption className="center-caption mx-auto p-5">
                    <div className="caption-title p-2">YOUR NAME</div>
                    <span className="caption-text p-2">LIGHT NOVELS</span>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <Container className="mt-3 mb-2 bestseller-desc" fluid>
                <Row className="p-5 justify-content-center">
                    <Col sm={12} md={2} className="text-center">
                        <Image src={Images.images[0].url} className="bestsellers-img"/>
                    </Col>
                    <Col sm={12} md={4}>
                        A story of two people determined to hold on to one another. Mitsuha, a high school girl from a town deep in the mountains, dreams of an unfamiliar life in Tokyo. Taki, a high school boy from Tokyo, dreams that he is a girl living in the mountains. As the two begin swapping lives, a miraculous story is set in motion.
                    </Col>
                </Row>
                <Row className="px-5 pb-5 justify-content-center">
                    <Col md={4} className="text-center">
                        <Button className="bestseller-btn mx-2">BUY NOW</Button>
                        <Button className="bestseller-btn mx-2">CHECK ON GOODREADS</Button>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default BestSellers