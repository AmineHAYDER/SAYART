import React, { useContext } from "react";

import { Col, Row, Image } from "react-bootstrap";

import "../../../../../css/dashboard/clienDashboard/Acceuil/TopSection.css"

import GarageLogo from "../../../../../img/landingpage/SayartlogoMini2.png"

const RecommendedGarage = () => {



    return (
        <div>
            <Row>
                <Col className="col-3">
                    <Image fluid
                        src={GarageLogo}
                        alt="garage logo"
                    />
                </Col>
                <Col className="col-9">
                    <h5 className="mb-0">
                        Garage Zabeba
                    </h5>
                    <p className="h6 font-weight-normal text-secondary mt-2 mb-0">
                        Promotion chez garage zabeba, 20% remise 2012-2010
                    </p>
                    <a href="#">Prenez un rendez-vous</a>
                </Col>
            </Row>
        </div>
    );
}

export default RecommendedGarage;