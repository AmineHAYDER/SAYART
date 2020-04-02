import React, { useContext } from 'react';
import {Nav, Button, Row, Container,Col} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import AuthContext from '../../contexts/Auth/authContext';
import Card from './AppointmentCard'

import '../../css/dashboard/Menu.css'

const OnLineGarage = (props) => {

    let history = useHistory();



    const authContext = useContext(AuthContext);

    const { isAuthenticated, user } = authContext;


    const testState = e => {
        e.preventDefault();

    }




    return (<Container >
                <Row>
                    <Col>  <Card/> </Col>
                    <Col>  <Card/> </Col>
                    <Col>  <Card/> </Col>
                </Row>
            <Row>
                <Col>  <Card/> </Col>
                <Col>  <Card/> </Col>
                <Col>  <Card/> </Col>
            </Row>

           </Container>
    );

}

export default OnLineGarage;