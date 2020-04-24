import React from 'react';
import { Jumbotron, Button, Col, Row, Container, Image } from 'react-bootstrap';



import '../../css/landingpage/CallToAction.css';
import heroImage from '../../../src/img/landingpage/hero_1.png'

class CallToAction extends React.Component {
    render() {
        return (
            <div className="jumbo">



                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} >
                            <h1><span className="purpleText">RESERVEZ</span> <span className="yellowText">MAINTENANT! </span></h1>

                            <h5 >
                                Choisissez parmi une variété de services automobiles qualifiés et fiables pour vos entretien automobiles
                            </h5>
                            <div className="spaceDiv2"></div>
                            <Button size="lg" className="purpleBtn"> <span className="btnText">Commençez! </span></Button>
                        </Col>
                        <Col lg={7}>
                            <Image
                                src={heroImage}
                                alt="Call to Action Image"
                            />


                        </Col>
                    </Row>
                </Container>


            </div >);
    }
}


export default CallToAction;