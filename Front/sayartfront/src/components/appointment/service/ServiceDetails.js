import React, {useContext, useState} from 'react';
import { Col,  Row, Image, Container,ListGroup} from "react-bootstrap";
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';

import '../../../css/takeAppointment/service/service.css'

import servicesDetails from './data/servicesDetails'

const  washServices = servicesDetails.washServices
const ServiceDetails = (props) => {
    const appointmentContext = useContext(AppointmentContext);
    console.log()
console.log(washServices)
    const  wheelDetails = ["change","fix"];

    const  mechanicDetails = ["inter","ext","tout"]
   /* const listDetails = (details)=> details.map((item,i) =>

        <ListGroup.Item key={i}>{item}</ListGroup.Item>
    )*//*
     const renderOptions = ()=> {
        switch(appointmentContext.pages.service.name) {
            case 'wheel':
                return listDetails(washServices)
            case 'mechanic':
                return listDetails(wheelDetails)
            case 'wash':
                return listDetails(wheelDetails)
            case 'oilChange':
                return listDetails(wheelDetails)
            default:
                return "";
        }}

*/

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={5} md={6} xs={12}>
                    <hr></hr>
                    <ListGroup>
                        {washServices.map((s,i) => (<Col key={i}>{s.name}</Col>))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )

};

export default ServiceDetails;