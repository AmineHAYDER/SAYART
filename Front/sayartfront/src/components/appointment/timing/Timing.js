import React, {useContext, useState} from 'react';
import {Col, Row, ButtonToolbar, Button, ButtonGroup, Container} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import AppointmentContext from '../../../contexts/Appointment/appointmentContext';

import '../../../css/takeAppointment/timing/timing.css' ;
import timingsData from './data/_times'


const morningTimings = timingsData.morningTimings;
const eveningTimings = timingsData.eveningTimings;


const Timing = (props) => {

    const appointmentContext = useContext(AppointmentContext);

    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState("8:00");

    const selectDate = (date) => {
        setDate(date);
        date.setHours(hour.split(":")[0]);
        date.setMinutes(hour.split(":")[1]);
        appointmentContext.pages.timing.states.date = true
    }
    const selectHour = (e) => {
        setHour(e.target.name)
        date.setHours(e.target.name.split(":")[0]);
        date.setMinutes(e.target.name.split(":")[1]);
        appointmentContext.pages.timing.states.hour = true

        setDate(date);
    }
    const validate = () => {
        console.log((date - Date.now()) / 1000 / 60 / 60 > 6);
        if ((date - Date.now()) / 1000 / 60 / 60 > 6) {
            appointmentContext.pages.timing.date = date;
            appointmentContext.pages.timing.state = true;
            appointmentContext.pages.active = "confirmation"
            props.setPage("confirmation")
            setDate(date)
        } else {
            alert("entrer un temps apres 6 heures ")
        }
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <h4> Choisir le jour </h4>
                    <hr></hr>
                    <DatePicker
                        className="datePicker"
                        placeHolder={"select a date "}
                        selected={date}
                        timeFormat="HH:mm"
                        onChange={selectDate}
                        dateFormat="MMMM d, yyyy"
                    />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <hr></hr>
                    <h4> Choisir l'heure </h4>
                    <hr></hr>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="mr-2" aria-label="First group">
                            {morningTimings.map((item, i) => {
                                return <Button variant="warning" name={item} onClick={selectHour}
                                               key={i}>{item}</Button>
                            })}
                        </ButtonGroup>
                        <hr></hr>
                        <ButtonGroup className="mr-2" aria-label="Second group">
                            {eveningTimings.map((item, i) => {
                                return <Button variant="warning" name={item} onClick={selectHour}
                                               key={i}>{item}</Button>
                            })}
                        </ButtonGroup>
                    </ButtonToolbar>
                    <hr></hr>
                </Col>
            </Row>
            <Row><Col>{date.toDateString()} hour : {date.getHours()}:{date.getMinutes()}</Col></Row>
            <Row>
                <Button
                    variant="warning"
                    onClick={validate}
                    disabled={!appointmentContext.pages.timing.states.date || !appointmentContext.pages.timing.states.hour}
                    block
                >
                    Validate
                </Button>

            </Row>
        </Container>
    )

};

export default Timing;