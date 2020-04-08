import React, { useContext, useState } from 'react'
import { Container, Form, Button, Row, Col, ButtonGroup } from 'react-bootstrap'


import '../../css/takeAppointment/TakeAppointment.css';
import AppointmentContext from '../../contexts/Appointment/appointmentContext';
import FormItem from "./FormItem";
import Address from "./Address/Address";
import Service from "./service/Service";
import Confirmation from "./Confirmation"


const TakeAppointment = () => {

    const appointmentContext = useContext(AppointmentContext);
    const [page, setPage] = useState("service")


    const onChange = e => {
        setPage(e.target.name)
    };

    const onSubmit = async e => {
        e.preventDefault();
    }

    const renderSwitch = (page) => {
        switch(page) {
            case 'address':
                return <Address />;
            case 'service':
                return <Service/>;
            case 'confirmation':
                return <Confirmation/>;
            default:
                return page;
        }
    }

    return (
        <Container >

                    <Row className="justify-content-md-center">
                        <Col lg={5} md={6} xs={12}>

                            <h3 className="purple">
                                 <span className="yellow">  Rendez-Vous</span><span >  خوذ</span>
                            </h3>

                            <hr></hr>

                            <ButtonGroup  >
                                <Button className="buttonWithIcon" variant="warning" name="address" size="lg" onClick={onChange} active={appointmentContext.pages.address.state ? true : false}>
                                    وين تسكن
                                </Button>
                                <Button className="buttonWithIcon" variant="warning" name="service"  size="lg" onClick={onChange} >
                                    شنوة مستحق
                                </Button>
                                <Button className="buttonWithIcon" variant="warning" name="confirmation" size="lg" onClick={onChange}>
                                    Confirmi
                                </Button>
                            </ButtonGroup>

                            <hr></hr>
                        </Col>
                    </Row>
                        {renderSwitch(page)}


                        {/*
                        <FormItem type={"date"} placeholder={"date"} name={'date'} value={"none"} onChange={onChange}/>
                        <FormItem type={"password"}  name={'password'} onChange={onChange}/>
*/}




        </Container>

    );


}

export default TakeAppointment;