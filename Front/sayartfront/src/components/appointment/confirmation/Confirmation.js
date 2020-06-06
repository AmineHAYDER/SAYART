import React, {useContext, useState} from 'react';
import {Row, Container} from "react-bootstrap";
import '../../../css/takeAppointment/Confirmation.css'
import SelectGarage from './SelectGarage'
import AppointmentDetail from './AppointmentDetail'
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';


const Confirmation = () => {

    const appointmentContext = useContext(AppointmentContext);
    const [garage, setGarage] = useState(false)

    const VerifyData = () => {
        if (garage) {
            return <AppointmentDetail onClick={setGarage} garage={garage}/>
        } else if (appointmentContext.address && appointmentContext.pages.service.state && appointmentContext.pages.timing.state) {

            return (
                     <SelectGarage choose={setGarage} garage={garage}/>)
        } else {
            return <SelectGarage choose={setGarage} />
        }


    }
    return (
        <Container>

            <Row>{VerifyData()}</Row>
        </Container>
    )

};

export default Confirmation;