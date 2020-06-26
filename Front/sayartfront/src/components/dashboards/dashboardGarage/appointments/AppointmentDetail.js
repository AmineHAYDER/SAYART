import React, {useContext, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import GarageContext from '../../../../contexts/Garage/garageContext'
import '../../../../css/dashboard/clienDashboard/appointments/Appointments.css'

import { NotificationManager} from "react-notifications";

const AppointmentDetail = (props) => {
    const garageContext = useContext(GarageContext)
    const {ConfirmAppointment} = garageContext


    const Confirm = ()=>{
        ConfirmAppointment({appointment:props.appointment}).then((success =>{
            console.log(success)
            if ( success === "True") NotificationManager.success('Success','Appointment Confirmed')
            else NotificationManager.error('Error','Appointment NOT Confirmed')
        }))
        props.setAppointment("")
    }
    if (props.appointment) return (
        <Container className="detail-container">
            <Row className="detail-Service">
                <Col lg={4}>
                    <h1> Service </h1>
                </Col>
                <Col>
                    <h4>Name :{props.appointment.service.name}  </h4>
                    <h4>Price :{props.appointment.service.price}  </h4>
                    <h4>Duration :{props.appointment.service.duration}  </h4>   </Col>
            </Row>
            <Row className="detail-Service">
                <Col>
                    <h1> Car </h1>
                    <h4>Mark :{props.appointment.car.mark} </h4>
                    <h4>Model :{props.appointment.car.model}  </h4>
                    <h4>Version :{props.appointment.car.version}  </h4>
                </Col>
            </Row>
            <Row className="detail-Service">
                <Col>
                    <h1> Timing </h1>
                    <h4>Date : {props.appointment.date} </h4>
                </Col>
            </Row>
            <Row>
                {props.appointment.state ==="AppointmentRequest" ? <Button onClick={Confirm}>Confirm</Button>:props.appointment.state}
            </Row>
        </Container>)
    else  return null


}

export default AppointmentDetail;