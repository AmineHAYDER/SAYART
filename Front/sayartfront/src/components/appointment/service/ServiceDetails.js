import React, {useContext, useState} from 'react';
import { Col,  Row, Button, Container,ListGroup,Accordion,Card} from "react-bootstrap";
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';

import '../../../css/takeAppointment/service/ServiceDetails.css'

import servicesDetails from './data/servicesDetails'

const  washServices = servicesDetails.washServices
const  mechanicServices = servicesDetails.mechanicServices

const ServiceDetails = (props) => {
    const appointmentContext = useContext(AppointmentContext);
    const {pages} = appointmentContext
    const [selectedDetail,setSelectedDetail] = useState(pages.service.detail)

    const setServiceDetails = (e)=>{
        setSelectedDetail(e.target.name)
        pages.service.detail = e.target.name ;
        props.selectDetail(e.target.name)
    }

    const OptionList = (props)=> { return props.data.map( (item,i) => { return (
        <Col key={i} >
        <ListGroup.Item action className="button-detail"  name={item.name} onClick={props.onClick}>
            {item.name}
        </ListGroup.Item>
        </Col>
        ); })
    }


    const renderOptions = ()=>{
        switch(props.service) {
            case 'wheel':
                return <OptionList className="OptionList" onClick={setServiceDetails} data={mechanicServices}/>
            case 'mechanic':
                return <OptionList className="OptionList" onClick={setServiceDetails} data={mechanicServices}/>
            case 'wash':
                return  <OptionList className="OptionList" onClick={setServiceDetails} data={washServices}/>
            case 'oilChange':
                return <OptionList className="OptionList" onClick={setServiceDetails} data={mechanicServices}/>
            default:
                return "";
        }}



    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col  >
                    <hr></hr>
                    <h5>Choose one </h5>

                        <ListGroup className="OptionList"  defaultActiveKey="1">
                            <Row  lg={1} xs={2}>
                             {renderOptions()}
                            </Row>
                        </ListGroup>

                </Col>
                <Col>
                    <hr></hr>
                    <h5> Description </h5>
                        <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                   Prices
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>1DT</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    {selectedDetail}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>{mechanicServices.map( (item,i) => {
                                    if (item.name === selectedDetail) return (item.name); })
                                } </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <hr></hr>



                </Col>
            </Row>
        </Container>
    )

};

export default ServiceDetails;