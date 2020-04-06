import React, {useContext, useState} from 'react';
import Map from './Map'
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';
import FormItem from "../FormItem";
import {Button, Col, Form, Row, Alert} from "react-bootstrap";


const Address = () => {
        const appointmentContext = useContext(AppointmentContext);

        const [address,setAddress] = useState('')

        const loadData =()=>{
            setAddress(appointmentContext.address)
            appointmentContext.pages.address.step.loadingStep = true
        }
        const validateData =()=>{
            if (appointmentContext.pages.address.step.localisationStep && appointmentContext.pages.address.step.loadingStep )
                {
                    appointmentContext.pages.address.step.validationStep = true
                    appointmentContext.pages.address.state = true
                }
            console.log(appointmentContext.pages.address)
            console.log(appointmentContext.address)
        }


        return (
            <div>

                    <Alert  variant={!appointmentContext.pages.address.step.localisationStep ? "danger" : "success"}>
                            Clicker sur le bouton de localisation
                    </Alert>

                    <Map/>

                    <hr></hr>

                    <Row className="justify-content-md-center"  >
                            <Alert  variant={!appointmentContext.pages.address.step.loadingStep ? "danger" : "success"} >
                                Clicker sur le bouton
                            </Alert>
                            <Col lg={4} md={6} xs={12}>
                                    <Button  onClick={loadData} disabled={appointmentContext.pages.address.step.localisationStep ?  false: true} variant="warning" block>
                                            Load data
                                    </Button>
                            </Col>
                    </Row>

                    <Row >
                       <Col>
                            <Form >
                                    <hr></hr>

                                    <h5>Votre Address</h5>
                                    <Row >
                                       <Col>
                                           <label> City </label>
                                           <FormItem   type="text" placeholder={address.city} value={address.city} name="city" />
                                       </Col>
                                       <Col>
                                           <label> StateCode </label>
                                           <FormItem   type="text" placeholder={address.stateCode} value={address.stateCode} name="city" />
                                       </Col>
                                    </Row>
                                    <Row >
                                        <Col>
                                            <label> StreetName </label>
                                            <FormItem   type="text" placeholder={address.streetName} value={address.streetName} name="city" />
                                        </Col>
                                        <Col>
                                             <label> CountryCode </label>
                                             <FormItem   type="text" placeholder={address.countryCode} value={address.countryCode} name="city" />
                                        </Col>
                                    </Row>

                                    <hr></hr>

                                    <h5>Valider vos données </h5>
                                    <Button variant="outline-warning" onClick={validateData} disabled={appointmentContext.pages.address.step.loadingStep ?  false: true} block>
                                            Validate
                                    </Button>

                           </Form>

                       </Col>
                    </Row>
            </div>
        )

};

export default Address;