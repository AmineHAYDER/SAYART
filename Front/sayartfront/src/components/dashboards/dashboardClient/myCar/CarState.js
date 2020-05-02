import React, { useContext } from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import '../../../../css/dashboard/clienDashboard/myCar/CarState.css'

import UserContext from "../../../../contexts/User/userContext";


const CarState = () => {

    const userContext = useContext(UserContext);
    const {car} = userContext


    const State = ()=>{
        switch (car.status) {
            case "clean":
                return "en bonne etat"
            case "warning":
                return "Consulter vos rendez Vous"
            case "urgent":
                return "la voiture a besoin d'un vidange"
        }
    }



    return (
        <Container>
            <Row>
                <Col className={"CarState "+car.status }>
                    <h6>Etat de votre Voiture</h6>

                    <h5>{State()}</h5>
                    <hr></hr>
                    <button> prendre un rendez vous </button>
                </Col>
            </Row>
        </Container>
    );

}

export default CarState;