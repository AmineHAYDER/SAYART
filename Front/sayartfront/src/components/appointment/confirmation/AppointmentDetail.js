import React, {useContext, useState} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';
import UserContext from '../../../contexts/User/userContext'
import garageLogo from "../../../img/dashboard/mechanic-Logo.jpg";
import Rating from "react-rating";
import {Icon} from "@iconify/react";
import starEmpty from "@iconify/icons-el/star-empty";
import star from "@iconify/icons-el/star";
import checkEmpty from "@iconify/icons-el/check-empty";
import check from "@iconify/icons-el/check";
import lock from "@iconify/icons-el/lock";
import AvailableGarage from "../../utils/AvailableGarage";
import horlogeImage from '../../../img/takeAppointment/Horloge.png'
import serviceImage from '../../../img/takeAppointment/Service.png'

const AppointmentDetail = (props) => {


    const appointmentContext = useContext(AppointmentContext);
    const userContext = useContext(UserContext);
    const {car} = userContext
    const {pages, chosenService, availableGarage} = appointmentContext

    const takeAppointment = () => {
        appointmentContext.takeAppointment({
            state: "AppointmentRequest",
            service: chosenService._id,
            garage: chosenService.garage._id,
            car: car._id,
            date: pages.timing.date
        })

    }

    const CheckAvailable = () => {
        appointmentContext.CheckAvailableGarage({
            garage: chosenService.garage._id,
            date: pages.timing.date
        })
    }
    const setAvailableIcon = () => {
        if (availableGarage) {
            if (AvailableGarage(availableGarage, pages.timing.date, chosenService.duration, 3)) {
                return <Icon icon={check} style={{height: "50px", width: '50px', color: "#50ff00"}}/>
            } else return <Icon icon={lock} style={{height: "50px", width: '50px', color: "#ff000a"}}/>
        } else
            return <Icon icon={checkEmpty} style={{height: "50px", width: '50px'}}/>
    }
    const confirm = () => {
        if (availableGarage) {
            if (AvailableGarage(availableGarage, pages.timing.date, chosenService.duration, 3)) {
                return false
            } else return true
        }else return true
    }
    return (
        <Container className={"appointment-garage"} >
            <Row>
                <Col>
                    <img className={"appointment-garage-image"} alt={''} src={garageLogo}/>
                </Col>
                <Col lg={6}>
                    <h3>{chosenService.garage.name}</h3>
                    <h5>{chosenService.garage.location.formattedAddress}</h5>
                </Col>
                <Col>
                    <Row>
                        <h6> Service :</h6>
                        <Rating
                            initialRating={4.5}
                            emptySymbol={<Icon icon={starEmpty} style={{height: "20px", width: '20px'}}/>}
                            fullSymbol={<Icon icon={star} style={{height: "20px", width: '20px'}}/>}
                            fractions={2}
                            readonly
                        />
                    </Row>
                    <Row>
                        <h6> Timing :</h6>
                        <Rating
                            initialRating={4}
                            emptySymbol={<Icon icon={starEmpty} style={{height: "20px", width: '20px'}}/>}
                            fullSymbol={<Icon icon={star} style={{height: "20px", width: '20px'}}/>}
                            fractions={2}
                            readonly
                        />
                    </Row>
                    <Row>
                        <h6> Greeting :</h6>
                        <Rating
                            initialRating={3}
                            emptySymbol={<Icon icon={starEmpty} style={{height: "20px", width: '20px'}}/>}
                            fullSymbol={<Icon icon={star} style={{height: "20px", width: '20px'}}/>}
                            fractions={2}
                            readonly
                        />
                    </Row>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col lg={2}>
                    <img src={horlogeImage} style={{height: "120px"}}/>
                </Col>
                <Col lg={1}>
                    <h1 style={{marginTop: "20px"}}>Timing</h1>
                </Col>
                <hr/>
                <Col lg={8} style={{marginTop: "20px"}}>
                    <h3 style={{marginLeft: "200px"}}> {pages.timing.date ?
                        "date :" + pages.timing.date.getDate() +"/"+pages.timing.date.getMonth()+"/"+pages.timing.date.getFullYear(): null}</h3>
                    <h3 style={{marginLeft: "200px"}}> {pages.timing.date ?
                        "Heure :" + pages.timing.date.getHours() +" Heure "+ pages.timing.date.getMinutes() +" Minutes ": null}</h3>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col lg={2}>
                    <img src={serviceImage} style={{height: "80px"}}/>
                </Col>
                <Col lg={1}>
                    <h1 style={{marginTop: "20px"}}>Service</h1>
                </Col>
                <hr/>
                <Col lg={8}>
                    <h3 style={{marginLeft: "200px"}}>Nom:  Vidange</h3>
                    <h3 style={{marginLeft: "200px"}}>Durée: 30 mn </h3>
                    <h3 style={{marginLeft: "200px"}}>Prix: 210 Dt </h3>
                </Col>
            </Row>
            <hr/>
            <Row style={{marginTop: "30px"}}>

                <Col lg={6}>
                    <h1>Check the time is available</h1>
                </Col>
                <Col>
                    <button className={"button-select-garage"} onClick={CheckAvailable}> Check Available</button>
                </Col>
                <Col lg={2}>
                    {setAvailableIcon()}
                </Col>
            </Row>
            <hr/>
            <Row className={"justify-content-center"}>

                <Button variant={"secondary"} onClick={() => {
                    props.onClick(false)
                     appointmentContext.resetAvailableGarage()
                }}> retour
                </Button>
                <Button variant={"secondary"} onClick={takeAppointment} disabled={confirm()}> confirmer</Button>
            </Row>

        </Container>
    )
}

export default AppointmentDetail;