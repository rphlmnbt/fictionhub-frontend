import React from "react"
import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function BeOurFriend() {
    return(
        <Col lg={3} className="footer-items">
            NEED ASSISTANCE?
            <br />
            <div className="mt-3">
                <Container className="subscribe-box">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="email-box" type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form>
                    <Button className="subscribe-btn" block>Subscribe Now</Button>
                </Container>
            </div>
        </Col>
    )
}

export default BeOurFriend