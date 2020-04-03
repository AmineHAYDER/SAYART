import React, { useContext } from 'react';
import {Nav, Button, Row, Container,Col} from 'react-bootstrap';
import AuthContext from '../../contexts/Auth/authContext';
import Card from './AppointmentCard'

import '../../css/dashboard/Menu.css'

const OnLineGarage = () => {


    return (<Container >
                <Row>
                    <Col>  <Card/> </Col>
                </Row>

           </Container>
    );

}

export default OnLineGarage;