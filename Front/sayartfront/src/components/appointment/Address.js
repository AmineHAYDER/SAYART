import React, {useContext, useState} from 'react';
import Map from './Map'
import AppointmentContext from '../../contexts/Appointment/appointmentContext';
import FormItem from "./FormItem";
import {Button, Col, Container, Form, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
const Address = () => {
        const appointmentContext = useContext(AppointmentContext);

        const [address,setAddress] = useState('')
        const [clicked,setClicked] = useState(false)
        const [loading,setLoading] = useState(false)

        const loadData = async ()=>{
                setLoading(true)
                setClicked(true)

                await setAddress(appointmentContext.address)
                setTimeout(function() {
                         setLoading(false)
                         setClicked(false)

                }, 2000)
        }

        return (
            <div>
                    <Map clicked={clicked}/>

                    <hr></hr>

                    <Row className="justify-content-md-center"  >
                            <Col lg={4} md={6} xs={12}>
                                    <Button  onClick={loadData} variant="warning" block>
                                            {loading ? "loading" : "Load data" }
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
                                    <Button variant="outline-warning" onClick={loadData} block>
                                            Validate
                                    </Button>

                           </Form>

                       </Col>
                    </Row>
            </div>
        )

};

export default Address;