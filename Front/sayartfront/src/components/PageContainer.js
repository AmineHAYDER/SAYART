import React, {useContext, useEffect} from 'react';

import Navbar from './landingpage/TopNav';


//states
import AppointmentState from '../contexts/Appointment/appointmentState';
import GarageState from '../contexts/Garage/garageState';
import UserState from '../contexts/User/userState';

import AdminState from '../contexts/Admin/adminState';

//pages
import Home from './landingpage/Home';
import Login from './authentification/Login';
import Register from './authentification/Register';
import CCM from './landingpage/Carousel';
import AdminDashboard from './dashboards/dashboardAdmin/AdminDashboard';
import Dashboard from './dashboards/Dashboard';
import TakeAppointment from "./appointment/TakeAppointment";
import Car from './carIdentification/CarIdentfication'
//routes
import {Switch, Route} from 'react-router-dom';
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

            <Navbar context={authContext}/>

            <Switch>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/CCM" component={CCM}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/car" component={Car}/>
                    <AppointmentState>
                        <GarageState>
                            <UserState>
                                <PrivateRoute exact path="/takeAppointment" component={TakeAppointment}/>
                                <PrivateRoute exact path="/dashboard/" component={Dashboard}/>
                                <AdminState>
                                    <PrivateRoute exact path="/dashboard/admin" component={AdminDashboard}/>
                                </AdminState>
                            </UserState>
                        </GarageState>
                    </AppointmentState>

                </div>
            </Switch>


        </div>
    );

}

export default PageContainer;