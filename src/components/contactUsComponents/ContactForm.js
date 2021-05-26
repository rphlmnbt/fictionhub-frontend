import React from "react"
import { Row, Col, Form, Button } from "react-bootstrap"

function ContactForm() {
    return (
        <div>
            <hr className="w-100"/>
            <Row className="mt-3">
                <Col sm={12} md={6} className="form-text">
                    Have any questions or concerns? 
                    <br />
                    We’re always ready to help!
                    <br /><br /><br />
                    <span className="font-weight-bold">Call us at</span>
                    <br />
                    123-456-7890
                    <br />
                    or send us an email to:
                    <br />
                    fictionhub@gmail.com
                </Col>
                <Col sm={12} md={6}>
                    <Form className="form-box">
                        <Form.Group controlId="formEmail">
                            <Form.Control className="form-input" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Control className="form-input" type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formSubject">
                            <Form.Control className="form-input" type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Control className="form-input" as="textarea" rows={4} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="form-submit px-4">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default ContactForm