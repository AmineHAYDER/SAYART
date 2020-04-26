import React, {useContext, useState} from 'react';
import {Row, Col, Container, Form} from 'react-bootstrap';

import '../../../../css/dashboard/clienDashboard/myCar/FuelType.css'

import AppointmentContext from "../../../../contexts/Appointment/appointmentContext";



const FuelType = () => {

    const appointmentContext = useContext(AppointmentContext);
    const {car} = appointmentContext
    const [price,setPrice] = useState("aze")

    const handelClick = (e)=>{
        appointmentContext.updateCar({fuel:e.target.name})
        car.fuel  = e.target.name
        setPrice(e.target.name)
    }
    const Price = ()=>{
            switch (car.fuel ) {
                case "Super sans plomb":
                    return 2035
                case "Gasoil super":
                    return 1800
                case "Gasoil":
                    return 1550

            }
    }


    const setData = ()=>{
        if (!car.fuel){
            return (
                <Row>
                    <Col>
                        <Form.Check inline label="Super sans plomb" name="Super sans plomb" type="radio" onClick={handelClick}  />
                        <Form.Check inline label="Gasoil super" name="Gasoil super" type="radio" onClick={handelClick} />
                        <Form.Check inline label="Gasoil" name="Gasoil" type="radio" onClick={handelClick} />
                    </Col>
                </Row>)}else {
            return (
                <Row>
                    <Col>
                        <h5> {car.fuel}</h5>
                        <hr></hr>
                        <h6>Price : {Price()} millimes/L</h6>
                    </Col>
                </Row>
            )}

    }


    return (
        <Container>
        <Row>
            <Col className="Fuel-type"  >
                <h6>Type de carburant</h6>
                {setData()}
            </Col>
        </Row>
        </Container>
    );

}

export default FuelType;