import React from 'react';
import {  Row, Container,ListGroup} from "react-bootstrap";
import Wash from "./Wash";
import OilChangeService from './OilChange'
import Mechanic from './Mechanic'
import Wheel from './Wheel'

import '../../../css/takeAppointment/service/ServiceDetails.css'

const ServiceDetails = (props) => {

    const renderOptions = ()=>{
        switch(props.service) {
            case 'wheel':
                return <Wheel/>
            case 'mechanic':
                return <Mechanic/>
            case 'wash':
                return  <Wash/>
            case 'oilChange':
                return <OilChangeService/>
            default:
                return "";
        }}



    return (
        <Container>
            <Row className="justify-content-md-center">

                        <ListGroup className="OptionList"  defaultActiveKey="1">
                            <Row  lg={1} xs={2}>
                             {renderOptions()}
                            </Row>
                        </ListGroup>

            </Row>
        </Container>
    )

};

export default ServiceDetails;