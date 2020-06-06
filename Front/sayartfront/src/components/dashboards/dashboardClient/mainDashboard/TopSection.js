import React from "react";

import { Col, Row} from "react-bootstrap";

import "../../../../css/dashboard/clienDashboard/Acceuil/TopSection.css"

import Welcome from "./topSection/Welcome";
import RecommendedService from "./topSection/RecommendedServices";
import RecommendedGarage from "./topSection/RecommendedGarage";


const TopSection = () => {
    return (
        <div className="top-section">
            <Row>
                <Col lg={3} className="right-border-s">
                    <Welcome />
                </Col>
                <Col lg={2} className="recommended-service right-border-s">
                    <RecommendedService />
                </Col>
                <Col>
                    <RecommendedGarage />
                </Col>
            </Row>
        </div>
    );
}

export default TopSection;