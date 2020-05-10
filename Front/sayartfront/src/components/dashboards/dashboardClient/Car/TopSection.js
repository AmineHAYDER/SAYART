import React from "react";

import { Image, Col, Row, Container } from "react-bootstrap";

import carImage from "../../../../img/cars/audi-A8.png"

const TopSection = (props) => {


    return (
        <div className="car-top-section">
            <Row>
                <Col lg={3} className="">
                    <Image fluid
                        src={carImage}
                        alt="car Image" />
                </Col>
                <Col lg={5} className="top-section-text">
                    <h3>
                        {props.car.mark + " " + props.car.model}
                    </h3>
                </Col>
                <Col className="top-section-text" >
                    <h3>{props.car.status}</h3>
                </Col>
            </Row>
        </div>
    )
}


export default TopSection;