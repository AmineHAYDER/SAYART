import React, { useContext, useState } from 'react';
import Map from './Map'
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';
import UserContext from '../../../contexts/Auth/authContext'
import Form from "./Form";
import { Button, Col, Row, Alert } from "react-bootstrap";

const Address = (props) => {
    const appointmentContext = useContext(AppointmentContext);
    const { pages } = appointmentContext
    const userContext = useContext(UserContext);
    const { user } = userContext
    const [msg, setMsg] = useState("Map"+" إلي على "+"Bouton Locatisation" + " في الدار و إلا إنزل على  " + "Bouton " + " كانك فالدار إنزل على ")



    const validateData = () => {
        if (pages.address.step.localisationStep) {
            pages.address.step.validationStep = true
            pages.address.state = true
            pages.active = "service"
            props.setPage("service")
        }
    }

    const setHomeAddress = () => {
        if (userContext.user.location.formattedAddress) {
            appointmentContext.setLocation({ lng: user.location.coordinates[0], lat: user.location.coordinates[1] })
            pages.address.step.validationStep = true
            setMsg("home address set")
        }
        else (setMsg("you don't have a home address"))
    }


    return (
        <div>
            <Button variant="warning"
                onClick={setHomeAddress}
                style={{ width: "200px", marginLeft: "40%" }} block>
                في الدار
            </Button>
            <hr></hr>
            <Alert variant={!pages.address.step.localisationStep ? "danger" : "success"}>
                {msg}
            </Alert>
            <Map />
            <hr></hr>
            <Row >
                <Col>
                    <h5>Votre Address</h5>
                    <Form />
                    <hr></hr>
                    <h5>Valider vos données </h5>
                    <Button variant="warning"
                        onClick={validateData}
                        style={{ "width": "200px", "margin-left": "40%" }}
                        disabled={!pages.address.step.localisationStep} block>
                        Validate
                    </Button>
                </Col>
            </Row>
        </div>
    )

};

export default Address;