import React, { useContext } from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import '../../../css/dashboard/myCar/CarState.css'

import AppointmentContext from "../../../contexts/Appointment/appointmentContext";



const CarState = () => {

    const appointmentContext = useContext(AppointmentContext);
    const {car} = appointmentContext


    const State = ()=>{
        switch (car.status) {
            case "clean":
                return "en bonne etat"
            case "warning":
                return "Consulter vos rendez Vous"
            case "urgent":
                return "la voiture a besoin d'un vidange"
        }
    }



    return (
        <Container>
            <Row>
                <Col className={"CarState "+car.status }>
                    <h6>Etat de votre Voiture</h6>

                    <h5>{State()}</h5>
                    <hr></hr>
                    <button> prendre un rendez vous </button>
                </Col>
            </Row>
        </Container>
    );

}

export default CarState;