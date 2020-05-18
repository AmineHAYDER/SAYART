import React from 'react';
import {Button, Col, Row, Container, Image} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';


import '../../css/landingpage/CallToAction.css';
import heroImage from '../../../src/img/landingpage/hero_1.png'

class CallToAction extends React.Component {
    render() {
        return (
            <div className="jumbo">

                <Container fluid>
                    <Row className="align-items-center">
                        <Col lg={5} className="pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                            {/*<h1><span className="purpleText">RESERVEZ</span> <span className="yellowText">MAINTENANT! </span></h1> */}

                            <div className="typewriter">
                                <Typewriter

                                    options={{
                                        strings: ['Lavage', 'Mécanicien', 'Vidange', 'Visite', 'Rendez-vous'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></div>
                            <br></br>
                            <h5>
                                Choisissez parmi une variété de services automobiles qualifiés et fiables pour vos
                                entretien automobiles
                            </h5>


                            <div className="spaceDiv2"></div>
                            <Button size="lg" className="purpleBtn"> <span
                                className="btnText">Commençez! </span></Button>

                        </Col>
                        <Col lg={7} md={12} className="order-1 order-lg-2" data-aos="fade-up">
                            <Image fluid
                                   src={heroImage}
                                   alt="Call to Action Image"
                            />
                        </Col>
                    </Row>
                </Container>


            </div>);
    }
}


export default CallToAction;