import React, {useContext} from "react";

import {Image, Col, Row} from "react-bootstrap";

import carImage from "../../../../img/cars/audi-A8.png"
import UserContext from "../../../../contexts/User/userContext";

const TopSection = (props) => {
    const userContext = useContext(UserContext);
    const {car} = userContext

    const State = () => {
        switch (car.status) {
            case "clean":
                return "en bonne etat"
            case "warning":
                return "Consulter vos rendez Vous"
            case "urgent":
                return "la voiture a besoin d'un vidange"
        }
    }
    const HasCar =
        <div className="car-top-section">
            <Row>
                <Col lg={3} className="">
                    <Image fluid
                           src={carImage}
                           alt="car Image"/>
                </Col>
                <Col lg={5} className="top-section-text">
                    <h3>
                        {props.car.mark + " " + props.car.model}
                    </h3>
                </Col>
                <Col className="top-section-text">
                    <h3>{State()}</h3>
                </Col>
            </Row>
        </div>
    const HasNotCar =
        <div className="car-top-section">
            <Row>
                <Col lg={3} className="">
                </Col>
                <Col lg={5} className="top-section-text">
                </Col>
                <Col className="top-section-text">
                </Col>
            </Row>
        </div>
    return (
        <div className="car-top-section">
            <Row>
                {car ? HasCar :HasNotCar }
            </Row>
        </div>
    )

}


export default TopSection;