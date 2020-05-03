import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import '../../../../css/dashboard/clienDashboard/myCar/CarSection.css'

import UserContext from "../../../../contexts/User/userContext";
import img from '../../../../img/cars/audi-A8.png'


const CarSection = () => {

    const userContext = useContext(UserContext);
    const { car } = userContext



    return (
        <Row className="car-informations">
            <Col lg={4}>
                <h1>Ma Voiture </h1>
                <hr></hr>
                <h6>Mark : {car.mark}</h6>
                <h6>Model : {car.model}</h6>
            </Col>
            <Col lg={8}>
                <img src={img} />
            </Col>
        </Row>
    );

}

export default CarSection;