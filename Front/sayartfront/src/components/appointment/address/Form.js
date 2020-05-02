import React, {useContext} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import FormItem from "../../utils/FormItem";
import AppointmentContext from "../../../contexts/Appointment/appointmentContext";

const Form = (props) => {
    const appointmentContext = useContext(AppointmentContext)
    const {address} =  appointmentContext

    return(
        <Container>
            <Row>
                <Col>
                    <label> City </label>
                    <FormItem  disabled type="text" placeholder={address.city} value={address.city} name="city" />
                </Col>
                <Col>
                    <label> StateCode </label>
                    <FormItem  disabled type="text" placeholder={address.stateCode} value={address.stateCode} name="city" />
                </Col>
            </Row>
            <Row >
                <Col>
                    <label> StreetName </label>
                    <FormItem disabled  type="text" placeholder={address.streetName} value={address.streetName} name="city" />
                </Col>
                <Col>
                    <label> CountryCode </label>
                    <FormItem  disabled type="text" placeholder={address.countryCode} value={address.countryCode} name="city" />
                </Col>
            </Row>
        </Container>
    )
}

export default Form;