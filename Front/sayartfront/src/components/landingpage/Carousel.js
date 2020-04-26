import React from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';

import '../../css/landingpage/Carousel.css';


import loginImg from '../../img/landingpage/Register.png';
import searchImg from '../../img/landingpage/Search.png';
import reviewImg from '../../img/landingpage/Review.png';
import pickImg from '../../img/landingpage/Pick.png';


class CCM extends React.Component {

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
                    <Carousel>
                        <Carousel.Item>
                            <Container className="carousel-Inside">
                                <Container fluid>
                                    <h3>Identifiez vous!</h3>
                                    <p>
                                        Connectez vous pour un meilleur expérience! Vous pouvez sauvegarder les détails de votre voiture et suivre son état
                                    </p>
                                </Container>

                                <Container fluid>
                                    <Image
                                        src={loginImg}
                                        alt="step1"
                                        fluid
                                    />
                                </Container>
                            </Container>

                        </Carousel.Item>


                        <Carousel.Item>
                            <Container className="carousel-Inside">
                                <Container fluid>
                                    <h3>Tapez Vos Besoins</h3>
                                    <p>
                                        Dites-nous ce que vous recherchez ou ce qui doit être réparé sur votre voiture et nous trouverons les meilleurs garages à proximité et vous donnerons le meilleur prix approximative.
                                    </p>
                                </Container>

                                <Container fluid>
                                    <Image
                                        src={searchImg}
                                        alt="step2"
                                        fluid
                                    />
                                </Container>
                            </Container>

                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className="carousel-Inside">
                                <Container fluid>
                                    <h3>Choisissez un garage</h3>
                                    <p>
                                        vous aurez une liste des meilleurs garages de votre région et leurs détails pour choisir ce qui vous convient le meiux.
                                    </p>
                                </Container>

                                <Container fluid>
                                    <Image
                                        src={pickImg}
                                        alt="step1"
                                        fluid
                                    />
                                </Container>
                            </Container>

                        </Carousel.Item>

                        <Carousel.Item>
                            <Container className="carousel-Inside">
                                <Container fluid>
                                    <h3>Laissez un review!</h3>
                                    <p>
                                        Pour montrer que vous êtes heureux, laissez un avis sur le garage et recommandez le garage à des amis et à d'autres
                                    </p>
                                </Container>

                                <Container fluid>
                                    <Image
                                        src={reviewImg}
                                        alt="step1"
                                        fluid
                                    />
                                </Container>
                            </Container>

                        </Carousel.Item>



                    </Carousel>
                </Container>


            </div>
        )
    }
}


export default CCM;