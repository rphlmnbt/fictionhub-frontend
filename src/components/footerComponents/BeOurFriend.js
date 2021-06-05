import React from "react"
import { Container, Col, Button, Form } from "react-bootstrap"

function BeOurFriend() {
    return(
        <Col lg={3} className="footer-items">
            BE OUR FRIEND
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