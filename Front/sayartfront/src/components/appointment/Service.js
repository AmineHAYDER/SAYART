import React from 'react';
import {Button, Col, Form, Row, Alert, Navbar} from "react-bootstrap";

import mechanicImage from '../../img/takeAppointment/mechanic.jpg';
const Service = () => {
    return (
        <Row>
            <Col lg={1}>
                <img
                    src={mechanicImage}

                    className="d-inline-block align-top logo"
                    alt="React Bootstrap logo"
                />


            </Col>

            <Col>
                <img
                    src={mechanicImage}

                    className="d-inline-block align-top logo"
                    alt="React Bootstrap logo"
                />


            </Col>

            <Col>
                <img
                    src={mechanicImage}

                    className="d-inline-block align-top logo"
                    alt="React Bootstrap logo"
                />


            </Col>
        </Row>
    )

};

export default Service;