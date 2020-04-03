import React, { useContext, useEffect, memo } from 'react';


import Navbar from './landingpage/TopNav';
import Footer from './landingpage/Footer';

//appointment state
import AppointmentState from '../contexts/Appointment/appointmentState';

//pages
import Acceuil from './landingpage/Acceuil';
import Login from './authentification/Login';
import Register from './authentification/Register';
import ClientDashboard from './dashboards/ClientDashboard';
import TakeAppointment from "./appointment/TakeAppointment";

//routes
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';

//auth
import AuthContext from '../contexts/Auth/authContext';
import setAuthToken from '../contexts/Auth/setAuthToken';

const PageContainer = () => {


    const authContext = useContext(AuthContext);


    useEffect(() => {
        setAuthToken(localStorage.token);
        authContext.loadUser();

    }, [])

    return (
        <div className="App">

           {!authContext.isAuthenticated ? <Navbar context={authContext} /> : <Navbar context={authContext} />}
            
            <Switch>
                <Route exact path="/" component={Acceuil} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/dashboard/client" component={ClientDashboard} />

                <AppointmentState>
                   <PrivateRoute exact path="/takeAppointment" component={TakeAppointment} />
                </AppointmentState>
            </Switch>

            <Footer />

        </div>
    );

}

export default PageContainer;