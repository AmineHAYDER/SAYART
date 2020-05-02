import React from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import remaining from "../../../../utils/RemainingTime";

import '../../../../css/dashboard/mechanicDashboard/appointments/AppointmentLine.css'
const AppointmentLine = (props) => {


    return(


            <Container className={"appointment-line"}>
                <Row>
                    <Col>
                        <img  className={"img-appointment-Line "+props.serviceName } src={props.img} />
                    </Col>
                    <Col>
                        <h4> {props.garageName}</h4>
                        <h4> {props.serviceName}</h4>
                    </Col>
                    <Col>
                        {remaining(props.date)}
                    </Col>
                    <Col>
                        <Button onClick={props.onClick} name={props.id} >Check details</Button>
                    </Col>
                </Row>
            </Container>

    );
}

export default AppointmentLine;