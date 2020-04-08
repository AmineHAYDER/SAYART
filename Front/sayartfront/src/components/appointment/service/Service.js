import React, {useContext, useState} from 'react';
import { Col,  Row, Image, Container} from "react-bootstrap";
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';

import '../../../css/takeAppointment/service/service.css'
import ServiceDetails from "./ServiceDetails";

//images
import mechanicImage from '../../../img/takeAppointment/mechanic.png';
import wheelsImage from '../../../img/takeAppointment/Pneu.png';
import Confirmation from "../Confirmation";


const Service = () => {
    const appointmentContext = useContext(AppointmentContext);
    const [service, selectService]=useState(false);

    const setService = (e) =>{
        e.preventDefault()
        selectService(e.target.name);
        appointmentContext.pages.service.name = e.target.name
        switch(e.target.name) {
            case 'wheel':
                appointmentContext.pages.service.states = {wash:false, mechanic:false, wheel:true, oilChange:false};
                break;
            case 'mechanic':
                appointmentContext.pages.service.states = {wash:false, mechanic:true, wheel:false, oilChange:false};
                break;
            case 'wash':
                appointmentContext.pages.service.states= {wash:true, mechanic:false, wheel:false, oilChange:false};
                break;
            case 'oilChange':
                appointmentContext.pages.service.states  = {wash:false, mechanic:false, wheel:false, oilChange:true};
                break;
            default:
                return "";
        }
    }

    return (
        <Container>

                <h4> Choisir le service </h4>

                <hr></hr>

                <Row lg={4} md={6} xs={12} >
                    <Col >
                        <hr></hr>
                        <h4> Pneu </h4>
                        <hr></hr>
                        <Image
                            className={appointmentContext.pages.service.states.wheel ?"ImageSelect-active":"ImageSelect"}
                            onClick={setService}
                            name="wheel"
                            src={wheelsImage}
                            fluid
                        />
                    </Col>
                     <Col></Col>
                    <Col  >
                        <hr></hr>
                        <h4> mechanic </h4>
                        <hr></hr>
                        <Image
                            className={appointmentContext.pages.service.states.mechanic ?"ImageSelect-active":"ImageSelect"}
                            onClick={setService}
                            name="mechanic"
                            src={mechanicImage}
                            fluid
                        />
                    </Col>
                    <Col></Col>

                    <Col className={appointmentContext.pages.service.states.oilChange ?"ImageSelect-active":"ImageSelect"} >
                        <hr></hr>
                        <h4> oilchange </h4>
                        <hr></hr>
                        <Image
                            onClick={setService}
                            name="oilChange"
                            src={wheelsImage}
                            fluid
                            active
                        />
                    </Col>
                    <Col></Col>

                    <Col className={appointmentContext.pages.service.states.wash ?"ImageSelect-active":"ImageSelect"}>
                        <hr></hr>
                        <h4> wash </h4>
                        <hr></hr>
                        <Image
                            onClick={setService}
                            name="wash"
                            src={wheelsImage}
                            fluid
                        />
                    </Col>
                </Row>
                    <Row>

                        <ServiceDetails service={service}/>

                    </Row>
        </Container>
    )

};

export default Service;