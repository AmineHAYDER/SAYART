import React from "react";
import { Row, Col } from "react-bootstrap";

import "./MyCar.css"


const MyCar = () => {
    return (
        <div>
            <Row className="mb-5">
                <Col className="mycar-title">
                    <h1 className="h4 mb-0">Ma voiture</h1>
                    <p className="h6 font-weight-normal text-secondary mt-2 mb-0">
                        Ajouter, modifier et gérer les informations relatives à votre voiture
                  </p>
                </Col>
            </Row>
        </div>
    )
}

export default MyCar;
