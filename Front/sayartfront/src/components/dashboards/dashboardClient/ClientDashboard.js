import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

import Menu from '../Menu'
import Profile from './profile/Profile'
import MyCar from './myCar/MyCar'
import Appointments from './appointments/Appointments'
import Dashboard from './Test/Dashboard';

import Car from './Car/Car'

import AppointmentContext from "../../../contexts/Appointment/appointmentContext";
import UserContext from "../../../contexts/User/userContext";
import '../../../css/dashboard/Dashboard.css'



const ClientDashboard = () => {

    const appointmentContext = useContext(AppointmentContext);
    const userContext = useContext(UserContext)
    const [page, setPage] = useState("dashboard");


    useEffect(() => {
        appointmentContext.loadAppointments();
        userContext.loadCar();
    }, [])
    const onChangePage = e => {
        e.preventDefault();
        setPage(e.target.name)
    }
    const renderSwitch = (page) => {
        switch (page) {
            case 'profile':
                return <Profile />;
            case 'dashboard':
                return <Dashboard car={userContext.car} />;
            case 'appointments':
                return <Appointments />;
            case 'MyCar':
                return <Car car={userContext.car} />
            default:
                return page;
        }
    }

    return (
        <div className="">

            {appointmentContext.loading ? <Spinner animation="border" /> :
                <Row>
                    <Col className="" lg={2}>
                        <Menu onChange={onChangePage} page={page} />
                    </Col>
                    <Col className="">

                        {renderSwitch(page)}

                    </Col>
                </Row>}
        </div>);

}

export default ClientDashboard;