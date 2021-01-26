import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgHero from '../../assets/questions.svg';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Principal = () => {
  	return (
        <Fragment>
            <Header />
            <Container fluid className="principal">
                <Row>
                    <Col className="principal-1" xs={12} md={12}  lg={6}>
                        <img alt="Logo" src={imgHero} className="principal-1-img" />
                    </Col>
                    <Col className="principal-2" xs={12} md={12}  lg={6}>
                        <h1 className="principal-2-title">Questans App</h1>
                        <p className="principal-2-tex">It is a simple application where 
                        you can ask any question and someone can answer you.</p>  
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Fragment>
  	);
}

export default Principal;
