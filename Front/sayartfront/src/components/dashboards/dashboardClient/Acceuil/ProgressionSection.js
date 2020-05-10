import React, { useState, useContext } from "react";

import "../../../../css/dashboard/clienDashboard/Acceuil/ProgressionSection.css"

import { Col, Row, Image, Button, ProgressBar } from "react-bootstrap";



import { Link } from "react-router-dom"

const ProgressionSection = (props) => {



    return (
        <div className="progression-section">
            <div>
                <div style={{ "text-align": "left" }}>
                    <h2 className="mb-0">Ma progression</h2>
                    <p className="h6 font-weight-normal mt-2 mb-0">
                        Terminer ces défis vous permet de gagner des cadeaux
                    </p>
                </div>
            </div>
            <div className="progress-bar-section">
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h3> Vidanges </h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ProgressBar now={40}></ProgressBar>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h3> Lavages </h3>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <ProgressBar now={60}></ProgressBar>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProgressionSection;