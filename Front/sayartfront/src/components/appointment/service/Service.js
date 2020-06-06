import React, {useContext, useState} from 'react';
import {Col, Row, Container, Button} from "react-bootstrap";
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';


import '../../../css/takeAppointment/service/Service.css';

import ServiceDetails from "./ServiceDetails";
import ServiceButton from "./ServiceButton";
//images
import mechanicImage from '../../../img/landingpage/icons/entretien.png';
import wheelImage from '../../../img/landingpage/icons/tires.png';
import washImage from '../../../img/landingpage/icons/lavage.png';
import oilChangeImage from '../../../img/landingpage/icons/vidange.png';


const Service = (props) => {

    const appointmentContext = useContext(AppointmentContext);
    const {pages} = appointmentContext
    const [service, selectService] = useState(pages.service.name);
    const [detail, selectDetail] = useState("");

    const setService = (e) => {
        e.preventDefault()
        selectService(e.target.name);
        pages.service.name = e.target.name

    }
    const Clicked = (name) => {
        if (service === name) {
            return "ImageSelect-active"
        } else {
            return "ImageSelect"
        }


    }

    return (
        <Container>
            <h3 className="label-pages">Service اختار  </h3>
            <hr></hr>
                <Row lg={4} md={6} xs={12}>
                    <Col lg={1}/>
                    <Col lg={2} className={Clicked("mechanic")}>
                        <ServiceButton name={"mechanic"} image={mechanicImage} label={"Méchanique"} onClick={setService}/>
                    </Col>
                    <Col lg={2} className={Clicked("wheel")} >
                        <ServiceButton name={"wheel"} image={wheelImage} label={"Pneu"} onClick={setService}/>
                    </Col>
                    <Col lg={2} className={Clicked("wash")}>
                        <ServiceButton name={"wash"} image={washImage} label={"Lavage"} onClick={setService}/>
                    </Col>
                    <Col lg={2} className={Clicked("oilChange")}>
                        <ServiceButton name={"oilChange"} image={oilChangeImage} label={"Vidange"} onClick={setService}/>
                    </Col>
                </Row>

                <ServiceDetails service={service} selectDetail={selectDetail}/>
                <hr/>
            <Row>

                <Button
                    onClick={(e) => {
                        pages.service.state = true
                        pages.active = "timing"
                        props.setPage("timing")
                    }}
                      disabled={!pages.service.detail}
                    variant="warning"
                    style={{ "width": "200px", "margin-left": "40%" }}
                >
                    Validate
                </Button>
            </Row>
        </Container>
    )

};

export default Service;