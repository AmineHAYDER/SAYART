import React, { useContext } from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import '../../../css/dashboard/MyCar/CarSection.css'

import AppointmentContext from "../../../contexts/Appointment/appointmentContext";
import img from '../../../img/cars/audi-A8.png'


const CarSection = () => {

    const appointmentContext = useContext(AppointmentContext);
    const {car} = appointmentContext



    return (
        <Row className="car-informations">
            <Col  lg={4}>
                <h1>Ma Voiture </h1>
                <hr></hr>
                <h6>Mark : {appointmentContext.car.mark}</h6>
                <h6>Model : {appointmentContext.car.model}</h6>
            </Col>
            <Col lg={8}>
                <img src={img}/>
            </Col>
        </Row>
    );

}

export default CarSection;