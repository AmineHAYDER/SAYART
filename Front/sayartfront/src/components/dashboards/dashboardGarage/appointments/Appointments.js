import React, { useContext,  useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import GarageContext from "../../../../contexts/Garage/garageContext";

import Map from '../../../map/Map'
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
            <Row  className={"title-appointment"}>
                <h4>Rendez vous passés </h4>
            </Row>
            <Row className={"waiting-appointments-container"}>
                {doneAppointments}
            </Row>
            <Row>
               {garageContext.appointments.map(appointment => {

                   if (appointment._id === Appointment) {
                       console.log(appointment)
                       return (
                           <Container className="detail-container">
                               <Row className="detail-Service" >
                                   <Col>
                                       <h1> Service </h1>
                                       <h6>Name :{appointment.service.name}  </h6>
                                       <h6>Price :{appointment.service.price}  </h6>
                                       <h6>Duration :{appointment.service.duration}  </h6>
                                   </Col>
                               </Row>
                               <Row className="detail-Service">
                                   <Col>
                                       <h1> Garage </h1>
                                       <h4>Name :{appointment.garage.name} </h4>
                                       <h4>Location :{appointment.garage.address}  </h4>
                                       <h4>Duration :{appointment.service.duration}  </h4>
                                   </Col>
                                   <Col>
                                       <Map garage={appointment.garage.location.coordinates}/>
                                   </Col>
                               </Row>
                               <Row className="detail-Service">
                                   <Col>
                                       <h1> Timing </h1>
                                       <h4>Date : {appointment.date} </h4>
                                   </Col>
                               </Row>
                           </Container>)

                   }
               })}
             </Row>
        </Container>
    );

}

export default Appointments;