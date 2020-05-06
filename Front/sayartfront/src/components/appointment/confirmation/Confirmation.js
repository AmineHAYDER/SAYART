import React, { useContext, useState } from 'react';
import { Col, Row, Jumbotron, Button, Container } from "react-bootstrap";
import '../../../css/takeAppointment/Confirmation.css'
import SelectGarage from './SelectGarage'
import AppointmentDetail from './AppointmentDetail'
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';

const Confirmation = () => {

    const appointmentContext = useContext(AppointmentContext);
    const [garage, setGarage] = useState("")

    const VerifyData = () => {
        if (garage) {
            return <AppointmentDetail onClick={setGarage} />
        } else if (appointmentContext.address && appointmentContext.pages.service.state && appointmentContext.pages.timing.state) {

            return <SelectGarage choose={setGarage} />
        }
        else {
            return "data missing"
        }


    }
    return (
        <Container>

            <Row>{VerifyData()}</Row>
        </Container>
    )

};

export default Confirmation;