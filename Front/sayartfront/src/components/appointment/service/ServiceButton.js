import React, {useContext} from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import FormItem from "../../utils/FormItem";
import AppointmentContext from "../../../contexts/Appointment/appointmentContext";
import oilChangeImage from "../../../img/takeAppointment/oilChange.png";

const Form = (props) => {
    const appointmentContext = useContext(AppointmentContext)
    const {address} =  appointmentContext

    return(
        <Container>
                <Col >
                    <hr></hr>
                    <h4 className="label-button"> oilchange </h4>
                    <hr></hr>
                    <Image
                        className={appointmentContext.pages.service.states.oilChange ?"ImageSelect-active":"ImageSelect"}
                        onClick={setService}
                        name="oilChange"
                        src={oilChangeImage}
                        fluid
                    />
                </Col>
        </Container>
    )
}

export default Form;