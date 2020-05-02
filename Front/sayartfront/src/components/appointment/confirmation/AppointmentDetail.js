import React, {useContext, useEffect} from 'react'
import {Form,Row} from 'react-bootstrap'
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';
import AuthContext from '../../../contexts/Auth/authContext'
const AppointmentDetail = (props) => {


    const appointmentContext = useContext(AppointmentContext);
    const authContext = useContext(AuthContext);
    const {pages,garage,address,car} = appointmentContext
  console.log(garage)
    const takeAppointment = () =>{
console.log(car)
        appointmentContext.takeAppointment({
            state:"AppointmentRequest",
            service:garage._id,
            garage:garage.garage._id,
            car:car._id,
            date:pages.timing.date})

    }
    return(
        <Row>
            <h1>{garage.name}</h1>
            <h1></h1>
            <button onClick={()=>{props.onClick("")}}> retour </button>
            <button onClick={takeAppointment}> confirmer </button>
        </Row>
    )
}

export default AppointmentDetail;