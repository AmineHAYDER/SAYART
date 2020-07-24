import React, { useContext } from 'react';
import AuthContext from '../../contexts/Auth/authContext';

import GarageDashboard from "./dashboardGarage/GarageDashboard";
import ClientDashboard from "./dashboardClient/ClientDashboard";

import {NotificationContainer} from "react-notifications";

const Dashboard = () => {

    const authContext = useContext(AuthContext);

    const { user } = authContext;

    const renderSwitch = () => {
        switch (user.role) {
            case 'garage':
                return <GarageDashboard />
            case 'admin':
                return <ClientDashboard />
            case 'user':
                return <ClientDashboard />
        }
    }
    return (
        <div>
            <NotificationContainer/>
            {renderSwitch()}
        </div>
    );

}

export default Dashboard;