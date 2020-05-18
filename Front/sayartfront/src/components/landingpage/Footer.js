import React from 'react';
import {  Container, Row, Col, Image } from 'react-bootstrap';


import '../../css/landingpage/Footer.css'

import linkedIcon from '../../img/landingpage/linkedInIcon.png';
import facebookIcon from '../../img/landingpage/facebookIcon.png';
import twitterIcon from '../../img/landingpage/twitterIcon.png';
import instagramIcon from '../../img/landingpage/instagramIcon.png';

import logo from '../../img/landingpage/SayartlogoMini.png';

class Footer extends React.Component {
    render() {
        return (
            <Container className="footer">
                <hr/>
                <Row >
                    <Col sm={12} lg={4}>
                        <div className="colMarg ">
                            <Image
                                src={logo}
                                alt="logo"
                            />
                            <br/><br/>
                            <p>
                                Le premier platforme indépendant de réservation et de suivie des services d'entretien automobile en tunisie
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}></Col>
                    <Col lg={4} sm={12} xs={12} >

                        <Row className="justify-content-center">
                            <a className="icons" href="https://linkedin.com">
                                <Image
                                    src={linkedIcon}
                                    alt="linkedIn"
                                >
                                </Image></a>
                            <a className="icons" href="https://twitter.com">
                                <Image
                                    src={twitterIcon}
                                    alt="twitter"
                                >
                                </Image></a>
                            <a className="icons" href="https://facebook.com">
                                <Image
                                    src={facebookIcon}
                                    alt="facebook"
                                >
                                </Image></a>
                            <a className="icons" href="https://instagram.com">
                                <Image
                                    src={instagramIcon}
                                    alt="instagram"
                                >
                                </Image></a>
                        </Row>
                        <Row className="col-text justify-content-center">
                            <div>
                                <span className="purpleColor">Tel: (+216) </span> <span className="purpleColor"> 54 303 551</span>
                            </div>
                        </Row>
                        <Row className="col-text justify-content-center">
                            <div>
                               <span className="purpleColor">Email: contact@ </span> <span className="purpleColor">sayart.tn</span>
                            </div>
                        </Row>
                        <Row className="justify-content-center">
                            <div>
                                <div> Comment ça marche </div>
                                <div> Contact </div>
                                <div> Termes et conditions </div>
                            </div>
                        </Row>
                    </Col >
                </Row >
                <hr/>
                <Row className="justify-content-center">
                    <div className="copyright-text">
                        COPYRIGHT © 2020. SAYART.
                    </div>
                </Row>

            </Container >
        );
    }
}


export default Footer;