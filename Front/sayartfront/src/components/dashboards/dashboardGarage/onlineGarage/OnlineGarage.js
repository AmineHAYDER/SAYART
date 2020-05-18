import React, {useContext} from 'react';
import {Col, Row} from 'react-bootstrap';
import GarageContext from '../../../../contexts/Garage/garageContext';
import TimingTable from "./timingTable/TimingTable";
import '../../../../css/dashboard/mechanicDashboard/onlineGarage/OnlineGarage.css'

const OnlineGarage = () => {


    const garageContext = useContext(GarageContext);
    return (<div>
            {garageContext.loading ? "loading" : <div>

                <Row>
                    <Col lg={2}>
                        <img alt={''} className={"logo-garage"}
                             src={process.env.PUBLIC_URL + '/img/mechanic-Logo.jpg'}/>
                    </Col>
                    <Col>
                        <h1>{garageContext.garage.name}</h1>
                    </Col>
                    <Col>
                        <h1>{garageContext.garage.status}</h1>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <TimingTable/>
                </Row>
            </div>}</div>

    );
}

export default OnlineGarage;