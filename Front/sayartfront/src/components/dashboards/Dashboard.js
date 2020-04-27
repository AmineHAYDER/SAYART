import React, { useContext } from 'react';
import {Col, Container, Row, Spinner} from 'react-bootstrap';
import AuthContext from '../../contexts/Auth/authContext';
import AppointmentContext from '../../contexts/Appointment/appointmentContext';
import GarageDashboard from "./dashboardGarage/GarageDashboard";
import ClientDashboard from "./dashboardClient/ClientDashboard";
import Menu from "./Menu";


const Dashboard = () => {

    const authContext = useContext(AuthContext);

    const appointmentContext = useContext(AppointmentContext);

    const { user } = authContext;

    const renderSwitch = ()=>{
        switch (user.role) {
                case 'garage' :
                    return <GarageDashboard/>
                case 'user' :
                    return <ClientDashboard/>
                default :
                return null
        }
    }
    return (
        <div>
        {appointmentContext.loading ?<Spinner animation="border" /> :
            renderSwitch()}
        </div>
    );

}

export default Dashboard;