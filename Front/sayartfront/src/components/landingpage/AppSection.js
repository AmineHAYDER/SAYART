import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

import '../../css/landingpage/AppSection.css'

import googleIcon from "../../img/landingpage/icons/googleplay.png";
import appleIcon from "../../img/landingpage/icons/apple.png";

class AppSection extends React.Component {
    render() {
        return (
            <div className="background">
                <Container class="align-content-center">

                    <Row >

                        <Col>
                            <h3 className="downloadText">Application coming soon!</h3>
                        </Col>

                        <div className="app-buttons">
                            <Col>
                                <a href="http://www.google.com" className="download-btn">
                                    <i>
                                        <img src={googleIcon} /> </i>
                                   Google Play</a>



                                <a href="http://www.google.com" className="download-btn">
                                    <i>
                                        <img src={appleIcon} /> </i>
                                App Store</a>
                            </Col>

                        </div>
                    </Row>
                </Container>
            </div>);
    }
}


export default AppSection;
