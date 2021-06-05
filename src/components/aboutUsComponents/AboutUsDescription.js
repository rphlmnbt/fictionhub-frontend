import React from "react"
import { Row, Col, Image } from "react-bootstrap"

function AboutUsDescription(props) {
    return (
        <div>
           <Row>
                <Col className="page-title">
                    ABOUT US
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={8} className="aboutus-text">
                    ​FictionHub is a website that aims to give people access to the greatest and latest pieces of fiction from all over the world. 
                    <br />
                    It offers a variety of products including Japanese Manga and Western Novels. Additionally, it also offers figurines, posters, and other merchandise of characters from many different kinds of fiction.
                    <br />
                    It started as a simple concept created by a Computer Engineering student as his project in Software Development.  Through the years, it has managed to improve and gain a wide variety of users. Together, they have managed to make FictionHub a haven for fans of all types of fiction.
                    <br />
                    With this, FictionHub aims to continue their goal of providing great service to all of its users.
                </Col>
                <Col sm={12} md={6} lg={4} className="text-center">
                    <Image src={props.founderImg} />
                </Col>
            </Row>
        </div>
    )
}

export default AboutUsDescription