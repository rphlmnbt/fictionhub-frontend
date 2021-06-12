import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import "../styles/pages/LogIn.css"


function LogIn() {
    return (
        <Container className="extend-height py-5">
            <Row className="align-items-center justify-content-center">
                <Col lg={4} md={6} sm={12} className="text-center mt-5 shadow p-3 mb-5 bg-white">
                    <div className="pb-3 mb-3 mx-auto" >
                        <p className="form-title">Log In</p><br />
                        <IconContext.Provider value={{size:"80px", color:"#4C6A6e"}}>
                            <FaUserCircle />
                        </IconContext.Provider>
                    </div>
                    <Form>
                        <Form.Group controlId="emailAdd">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="passWord">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary btn-block" type="submit" className="custom-btn mt-5">
                            Log In
                        </Button>

                        <div className="mt-3">
                            <small>don't have an account yet?</small> 
                            <a href="/fictionhub-reactjs/signup"><small className="login ml-2">Sign Up</small></a>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LogIn