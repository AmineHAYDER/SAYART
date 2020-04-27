import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import AuthContext from '../../../contexts/Auth/authContext';
import Menu from "../Menu";
import OnlineGarage from "./onlineGarage/OnlineGarage";
import Appointments from "./appointments/Appointments";
import Profile from "../Profile";


import GarageContext from "../../../contexts/Garage/garageContext";

const GarageDashboard = () => {

    const garageContext = useContext(GarageContext);
    const authContext = useContext(AuthContext);

    const [ page, setPage ] = useState("MyCar");
    useEffect(() => {
        garageContext.loadAppointments();
        garageContext.loadGarage();
    }, [])
    const onChangePage = e => {
        e.preventDefault();
        setPage(e.target.name)
    }
    const renderSwitch = (page) => {
        switch(page) {
            case 'MyCar':
                return <OnlineGarage/>;
            case 'appointments':
                return <Appointments/>;
            case 'profile':
                return <Profile/>;
            default:
                return page;
        }
    }

    return (

            <div className="dashboard">
                  <Row>

                      <Col className="" lg={2}>
                          <Menu onChange={onChangePage} page={page}/>
                      </Col>
                      <Col className="content-dashboard" >
                          {renderSwitch(page)}
                      </Col>


                  </Row>
            </div>


    );

}

export default GarageDashboard;