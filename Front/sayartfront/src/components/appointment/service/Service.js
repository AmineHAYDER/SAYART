import React, { useContext, useState } from 'react';
import { Col, Row, Image, Container, Button } from "react-bootstrap";
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';



import '../../../css/takeAppointment/service/service.css';

import ServiceDetails from "./ServiceDetails";

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
    const Clicked = (e) => {
        if (service === e) {
            return "ImageSelect-active"
        } else { return "ImageSelect" }


    }

    return (
        <Container>
            <h3 className="label-pages"> Choisir le service </h3>
            <hr></hr>
            <Container className={"toggleButtons"} >
                <Row lg={4} md={6} xs={12} >
                    <Col >
                        <hr></hr>
                        <h4 className="label-button"> Pneu </h4>
                        <hr></hr>
                        <Image
                            className={Clicked("wheel")}
                            onClick={setService}
                            name="wheel"
                            src={wheelImage}
                            fluid
                        />
                    </Col>
                    <Col></Col>
                    <Col  >
                        <hr></hr>
                        <h4 className="label-button" > mechanic </h4>
                        <hr></hr>
                        <Image
                            className={Clicked("mechanic")}
                            onClick={setService}
                            name="mechanic"
                            src={mechanicImage}
                            fluid
                        />
                    </Col>
                    <Col></Col>
                    <Col >
                        <hr></hr>
                        <h4 className="label-button"> oilchange </h4>
                        <hr></hr>
                        <Image
                            className={Clicked("oilChange")}
                            onClick={setService}
                            name="oilChange"
                            src={oilChangeImage}
                            fluid
                        />
                    </Col>
                    <Col></Col>
                    <Col >
                        <hr></hr>
                        <h4 className="label-button"> wash </h4>
                        <hr></hr>
                        <Image
                            className={Clicked("wash")}
                            onClick={setService}
                            name="wash"
                            src={washImage}
                            fluid
                        />
                    </Col>
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