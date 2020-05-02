import React, {useContext, useEffect} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AuthContext from '../../../../contexts/Auth/authContext';
import GarageContext from '../../../../contexts/Garage/garageContext';
import TimingTable from "./timingTable/TimingTable";
import '../../../../css/dashboard/mechanicDashboard/onlineGarage/OnlineGarage.css'

const OnlineGarage = () => {

    const authContext = useContext(AuthContext);

    const garageContext = useContext(GarageContext);
    const {garage} = garageContext
    const { user } = authContext;
    return (<div>
       {garageContext.loading ? "loading" : <div>

            <Row>
                <Col lg={2}>
                    <img className={"logo-garage"} src={process.env.PUBLIC_URL + '/img/mechanic-Logo.jpg'}/>
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
               <TimingTable />
           </Row>
        </div>}</div>

    );
}

export default OnlineGarage;