import React, { useContext } from 'react';
import AuthContext from '../../contexts/Auth/authContext';

import GarageDashboard from "./dashboardGarage/GarageDashboard";
import ClientDashboard from "./dashboardClient/ClientDashboard";


const Dashboard = () => {

    const authContext = useContext(AuthContext);

    const { user } = authContext;

    const renderSwitch = () => {
        switch (user.role) {
            case 'garage':
                return <GarageDashboard />
            case 'admin':
                return <ClientDashboard />
            default:
                return <ClientDashboard />
        }
    }
    return (
        <div>
            {renderSwitch()}
        </div>
    );

}

export default Dashboard;