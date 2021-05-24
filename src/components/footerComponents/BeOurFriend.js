import React from "react"
import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function BeOurFriend() {
    return(
        <Col lg={3} className="footerItems">
            NEED ASSISTANCE?
            <br />
            <div className="mt-3">
                <Container className="subscribeBox">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="emailBox" type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form>
                    <Button className="subscribeButton" block>Subscribe Now</Button>
                </Container>
            </div>
        </Col>
    )
}

export default BeOurFriend