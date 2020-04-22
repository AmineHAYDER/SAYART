import React, {useContext} from 'react';
import { Col,  Row, Jumbotron, Button, Container} from "react-bootstrap";
import '../../../css/takeAppointment/Confirmation.css'
import SelectGarage from './SelectGarage'

import AppointmentContext from '../../../contexts/Appointment/appointmentContext';

const Confirmation = () => {

    const appointmentContext = useContext(AppointmentContext);

    return (
        <Container>
          {/*  <Row>
                <Col>
                    <Jumbotron className={"confirmation-section"}>
                        <h1>Votre Address!</h1>
                        <p>
                            <h3> {appointmentContext.address.formattedAddress}</h3>
                        </p>
                        <p>
                            <Button variant="primary">Modifier</Button>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron className={"confirmation-section"}>
                        <h1>Service demandé !</h1>
                        <p>
                            <h3> {appointmentContext.pages.service.name}</h3>
                        </p>
                        <p>
                            <h5> {appointmentContext.pages.service.detail}</h5>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron className={"confirmation-section"}>
                        <h1>timing  !</h1>
                        {!appointmentContext.pages.timing.date ? <h4>pas d'information </h4> :
                                        <div>
                                    <p>
                                        <h3> jour :{appointmentContext.pages.timing.date.getDate()}</h3>
                                    </p>
                                    <p>
                                        <h5> mois :{appointmentContext.pages.timing.date.getMonth()}</h5>
                                    </p>
                                    <p>
                                        <h5> heure :{appointmentContext.pages.timing.date.getHours()}</h5>
                                    </p></div>
                        }
                    </Jumbotron>
                </Col>
            </Row>*/}
            <Row>
                <SelectGarage/>
            </Row>
        </Container>
    )

};

export default Confirmation;