import React, { useContext,  useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import GarageContext from "../../../../contexts/Garage/garageContext";

import '../../../../css/dashboard/clienDashboard/appointments/Appointments.css'





const AppointmentDetail = (props) => {

    const garageContext = useContext(GarageContext)


    return (<Container >
            <Row>
                {garageContext.appointments.map(appointment => {

                    if (appointment._id === props.Appointment) {
                        return (
                            <Container className="detail-container">
                                <Row className="detail-Service" >
                                    <Col>
                                        <h1> Service </h1>
                                        <h6>Name :{appointment.service.name}  </h6>
                                        <h6>Price :{appointment.service.price}  </h6>
                                        <h6>Duration :{appointment.service.duration}  </h6>
                                    </Col>
                                </Row>
                                <Row className="detail-Service">
                                    <Col>
                                        <h1> Car </h1>
                                        <h4>Mark :{appointment.car.mark} </h4>
                                        <h4>Model :{appointment.car.model}  </h4>
                                        <h4>Version :{appointment.car.version}  </h4>
                                    </Col>
                                </Row>
                                <Row className="detail-Service">
                                    <Col>
                                        <h1> Timing </h1>
                                        <h4>Date : {appointment.date} </h4>
                                    </Col>
                                </Row>
                            </Container>)

                    }
                })}
            </Row>
        </Container>
    );

}

export default AppointmentDetail;