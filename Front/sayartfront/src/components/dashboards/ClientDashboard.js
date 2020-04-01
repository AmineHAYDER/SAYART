import React, { useContext } from 'react';
import {Nav, Button, NavLink, Row, Container} from 'react-bootstrap';
import Menu from './Menu'
import Profile from './Profile'
import {Route, Switch, Link } from "react-router-dom";

import AuthContext from '../../contexts/Auth/authContext';

import '../../css/landingpage/Topnav.css'
import PrivateRoute from "../../routes/PrivateRoute";
import Acceuil from "../landingpage/Acceuil";
import Login from "../authentification/Login";
import Register from "../authentification/Register";

const ClientDashboard = () => {




    const authContext = useContext(AuthContext);

    const { isAuthenticated, user } = authContext;


    const testState = e => {
        e.preventDefault();


    }




    return (<div>


                         <Menu/>

                         <Profile/>

                <Switch>
                    <PrivateRoute exact path="/dashboard/client/profile" component={Profile} />
                </Switch>
            </div>);

}

export default ClientDashboard;