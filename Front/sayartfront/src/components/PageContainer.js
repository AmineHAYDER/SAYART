import React, { useContext, useEffect, memo } from 'react';


import Navbar from './landingpage/TopNav';
import Footer from './landingpage/Footer';


//pages
import Acceuil from './landingpage/Acceuil';
import Login from './authentification/Login';
import Register from './authentification/Register';
import ClientDashboard from './dashboards/ClientDashboard';

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

            <Navbar context={authContext} />

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

export default PageContainer;