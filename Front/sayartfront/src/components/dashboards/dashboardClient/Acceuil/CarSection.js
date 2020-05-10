import React, { useState, useContext } from "react";

import "../../../../css/dashboard/clienDashboard/Acceuil/CarSection.css"

import { Col, Row, Image, Button } from "react-bootstrap";

import img from '../../../../img/cars/audi-A8.png'

import { Link } from "react-router-dom"

const CarSection = (props) => {

    const HasNoCar = (
        <div >
            <h3 className="text-secondary">
                Vous n'avez pas encore une voiture associé à votre compte
            </h3>
            <Button className="add-car-button" onClick={props.showmodal}>
                Ajoutez une voiture
            </Button>
        </div>
    )


    const HasCar = (
        <div className="car-table">

            <Row>
                <Col lg={4}>

                </Col>
                <Col lg={4}>
                    <Row>
                        <Image fluid
                            src={img}
                            alt="car img"
                        />
                    </Row>

                </Col>
                <Col lg={4}></Col>
            </Row>
            <Row className="justify-content-center">

                <Col lg={3} className="table-shalta">
                    <Row className="table-title-text justify-content-center table-line">
                        Votre voiture
                    </Row>
                    <Row className="justify-content-center">
                        {props.car.mark + " " + props.car.model}
                    </Row>
                </Col>
                <Col lg={3} className="table-shalta">
                    <Row className="table-title-text justify-content-center table-line">
                        Etat
                    </Row>
                    <Row className="justify-content-center">
                        {props.car.status}
                    </Row>
                </Col>
                <Col lg={3} className="justify-content-center">
                    <Row className="table-title-text justify-content-center  table-line">
                        Dérnier service
                    </Row>
                    <Row className="justify-content-center">
                        2020-01-01
                    </Row>
                </Col>

            </Row>

        </div>
    )

    return (
        <div className="car-section">
            <div style={{ "text-align": "left" }}>
                <h3>Ma voiture</h3>
            </div>
            <div >
                {props.car != '' ? HasCar : HasNoCar}
            </div>
        </div>
    );
}

export default CarSection;