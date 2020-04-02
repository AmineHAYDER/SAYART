import React, { useContext ,useState} from 'react';
import {Nav, Button, NavLink, Row, Container,Col} from 'react-bootstrap';
import Menu from './Menu'
import Profile from './Profile'
import OnLineGarage from './OnLineGarage'
import {Route, Switch, Link } from "react-router-dom";

import AuthContext from '../../contexts/Auth/authContext';

import '../../css/landingpage/Topnav.css'
import PrivateRoute from "../../routes/PrivateRoute";
import Acceuil from "../landingpage/Acceuil";
import Login from "../authentification/Login";
import Register from "../authentification/Register";

const ClientDashboard = () => {

    const [page,setPage] = useState("appointments");


    const authContext = useContext(AuthContext);

    const { isAuthenticated, user } = authContext;


    const onChangePage = e => {
        e.preventDefault();
        setPage(e.target.name)
    }

    const renderSwitch = (page) => {
        switch(page) {
            case 'profile':
                return <Profile/>;
            case 'onLineGarage':
                return <OnLineGarage/>;
            default:
                return page;
        }
    }


    return (<div>

               <Row>
                   <Col xs lg={2}  >
                         <Menu onChange={onChangePage}/>
                   </Col>
                   <Col >
                       { renderSwitch(page)}
                   </Col>
               </Row>
            </div>);

}

export default ClientDashboard;