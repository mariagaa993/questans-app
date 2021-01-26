import React, { Fragment, useState } from 'react';
import './Login.scss';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Principal = () => {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = event => {
        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
      }
      setValidated(true);
    };

  	return (
        <Fragment>
            <Header />
            <Container fluid className="container-login">
                <Row>
                    <Col xs={12}>
                        <Form className="form" noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="validation-1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required 
                                    type="email" 
                                    placeholder="Enter email" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a 
                                    valid email.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validation-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required  
                                    type="password" 
                                    placeholder="Password" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Do not forget the 
                                    password to be able to enter</Form.Control.Feedback>
                            </Form.Group>
                            <Button className="btn-login" variant="primary" type="submit">Log in</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Fragment>
  	);
}

export default Principal;
