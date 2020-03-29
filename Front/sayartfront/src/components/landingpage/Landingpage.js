import React, { useContext, useEffect } from 'react';

import '../../App.css';

//router
import { Route, Switch } from "react-router-dom";

//footer w navbar
import Navbar from './TopNav';
import Footer from './Footer';

import PrivateRoute from '../../routes/PrivateRoute';
import AuthContext from '../../contexts/Auth/authContext'

//page components
import Register from '../authentification/Register';
import Login from '../authentification/Login'
import Acceuil from './Acceuil';
import ClientDashboard from '../dashboards/ClientDashboard';


const Landingpage = () => {


    const authContext = useContext(AuthContext);
    const { isAuthenticated, loadUser } = authContext

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div className="App">
            <Navbar />

            <Switch>
                <Route exact path="/" component={Acceuil} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/dashboard/client" component={ClientDashboard} />
            </Switch>


            <Footer />
        </div>
    );

}

export default Landingpage;