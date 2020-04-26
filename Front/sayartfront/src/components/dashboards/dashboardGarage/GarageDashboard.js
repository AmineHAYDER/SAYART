import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import AuthContext from '../../../contexts/Auth/authContext';
import Menu from "../Menu";
import Profile from "../Profile";
import Appointments from "./appointments/Appointments";


import GarageContext from "../../../contexts/Garage/garageContext";

const GarageDashboard = () => {

    const garageContext = useContext(GarageContext);
    const authContext = useContext(AuthContext);

    const [ page, setPage ] = useState("MyCar");
    useEffect(() => {
        garageContext.loadAppointments();
    }, [])
    const onChangePage = e => {
        e.preventDefault();
        setPage(e.target.name)
    }
    const renderSwitch = (page) => {
        switch(page) {
            case 'profile':
                return <Profile/>;
            case 'MyCar':
                return 'MyCar';
            case 'appointments':
                return <Appointments/>;
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