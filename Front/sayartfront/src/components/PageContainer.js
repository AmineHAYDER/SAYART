import React, { useContext, useEffect } from 'react';
import { Container} from "react-bootstrap";

import Navbar from './landingpage/TopNav';
import Footer from './landingpage/Footer';

//states
import AppointmentState from '../contexts/Appointment/appointmentState';
import GarageState from '../contexts/Garage/garageState';

//pages
import Home from './landingpage/Home';
import Login from './authentification/Login';
import Register from './authentification/Register';
import CCM from './landingpage/Carousel';
import ClientDashboard from './dashboards/dashboardClient/ClientDashboard';
import Dashboard from './dashboards/Dashboard';
import TakeAppointment from "./appointment/TakeAppointment";
import Car from './carIdentification/CarIdentfication'
//routes
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';

//states
import AuthContext from '../contexts/Auth/authContext';
import setAuthToken from '../contexts/Auth/setAuthToken';

//css
import '../css/PageContainer.css'

const PageContainer = () => {


       const authContext = useContext(AuthContext);


    useEffect(() => {
        setAuthToken(localStorage.token);
        authContext.loadUser();

    }, [])

    return (
        <div className="App">

           <Navbar context={authContext} />

                <Switch>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/CCM" component={CCM} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/car" component={Car} />
                        <AppointmentState>
                            <PrivateRoute exact path="/takeAppointment" component={TakeAppointment} />
                            <PrivateRoute exact path="/dashboard/client" component={ClientDashboard} />
                            <GarageState>
                               <PrivateRoute exact path="/dashboard/" component={Dashboard} />
                            </GarageState>
                        </AppointmentState>

                   </div>
                </Switch>

            <Footer />

        </div>
    );

}

export default PageContainer;