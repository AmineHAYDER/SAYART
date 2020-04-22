import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Spinner} from 'react-bootstrap';

import Menu from './Menu'
import Profile from './Profile'
import MyCar from './MyCar/MyCar'
import Appointments from './appointments/Appointments'

import '../../css/dashboard/ClientDashboard.css'

import AppointmentContext from "../../contexts/Appointment/appointmentContext";

const ClientDashboard = () => {

    const appointmentContext = useContext(AppointmentContext);
    const [ page, setPage ] = useState("MyCar");

    useEffect(() => {
        appointmentContext.loadAppointments();
    }, [])
    const onChangePage = e => {
        e.preventDefault();
        setPage(e.target.name)
    }
    const renderSwitch = (page) => {
        switch(page) {
            case 'profile':
                return <Profile/>;
            case 'MyCar':
                return <MyCar/>;
            case 'appointments':
                return <Appointments/>;
            default:
                return page;
        }
    }

console.log(appointmentContext.loading )
    return (
        <div className="dashboard">

            {appointmentContext.loading ?<Spinner animation="border" /> :
            <Row>
                <Col className="" lg={2}>
                    <Menu onChange={onChangePage} page={page}/>
                </Col>
                <Col className="content-dashboard">

                    { renderSwitch(page) }

                </Col>
            </Row>}
        </div>);

}

export default ClientDashboard;