import React, {useContext} from 'react';
import {Row, Col} from 'react-bootstrap';


import GarageContext from "../../../../../contexts/Garage/garageContext";

import remaining from '../../../../../utils/RemainingTime'
import CardApp from '../AppointmentCard'
import LineApp from '../AppointmentLine'

import mechanic from '../../../../../img/dashboard/mech.png';
import wheel from '../../../../../img/dashboard/whee.png';
import oilChange from '../../../../../img/dashboard/oil.png';
import wash from '../../../../../img/dashboard/was.png';

import '../../../../../css/dashboard/mechanicDashboard/appointments/AppointmentsClosed.css'

const AppointmentsClosed = (props) => {

    const garageContext = useContext(GarageContext)
    let NbCards = 4
    const img = (name) => {
        switch (name) {
            case"wheel":
                return wheel
            case"wash":
                return wash
            case"oilChange":
                return oilChange
            case"mechanic":
                return mechanic
            default:
                return ''
        }
    }
    const doneAppointmentsCards = garageContext.appointments.map(appointment => {
        if ((remaining(appointment.date).startsWith("il y a") || remaining(appointment.date).startsWith("Aujourd'hui")) && (NbCards !== 0)) {
            NbCards--
            return <Col lg={3}>
                <CardApp
                    id={appointment._id}
                    serviceName={appointment.service.name}
                    garageName={appointment.garage.name}
                    img={img(appointment.service.name)}
                    date={appointment.date}
                />
            </Col>
        } else return null

    })
    const doneAppointmentsLines = garageContext.appointments.map(appointment => {
        if (remaining(appointment.date).startsWith("il y a") || remaining(appointment.date).startsWith("Aujourd'hui")) {
            console.log(appointment)
            return (
                <LineApp
                    id={appointment._id}
                    serviceName={appointment.car.mark}
                    garageName={appointment.car.model}
                    img={img(appointment.service.name)}
                    date={appointment.date}
                    onClick={props.onClick}
                />)
        } else return null

    })
    switch (props.display) {
        case 'Lines' :
            return <Row className={"closed-appointments-container"}>{doneAppointmentsLines}</Row>
        case 'Cards' :
            return <Row className={"waiting-appointments-container"}>{doneAppointmentsCards}</Row>
        default:
            return ''

    }

}

export default AppointmentsClosed;

