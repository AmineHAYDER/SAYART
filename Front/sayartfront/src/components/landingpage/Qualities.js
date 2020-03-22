import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

import '../../css/landingpage/Qualities.css';

import reliableImg from '../../img/landingpage/reliable.png';
import trustedImg from '../../img/landingpage/trused.png';
import easyImg from '../../img/landingpage/easy.png';


class Qualities extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Image
                            src={easyImg}
                            alt="easy"
                        />
                        <h4 className="bigTextEasy">
                            Rapide et Facile
                        </h4>
                        <p>
                            Réservez votre service en quelques clics
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src={trustedImg}
                            alt="trusted"
                        />
                        <h4 className="bigTextTrusted">
                            Service Fiable
                        </h4>
                        <p>
                            Fournisseurs de services largement contrôlés, pour une expérience sans tracas.
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src={reliableImg}
                            alt="reliable"
                        />
                        <h4 className="bigTextReliable">
                            Satisfait ou remboursé
                        </h4>
                        <p>
                            Notre priorité est votre satisfaction
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Qualities;