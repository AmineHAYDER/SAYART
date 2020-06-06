import React, {useContext} from 'react';
import {Col, Row} from 'react-bootstrap';
import GarageContext from '../../../../contexts/Garage/garageContext';
import TimingTable from "./timingTable/TimingTable";
import '../../../../css/dashboard/mechanicDashboard/onlineGarage/OnlineGarage.css'

const OnlineGarage = () => {


    const garageContext = useContext(GarageContext);
    return (
            <div>

                <Row>
                    <TimingTable/>
                </Row>
            </div>


    );
}

export default OnlineGarage;