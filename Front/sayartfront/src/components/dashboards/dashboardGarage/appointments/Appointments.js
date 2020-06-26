import React, {useContext, useEffect, useState} from 'react';
import {Container, Row} from 'react-bootstrap';

import GarageContext from "../../../../contexts/Garage/garageContext";

import WaitingAppointments from "./waitingAppointments/WaitingAppointments";
import AppointmentDetail from './AppointmentDetail'
import AppointmentsTable from "./appointmentsTable/AppointmentsTable";


import '../../../../css/dashboard/clienDashboard/appointments/Appointments.css'


const Appointments = (props) => {

    const garageContext = useContext(GarageContext)
    const [appointment, setAppointment] = useState("")
    useEffect(() => {
        garageContext.loadAppointments();
    }, [])

    return (<Container>
            <WaitingAppointments setAppointment={setAppointment}/>

            <AppointmentsTable setAppointment={setAppointment}/>
            <Row>
                <AppointmentDetail appointment={appointment} setAppointment={setAppointment}/>
            </Row>
        </Container>
    );

}

export default Appointments;