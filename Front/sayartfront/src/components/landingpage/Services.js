import React from 'react';
import {Container, Image, Row, Col} from 'react-bootstrap';

import '../../css/landingpage/Services.css';

import checkIcon from '../../img/landingpage/icons/check.png'
import vidangeIcon from '../../img/landingpage/icons/vidange.png'
import peintureIcon from '../../img/landingpage/icons/peinture.png'
import entretienIcon from '../../img/landingpage/icons/entretien.png'
import tiresIcon from '../../img/landingpage/icons/tires.png'
import lavageIcon from '../../img/landingpage/icons/lavage.png'


class Services extends React.Component {
    render() {
        return (

            <div className="container-service">
                <Container className="container-service services" fluid>

                    <h1 className="servicesTitle">Services</h1>

                    <Row data-aos="fade-up">
                        <Col md={6} lg={4}>
                            <div className="box">
                                <div className="Icon"><Image src={entretienIcon}></Image></div>
                                <h4 class="title">Entretien</h4>
                                <p>
                                    Vous trouvez n'importe quelle service relative à l'entretien de votre voiture
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="box">
                                <div className="Icon"><Image src={lavageIcon}></Image></div>
                                <h4 class="title">Lavage</h4>
                                <p>Besoin d'un lavage? Reservation disponible à travers notre site</p>
                            </div>
                        </Col>

                        <Col md={6} lg={4}>
                            <div className="box">
                                <div className="Icon"><Image src={vidangeIcon}></Image></div>
                                <h4 class="title">Vidange</h4>
                                <p>Vous pouvez prendre un rendez-vous en ligne pour la vidange de votre voiture</p>
                            </div>
                        </Col>


                        <Col md={6} lg={4}>
                            <div className="box">
                                <div className="Icon"><Image src={peintureIcon}></Image></div>
                                <h4 class="title">Peinture</h4>
                                <p>Vous voulez renouveler le look de votre voiture? tu es au bon endroit</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="box">
                                <div className="Icon"><Image src={tiresIcon}></Image></div>
                                <h4 class="title">Pneus</h4>
                                <p>Vos pneus ont besoin d'un entretien? Vous-étes le bienvenue</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="box">
                                <div className="Icon"><Image src={checkIcon}></Image></div>
                                <h4 class="title">Contrôle</h4>
                                <p>
                                    Ca fait longtemps sans faire le contrôle de votre voiture?
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <h4>Et plus!</h4>
                </Container>
            </div>
        );
    }
}


export default Services;