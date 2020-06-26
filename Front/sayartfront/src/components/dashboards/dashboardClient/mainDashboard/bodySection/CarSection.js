import React, {useContext, useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap';

import '../../../../../css/dashboard/clienDashboard/myCar/CarSection.css'

import UserContext from "../../../../../contexts/User/userContext";
import img from '../../../../../img/cars/audi-A8.png'


const CarSection = (props) => {

    const userContext = useContext(UserContext);
    const {car,mileage} = userContext
    const HasNoCar = (
        <div>
            <h3 className="text-secondary">
                Vous n'avez pas une voiture
            </h3>
            <Button variant={"secondary"} className="add-car-button" onClick={props.showModal}>
                Entrer les informations de votre voiture
            </Button>
        </div>
    )


    const HasCar = () => {
        if (car) return <Row className="car-informations">
            <Col lg={4}>
                <h1>Ma Voiture </h1>
                <hr></hr>
                <h6>Mark : {car.mark}</h6>
                <h6>Model : {car.model}</h6>
            </Col>
            <Col lg={8}>
                <img src={img}/>
            </Col>
        </Row>
    }
        return (
        <div className="car-section">
            <div>
                <h3>Ma voiture </h3>
            </div>
            <div>
                {car ? HasCar() : HasNoCar}
            </div>
        </div>
    );

}

export default CarSection;