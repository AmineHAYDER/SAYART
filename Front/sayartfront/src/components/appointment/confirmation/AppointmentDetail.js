import React, {useContext, useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
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
        <Container className={"appointment-garage"}>
            <Row>
                <Col>
                    <img className={"appointment-garage-image"} alt={''} src={garageLogo}/>
                </Col>
                <Col lg={6}>
                    <h3>{chosenService.garage.name}</h3>
                    <h5>{chosenService.garage.location.formattedAddress}</h5>
                    <h5>Soum :{chosenService.price}</h5>
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
                <Col lg={4}>
                    <h1 style={{marginTop: "20px", marginLeft: "200px"}}>Timing</h1>
                </Col>
                <hr/>
                <Col lg={8}>
                    <h3 style={{marginLeft: "200px"}}> {pages.timing.date ?
                        "day :" + pages.timing.date.getDate() : null}</h3>
                    <h3 style={{marginLeft: "200px"}}> {pages.timing.date ?
                        "Heure :" + pages.timing.date.getHours() : null}</h3>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col lg={4}>
                    <h1 style={{marginTop: "20px", marginLeft: "200px"}}>Service</h1>
                </Col>
                <hr/>
                <Col lg={8}>
                    <h3 style={{marginLeft: "200px"}}> Vidange</h3>
                    <h3 style={{marginLeft: "200px"}}> 30 mn </h3>
                    <h3 style={{marginLeft: "200px"}}> 210 Dt </h3>
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
            <Row>
                <button onClick={() => {
                    props.onClick(false)
                     appointmentContext.resetAvailableGarage()
                }}> retour
                </button>
                <button onClick={takeAppointment} disabled={confirm()}> confirmer</button>
            </Row>

        </Container>
    )
}

export default AppointmentDetail;