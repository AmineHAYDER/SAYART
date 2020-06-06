import React, {useContext} from "react";
import {Col, Image, Row} from "react-bootstrap";
import GarageContext from "../../../../contexts/Garage/garageContext";
import RemainingTime from "../../../../utils/RemainingTime";

const NextAppointmentSection = (props) => {
    const garageContext = useContext(GarageContext)
    const {appointments} = garageContext
    const last = appointments.length
    const lastAppointment = appointments[last - 1]

    const HasNoAppointment = (
        <div>

            <div>
                <h3>Mes rendez-vous</h3>
            </div>
            <h3 className="text-secondary">
                Vous n'avez aucun rendez-vous à venir
            </h3>
        </div>
    )

    const HasAppointment = () => {
        if (lastAppointment) return <Row>
            <Col lg={3}>
                <Image fluid
                       src={"./img/mechanic-Logo.jpg"}
                       alt="mechanic image loading"
                />
            </Col>
            <Col className="appointment-section-text">
                <h1 className="h4 mb-0">
                    {lastAppointment.garage.name}
                </h1>
                <h6>
                    service : {lastAppointment.service.name}
                </h6>
                <h6>
                    duration ; {lastAppointment.service.duration}
                </h6>
                {RemainingTime(lastAppointment.date)}
            </Col>
        </Row>
    }

    return (
        <div className="car-section">
            <div>

                <div>
                    <h3>Le Prochain Rendez'vous</h3>
                </div>
                {last > 0 ? HasAppointment() : HasNoAppointment}
            </div>
        </div>
    );
}

export default NextAppointmentSection;