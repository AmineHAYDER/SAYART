import React, {useContext, useState} from 'react';
import {Col, Row, Button} from "react-bootstrap";
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';

import '../../../css/takeAppointment/service/ServiceDetails.css'

import servicesDetails from './data/servicesDetails'

const mechanicServices = servicesDetails.mechanicServices

const Mechanic = (props) => {
    const appointmentContext = useContext(AppointmentContext);
    const {pages} = appointmentContext
    const [selectedDetail, setSelectedDetail] = useState(pages.service.detail)

    const setServiceDetails = (e) => {
        setSelectedDetail(e.target.name)
        pages.service.detail = e.target.name;
        props.onClick(e.target.name)
    }

    const OptionList = (props) => {
        return props.data.map((item, i) => {
            return (
                <Row key={i}>
                    <Button className="button-detail" name={item.name} onClick={props.onClick}>
                        {item.name}
                    </Button>
                </Row>
            );
        })
    }


    return (
        <div>
            <hr/>
            <Row style={{marginTop:"40px"}}>
                <Col style={{height: "500px", overflowY: "auto"}}>
                    <div >
                        <OptionList className="OptionList" onClick={setServiceDetails} data={mechanicServices}/>
                    </div>
                </Col>
                <Col lg={8} style={{marginTop:"20%"}}>
                    <h1>Service اختار </h1>
                </Col>
            </Row>

        </div>

    )

};

export default Mechanic;