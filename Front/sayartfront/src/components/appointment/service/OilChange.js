import React, {useContext, useState} from 'react';
import {Col, Row, Container, ListGroup} from "react-bootstrap";
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';
import '../../../css/takeAppointment/service/ServiceDetails.css'

import servicesDetails from './data/servicesDetails'

const oilChangeArticles = servicesDetails.oilChangeArticles

const ServiceDetails = (props) => {
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
                <Col key={i}>
                    <ListGroup.Item action className="button-detail" name={item.name} onClick={props.onClick}>
                        {item.name}
                    </ListGroup.Item>
                </Col>
            );
        })
    }


    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <hr></hr>
                    <h5>Choose one </h5>

                    <ListGroup className="OptionList" defaultActiveKey="1">
                        <Row lg={1} xs={2}>
                            <OptionList className="OptionList" onClick={setServiceDetails} data={oilChangeArticles}/>
                        </Row>
                    </ListGroup>

                </Col>
            </Row>
            <Row>
                <Col>
                    <hr></hr>
                    <h6>{selectedDetail}</h6>
                    <hr></hr>
                </Col>
            </Row>
        </Container>
    )

};

export default ServiceDetails;