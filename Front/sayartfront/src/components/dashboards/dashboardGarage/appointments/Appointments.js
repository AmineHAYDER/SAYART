import React, { useContext,  useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import GarageContext from "../../../../contexts/Garage/garageContext";

import AppointmentsClosed from './appointmentsClosed/AppointmentsClosed'
import AppointmentDetail from './AppointmentDetail'
import CardApp from './AppointmentCard'
import remaining from '../../../../utils/RemainingTime'


import mechanic from '../../../../img/dashboard/mech.png';
import wheel from '../../../../img/dashboard/whee.png';
import oilChange from '../../../../img/dashboard/oil.png';
import wash from '../../../../img/dashboard/was.png';

import '../../../../css/dashboard/clienDashboard/appointments/Appointments.css'





const Appointments = (props) => {

    const garageContext = useContext(GarageContext)
    const [Appointment,setAppointment] = useState("")

    const [display,setDisplay] = useState("Cards")
    let history = useHistory();

    const setSectionDetail = (e)=>{
        setAppointment(e.target.name)
    }

    const takApp = (e)=>{
        e.preventDefault()
        history.push('/takeAppointment');
    }
    const img =(name) => {switch(name){
        case"wheel":
            return wheel
        case"wash":
            return wash
        case"oilChange":
            return oilChange
        case"mechanic":
            return mechanic
        default:return ''
    }}

    const waitingAppointments = garageContext.appointments.map(appointment => {
      if (remaining(appointment.date).startsWith("dans") ){
                           return <Col lg={3} >
                               <CardApp
                                   id={appointment._id}
                                   serviceName={appointment.service.name}
                                   garageName={appointment.garage.name}
                                   img={img(appointment.service.name)}
                                   date={appointment.date}
                                   onClick={setSectionDetail}
                               />
                                </Col>} else return  null

    })
    const waitingConfirmationAppointments = garageContext.appointments.map(appointment => {
        if (remaining(appointment.date).startsWith("dans") && appointment.state === "AppointmentRequest" ){
            return <Col lg={3} >
                <CardApp
                    id={appointment._id}
                    serviceName={appointment.service.name}
                    garageName={appointment.garage.name}
                    img={img(appointment.service.name)}
                    date={appointment.date}
                    onClick={setSectionDetail}
                />
            </Col>} else return  null

    })/*
    const doneAppointments = garageContext.appointments.map(appointment => {
       if (remaining(appointment.date).startsWith("il y a") || remaining(appointment.date).startsWith("Aujourd'hui") ){
           return <Col lg={3} >
               <CardApp
                   id={appointment._id}
                   serviceName={appointment.service.name}
                   garageName={appointment.garage.name}
                   img={img(appointment.service.name)}
                   date={appointment.date}
                   onClick={setSectionDetail}
               />
           </Col>} else return  null

    })
*/
    return (<Container >
            <Row >
                <button onClick={takApp}> prendre un rendez vous </button>
            </Row>
            <Row className={"title-appointment"}>
                <h4>Rendez vous à venir </h4>
            </Row>
            <Row className={"waiting-appointments-container"}>
                {waitingAppointments}
            </Row>
            <Row className={"title-appointment"}>
                <h4>En attente de confirmation </h4>
            </Row>
            <Row className={"waiting-appointments-container"}>
                {waitingConfirmationAppointments}
            </Row>
            <Row  className={"title-appointment"}>
                <h4>Rendez vous passés </h4>
                <button onClick={()=>setDisplay("Lines")}>All Lines</button>
                <button onClick={()=>setDisplay("Cards")}>Last 4</button>
            </Row>
                <AppointmentsClosed
                    onClick={setSectionDetail}
                    display={display}
                />
            <Row>
                <AppointmentDetail Appointment={Appointment}/>
            </Row>
        </Container>
    );

}

export default Appointments;