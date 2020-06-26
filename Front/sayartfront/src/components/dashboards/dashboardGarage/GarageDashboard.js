import React, {useContext, useEffect, useState} from 'react';
import {Col, Row, Spinner} from 'react-bootstrap';
import Menu from "./Menu";
import OnlineGarage from "./onlineGarage/OnlineGarage";
import Appointments from "./appointments/Appointments";
import Stock from "./stock/Stock";
import MainDashboard from "./mainDashboard/MainDashboard";


import GarageContext from "../../../contexts/Garage/garageContext";

const GarageDashboard = () => {

    const garageContext = useContext(GarageContext);

    const [page, setPage] = useState("dashboard");
    useEffect(() => {
        garageContext.loadAppointments()
        garageContext.loadGarage();
    }, [])
    const onChangePage = e => {
        e.preventDefault();
        setPage(e.target.name)
    }
    const renderSwitch = (page) => {
        switch (page) {
            case 'dashboard':
                return <MainDashboard/>;
            case 'MyCar':
                return <OnlineGarage/>;
            case 'stock':
                return <Stock/>;
            case 'appointments':
                return <Appointments/>;
            default:
                return page;
        }
    }

    return (

        <div className="dashboard"><Row>

                <Col className="" lg={2}>
                    <Menu onChange={onChangePage} page={page}/>
                </Col>
                <Col className="content-dashboard">
                    {renderSwitch(page)}
                </Col>


            </Row>
        </div>


    );

}

export default GarageDashboard;