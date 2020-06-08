import React, {useContext} from "react";
import {Col,Row} from 'react-bootstrap'
import chart from 'chart.js'
import Counter from "./Counter";

import AppointmentContext from '../../../../contexts/Appointment/appointmentContext';
import '../../../../css/dashboard/clienDashboard/analytics/ServicesCounters.css'

const ServicesCounters = ()=>{

    const appointmentContext = useContext(AppointmentContext)
    const {appointments} = appointmentContext
    const counters =(service)=>{
        let number = 0
        if (appointments) appointments.map(appointment =>{
            if (appointment.service.name === service) number++
        } )
            return number
    }
    return <Row className={"services-counters"}>
        <chart/>
          <Col lg={4} className={"services-counters-label"}>
             <h1> Services</h1>
          </Col>
        <Col lg={8}>
            <Row>
                <Col>
                    <h5>Lavage </h5>
                </Col>
                <Col>
                    <Counter value={counters("wash")}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Vidange </h5>
                </Col>
                <Col>
                    <Counter value={counters("oilChange")}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Mechanic </h5>
                </Col>
                <Col>
                    <Counter value={counters("wheel")}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Pneu </h5>
                </Col>
                <Col>
                    <Counter value={counters("mechanic")} />
                </Col>
            </Row>
        </Col>
    </Row>

}

export default ServicesCounters;