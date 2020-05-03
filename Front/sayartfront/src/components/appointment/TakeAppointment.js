import React, { useContext, useState } from 'react'
import { Container, Button, Row, Col, ButtonGroup } from 'react-bootstrap'


import '../../css/takeAppointment/TakeAppointment.css';
import AppointmentContext from '../../contexts/Appointment/appointmentContext';

//pages
import Address from "./address/Address";
import Service from "./service/Service";
import Confirmation from "./confirmation/Confirmation"
import Timing from './timing/Timing'


const TakeAppointment = () => {

    const appointmentContext = useContext(AppointmentContext);
    const [page, setPage] = useState("")


    const onChange = e => {
        appointmentContext.pages.active = e.target.name
        setPage(e.target.name)
    };

    const renderSwitch = (page) => {
        switch (page) {
            case 'address':
                return <Address setPage={setPage} />;
            case 'service':
                return <Service setPage={setPage} />;
            case 'confirmation':
                return <Confirmation setPage={setPage} />;
            case 'timing':
                return <Timing setPage={setPage} />;
            default:
                return page;
        }
    }

    return (
        <Container className="appointment">

            <Row className="justify-content-md-center">
                <Col>

                    <h3 className="purple">
                        <span className="yellow">  Rendez-Vous</span><span >  خوذ</span>
                    </h3>

                    <hr></hr>

                    <ButtonGroup  >
                        <Button
                            className="buttonWithIcon"
                            variant="warning"
                            name="address"
                            size="xs"
                            onClick={onChange}
                            active={appointmentContext.pages.address.state}
                        >
                            وين تسكن
                                </Button>
                        <Button
                            className="buttonWithIcon"
                            variant="warning"
                            name="service"
                            size="xs"
                            onClick={onChange}
                            active={appointmentContext.pages.service.state}
                        >
                            شنوة مستحق
                                </Button>
                        <Button
                            className="buttonWithIcon"
                            variant="warning"
                            name="timing"
                            size="xs"
                            onClick={onChange}
                            active={appointmentContext.pages.timing.state}
                        >
                            وقتاش تنجم
                                </Button>
                        <Button
                            className="buttonWithIcon"
                            variant="warning"
                            name="confirmation"
                            size="xs"
                            onClick={onChange}

                            active={appointmentContext.pages.timing.state}
                        >
                            Confirmi
                                </Button>
                    </ButtonGroup>

                    <hr></hr>
                </Col>
            </Row>

            {renderSwitch(appointmentContext.pages.active)}

        </Container>

    );


}

export default TakeAppointment;