import React from 'react';
import {Row, Container, ListGroup} from "react-bootstrap";
import Wash from "./Wash";
import OilChangeService from './OilChange'
import Mechanic from './Mechanic'
import Wheel from './Wheel'

import '../../../css/takeAppointment/service/ServiceDetails.css'

const ServiceDetails = (props) => {

    const renderOptions = () => {
        switch (props.service) {
            case 'wheel':
                return <Wheel onClick={props.selectDetail}/>
            case 'mechanic':
                return <Mechanic onClick={props.selectDetail}/>
            case 'wash':
                return <Wash onClick={props.selectDetail}/>
            case 'oilChange':
                return <OilChangeService onClick={props.selectDetail}/>
            default:
                return "";
        }
    }


    return ( renderOptions()
    )

};

export default ServiceDetails;