import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Images from "../pseudoDb/images"
import Image from "react-bootstrap/Image"

function AboutUs() {
    const founderImg = Images.images[6].url
    const logo = Images.images[0].url

    return (
        <Container className="bgBlue mx-auto px-5 py-5">
            <Row>
                <Col className="aboutUsTitle">
                    ABOUT US
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={8} className="aboutUsText">
                    ​FictionHub is a website that aims to give people access to the greatest and latest pieces of fiction from all over the world. 
                    <br />
                    It offers a variety of products including Japanese Manga and Western Novels. Additionally, it also offers figurines, posters, and other merchandise of characters from many different kinds of fiction.
                    <br />
                    It started as a simple concept created by a Computer Engineering student as his project in Software Development.  Through the years, it has managed to improve and gain a wide variety of users. Together, they have managed to make FictionHub a haven for fans of all types of fiction.
                    <br />
                    With this, FictionHub aims to continue their goal of providing great service to all of its users.
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Image src={founderImg}  className="centerImg"/>
                </Col>
            </Row>
            <hr className="w-100"/>
            <Row className="mt-3">
                <Col className="mvTitle">
                    MISSION
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={4}>
                    <Image src={logo} className="centerImg"/>
                </Col>
                <Col sm={12} md={6} lg={8} className="mvText">
                    To provide access, entertain, inform and inspire people around the globe through the power of fiction.
                </Col>
            </Row>
            <hr className="w-100"/>
            <Row className="mt-3">
                <Col className="mvTitle">
                    VISION
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={8} className="mvText">
                To become the leading supplier of fiction merchandise of all kinds around the world all while providing superior quality service.
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Image src={logo} className="centerImg"/>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs