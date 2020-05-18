import React from "react";

import {Button} from "react-bootstrap";

import TopSection from "../Car/TopSection"
import BodySection from "../Car/BodySection"

import "../../../../css/dashboard/clienDashboard/Car/Car.css"

const Car = (props) => {

    const hasCar = (
        <div><TopSection car={props.car}/>
            <BodySection/></div>
    );

    const hasNoCar = (
        <div>
            <h3 className="text-secondary">
                Vous n'avez pas encore une voiture associé à votre compte
            </h3>
            <Button className="add-car-button">
                Ajoutez une voiture
            </Button></div>
    );

    return (
        <div>
            {props.car !== '' ? hasCar : hasNoCar}
        </div>
    )
}


export default Car;