import React, {useContext} from "react";
import {Button, Col, Image, Row} from "react-bootstrap";
import AppointmentContext from "../../../../../contexts/Appointment/appointmentContext";
import RemainingTime from "../../../../../utils/RemainingTime";
import "../../../../../css/dashboard/clienDashboard/Acceuil/CarSection.css"

const ActiveAppointmentSection = (props) => {
    const appointmentContext = useContext(AppointmentContext)
    const {appointments} = appointmentContext
    const last = appointments.length
    const lastAppointment = appointments[last-1]
    const HasNoAppointment = (
        <div>

            <div>
                <h3>Mes rendez-vous</h3>
            </div>
            <h3 className="text-secondary">
                Vous n'avez pris aucun rendez-vous
            </h3>
            <Button className="add-car-button">
                Prenez un rendez-vous
            </Button>
        </div>
    )

    const HasAppointment =() => {
       if (lastAppointment) return <Row>
               <Col lg={3}>
                   <Image fluid
                          src={"./img/mechanic-Logo.jpg"}
                          alt="mechanic image loading"
                   />
               </Col>
               <Col className="appointment-section-text">
                   <h1 className="h4 mb-0"> {lastAppointment.garage.name}</h1>
                   <p className="h6 font-weight-normal text-secondary mt-2 mb-0">
                     service : {lastAppointment.service.name}
                    <h5>
                     duration ;  {lastAppointment.service.duration}
                    </h5>
                       {RemainingTime(lastAppointment.date)}
                   </p>

               </Col>
           </Row>
    }

    return (
        <div className="car-section">
            <div>
                {last > 0 ? HasAppointment() :HasNoAppointment }
            </div>
        </div>
    );
}

export default ActiveAppointmentSection;