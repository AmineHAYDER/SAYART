import React from "react";

import "../../../../css/dashboard/clienDashboard/Acceuil/CarSection.css"

import {Button} from "react-bootstrap";

const CarSection = (props) => {

    const HasNoAppointment = (
        <div>
            <h3 className="text-secondary">
                Vous n'avez pris aucun rendez-vous
            </h3>
            <Button className="add-car-button">
                Prenez un rendez-vous
            </Button>
        </div>
    )


    const HasAppointment = (
        <div>

        </div>
    )

    return (
        <div className="car-section">
            <div>
                <h3>Mes rendez-vous</h3>
            </div>
            <div>
                {props.appointment !== '' ? HasNoAppointment : HasAppointment}
            </div>
        </div>
    );
}

export default CarSection;