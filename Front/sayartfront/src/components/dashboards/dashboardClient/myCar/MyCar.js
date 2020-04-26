import React, {useContext, useEffect} from 'react';
import { Row, Container, Col, ProgressBar} from 'react-bootstrap';

import '../../../../css/dashboard/clienDashboard/myCar/Counters.css'

import Mileage from "./Mileage";
import FuelType from "./FuelType"
import CarState from "./CarState"

import CarSection from "./CarSection"

import AppointmentContext from '../../../../contexts/Appointment/appointmentContext'


const MyCar = () => {
const appointmentContext = useContext(AppointmentContext)
    useEffect(() => {

        appointmentContext.loadCar();

    }, [])
    return (<Container >
                <Row>
                    <Col lg={3}><Mileage/></Col>
                    <Col lg={3}><FuelType/></Col>
                    <Col><CarState/></Col>
                </Row>
                <Row>
                    <Col><CarSection/></Col>
                </Row>
                <Row>
                    <Col className="fastWash page-name-dashboard " >
                        <h6>Wash</h6>
                        <ProgressBar now={12.5} striped variant="warning" label={`1 lavage`} />
                        <hr></hr>
                        <h6>dernier lavage :<a> 7 jours</a></h6>
                    </Col>
                    <Col className="fastOilChange page-name-dashboard" >
                        <h6>Vidange</h6>
                        <ProgressBar now={37.5} striped variant="secondary" label={`3500 KM`} />
                        <hr></hr>
                        <h>dernier vidange :<a> 3 mois </a></h>
                    </Col>
                </Row>

           </Container>
    );

}

export default MyCar;