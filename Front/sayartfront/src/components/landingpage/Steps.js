import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

import '../../css/landingpage/Steps.css';


import loginImg from '../../img/landingpage/Register.png';
import searchImg from '../../img/landingpage/Search.png';
import reviewImg from '../../img/landingpage/Review.png';
import pickImg from '../../img/landingpage/Pick.png';


class Steps extends React.Component {

    render() {
        return (
            <div>

                <Container fluid>
                    <h1>
                        Comment Ça Marche?
                    </h1>

                    <h5>
                        Trouvez votre garage dans 4 simple étapes
                    </h5>

                    <div className="Div50Px"></div>
                    <Container >
                        <Row className="justify-content-lg-center">
                            <Row>
                                <Col className="center"><div className="steps-count"> <h1>1</h1> </div></Col>
                            </Row>

                            <Row>
                                <Col className="center"> <div ><h3>Identifiez vous!</h3>
                                    <p>
                                        Connectez vous pour un meilleur expérience! Vous pouvez sauvegarder les détails de votre voiture et suivre son état
                                    </p> </div> </Col>
                                <Col>
                                    <Image
                                        src={loginImg}
                                        alt="step1"
                                        fluid
                                    /></Col>
                            </Row>
                        </Row>
                        <div className="div50px"></div>
                        <Row className="justify-content-lg-center ">
                            <Row>
                                <Col><div className="steps-count"> <h1>2</h1> </div></Col>
                            </Row>
                            <Row>
                                <Col><Image
                                    src={pickImg}
                                    alt="step1"
                                    fluid
                                /> </Col>
                                <Col className="center">

                                    <div >
                                        <h3>Tapez Vos Besoins</h3>
                                        <p>
                                            Dites-nous ce que vous recherchez ou ce qui doit être réparé sur votre voiture et nous trouverons les meilleurs garages à proximité et vous donnerons le meilleur prix approximative.
                                    </p> </div>
                                </Col>
                            </Row>
                        </Row>
                        <div className="div50px"></div>
                        <Row className="justify-content-lg-center">
                            <Row>
                                <Col className="center"><div className="steps-count"> <h1>3</h1> </div></Col>
                            </Row>
                            <Row>

                                <Col className="center"> <div><p>
                                    <h3>Choisissez un garage</h3>

                                        vous aurez une liste des meilleurs garages de votre région et leurs détails pour choisir ce qui vous convient le meiux.
                                    </p> </div></Col>
                                <Col>
                                    <Image
                                        src={searchImg}
                                        alt="step1"
                                        fluid
                                    /></Col>
                            </Row>
                        </Row>
                        <div className="div50px"></div>
                        <Row className="justify-content-lg-center justify-content-md-center justify-content-sm-center">
                            <Row >
                                <Col><div className="steps-count"> <h1>4</h1> </div></Col>
                            </Row>
                            <Row>
                                <Col >  <Image
                                    src={reviewImg}
                                    alt="step1"
                                    fluid
                                /></Col>
                                <Col className="center">
                                    <div className="text-adjust">
                                        <h3>Laissez un review!</h3>
                                        <p>
                                            Pour montrer que vous êtes heureux, laissez un avis sur le garage et recommandez le garage à des amis et à d'autres
                                    </p>
                                    </div>
                                </Col>
                            </Row>
                        </Row>

                    </Container>
                </Container>


            </div>
        )
    }
}


export default Steps;