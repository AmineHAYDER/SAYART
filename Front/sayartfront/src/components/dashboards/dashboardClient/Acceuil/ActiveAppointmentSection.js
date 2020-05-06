import React, { useState, useContext } from "react";

import "../../../../css/dashboard/clienDashboard/Acceuil/CarSection.css"

import { Col, Row, Image, Button } from "react-bootstrap";

import img from '../../../../img/cars/audi-A8.png'

import { Link } from "react-router-dom"

const CarSection = (props) => {

    const HasNoAppointment = (
        <div >
            <h3 className="text-secondary">
                Vous n'avez pris aucun rendez-vous
            </h3>
            <Button className="add-car-button" >
                Prenez un rendez-vous
            </Button>
        </div>
    )


    const HasAppointment = (
        <div>

        </div>
    )

    return (
        <div>

            <div className="car-section">
                {props.appointment != '' ? HasNoAppointment : HasAppointment}
            </div>
        </div>
    );
}

export default CarSection;