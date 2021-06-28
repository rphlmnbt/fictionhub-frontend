import React, { useRef } from 'react'
import { Formik } from "formik"
import * as yup from "yup"
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import AuthService from "../services/auth.service.js"
import "../styles/pages/LogIn.css"

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
});

function LogIn() {
    const formRef = useRef()
    const logIn = () => {
    
        AuthService.login(formRef.current.values.username, formRef.current.values.password)
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
    };


    return (
        <Formik
            validationSchema={schema}
            onSubmit={logIn}
            innerRef = {formRef}
            initialValues={{
                username: "",
                password: ""
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Container className="extend-height py-5">
                    <Row className="align-items-center justify-content-center">
                        <Col lg={4} md={6} sm={12} className="text-center mt-5 shadow p-3 mb-5 bg-white">
                            <div className="pb-3 mb-3 mx-auto" >
                                <p className="form-title">Log In</p><br />
                                <IconContext.Provider value={{size:"80px", color:"#4C6A6e"}}>
                                    <FaUserCircle />
                                </IconContext.Provider>
                            </div>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="username">
                                    <Form.Control 
                                        type="text" 
                                        name="username" 
                                        value={values.username} 
                                        onChange={handleChange} 
                                        isValid={touched.username && !errors.username}
                                        placeholder="Enter Username"
                                    />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Control 
                                        type="password" 
                                        name="password" 
                                        value={values.password} 
                                        onChange={handleChange} 
                                        isValid={touched.password && !errors.password}
                                        placeholder="Enter Password"
                                    />
                                </Form.Group>

                                <Button 
                                    variant="primary btn-block" 
                                    type="submit" 
                                    className="submit-btn mt-5"
                                >
                                    Log In
                                </Button>

                                <div className="mt-3">
                                    <small>don't have an account yet?</small> 
                                    <a href="/fictionhub-reactjs/signup">
                                        <small className="login ml-2">Sign Up</small>
                                    </a>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </Formik>
    )
}

export default LogIn