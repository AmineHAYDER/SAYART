import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import Menu from '../Menu'
import Profile from './profile/Profile'
import Appointments from './appointments/Appointments'
import MainDashboard from './mainDashboard/MainDashboard';
import Analytics from './analytics/Analytics'
import Car from './Car/Car'

import Settings from "../settings/SettingsPage";

import AppointmentContext from "../../../contexts/Appointment/appointmentContext";
import UserContext from "../../../contexts/User/userContext";
import '../../../css/dashboard/Dashboard.css'



const ClientDashboard = () => {

    const appointmentContext = useContext(AppointmentContext);
    const userContext = useContext(UserContext)
    const [page, setPage] = useState("analytics");


    useEffect(() => {
        appointmentContext.loadAppointments();
        userContext.loadCar();
        userContext.getRecommendedGarages();
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
                return <MainDashboard car={userContext.car} />;
            case 'appointments':
                return <Appointments />;
            case 'analytics':
                return <Analytics />;
            case 'MyCar':
                return <Car car={userContext.car} />

            case 'settings':
                return <Settings />
            default:
                return page;
        }
    }

    return (
        <div style={{ width: "99%" }}>

            <Row>
                <Col className="" lg={2}>
                    <Menu onChange={onChangePage} page={page} />
                </Col>
                <Col className="">
                    {renderSwitch(page)}
                </Col>
            </Row>
        </div>);

}

export default ClientDashboard;