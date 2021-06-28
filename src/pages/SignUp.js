import React, { useRef } from 'react'
import { Formik } from "formik"
import * as yup from "yup"
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import AuthService from "../services/auth.service.js"
import "../styles/pages/SignUp.css"

const schema = yup.object().shape({
    username: yup.string()
                .required("Required!")
                .min(2, "Please enter at least 2 characters."),
    first_name: yup.string()
                .max(50, 'Too Long!')
                .required('Required'),
    last_name: yup.string()
                .max(50, 'Too Long!')
                .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .required("Required")
                
})

function SignUp() {
    const formRef = useRef()
    const register = () => {
        
        AuthService.register(
            formRef.current.values.username, 
            formRef.current.values.first_name, 
            formRef.current.values.last_name, 
            formRef.current.values.email, 
            formRef.current.values.password)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            }
        );
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={register}
            innerRef = {formRef}
            initialValues={{
                username: "",
                first_name: "",
                last_name: "",
                email: "",
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
                            <div className="pb-3 mx-auto" >
                                <p className="form-title">Sign Up</p><br />
                                <IconContext.Provider value={{size:"80px", color:"#4C6A6e"}}>
                                    <FaUserCircle />
                                </IconContext.Provider>
                            </div>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group  controlId="username">
                                    <Form.Control 
                                        type="text" 
                                        name="username" 
                                        value={values.username} 
                                        onChange={handleChange}
                                        isValid={touched.username && !errors.username}
                                        isInvalid={touched.username && !!errors.username} 
                                        placeholder="Username" 
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="first_name">
                                    <Form.Control 
                                        type="text" 
                                        name="first_name" 
                                        value={values.first_name} 
                                        onChange={handleChange}
                                        isValid={touched.first_name && !errors.first_name}  
                                        isInvalid={touched.first_name && !!errors.first_name} 
                                        placeholder="First Name" 
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.first_name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="last_name">
                                    <Form.Control 
                                        type="text" 
                                        name="last_name" 
                                        value={values.last_name} 
                                        onChange={handleChange}
                                        isValid={touched.last_name && !errors.last_name} 
                                        isInvalid={touched.last_name && !!errors.last_name} 
                                        placeholder="Last Name" 
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.last_name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Control 
                                        type="email" 
                                        name="email" 
                                        value={values.email} 
                                        onChange={handleChange}
                                        isValid={touched.email && !errors.email} 
                                        isInvalid={touched.email && !!errors.email} 
                                        placeholder="Email Address" 
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Control 
                                        type="password" 
                                        name="password" 
                                        value={values.password} 
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}  
                                        isInvalid={touched.password && !!errors.password} 
                                        placeholder="Password" 
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button 
                                    variant="primary btn-block" 
                                    type="submit" 
                                    className="submit-btn"
                                >
                                    Sign Up
                                </Button>

                                <div>
                                    <small>already have an account?</small> 
                                    <a href="/fictionhub-reactjs/login"><small className="login ml-2">Log In</small></a>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </Formik>
       
    )
}

export default SignUp