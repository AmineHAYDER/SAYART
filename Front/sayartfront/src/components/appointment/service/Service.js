import React, { useContext, useState } from 'react';
import { Col, Row, Image, Container, Button } from "react-bootstrap";
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';



import '../../../css/takeAppointment/service/Service.css';

import ServiceDetails from "./ServiceDetails";
import ServiceButton from "./ServiceButton";
//images
import mechanicImage from '../../../img/takeAppointment/mechanic.png';
import wheelImage from '../../../img/takeAppointment/wheel.png';
import washImage from '../../../img/takeAppointment/wash.png';
import oilChangeImage from '../../../img/takeAppointment/oilChange.png';


const Service = (props) => {

    const appointmentContext = useContext(AppointmentContext);
    const { pages } = appointmentContext
    const [service, selectService] = useState(pages.service.name);
    const [detail, selectDetail] = useState("");

    const setService = (e) => {
        e.preventDefault()
        selectService(e.target.name);
        pages.service.name = e.target.name

    }
    console.log(pages.service)
    const Clicked = (name) => {
        if (service === name) {
            return "ImageSelect-active"
        } else { return "ImageSelect" }


    }

    return (
        <Container>
            <h3 className="label-pages"> Choisir le service </h3>
            <hr></hr>
            <Container className={"toggleButtons"} >
                <Row lg={4} md={6} xs={12} >

                    <ServiceButton  name={"wheel"} state={Clicked("wheel")} image={wheelImage} onClick={setService}/>

                    <Col></Col>

                    <ServiceButton  name={"mechanic"} state={Clicked("mechanic")} image={mechanicImage} onClick={setService}/>

                    <Col></Col>
                    <ServiceButton  name={"oilChange"} state={Clicked("oilChange")} image={oilChangeImage} onClick={setService}/>

                    <Col></Col>
                    <ServiceButton  name={"wash"} state={Clicked("wash")} image={washImage} onClick={setService}/>

                </Row>
            </Container>
            <Row>
                <ServiceDetails service={service} selectDetail={selectDetail} />
            </Row>
            <Row>
                <Button
                    onClick={(e) => {
                        pages.service.state = true
                        pages.active = "timing"
                        props.setPage("timing")
                    }}
                    disabled={!pages.service.detail}
                >
                    Validate
                </Button>
            </Row>
        </Container>
    )

};

export default Service;