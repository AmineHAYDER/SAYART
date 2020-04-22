import React, {useContext, useState} from 'react';
import { Col, Row, Container} from "react-bootstrap";
import '../../../css/takeAppointment/SelectGarage/SelectGarege.css'

import AppointmentContext from '../../../contexts/Appointment/appointmentContext';
import AuthContext from '../../../contexts/Auth/authContext'
import washImage from '../../../img/dashboard/was.png';
import Map from '../../map/Map'
const SelectGarage = () => {

    const appointmentContext = useContext(AppointmentContext);
    const authContext = useContext(AuthContext);
    const {user} = authContext
    const [active,setActive] = useState("")
    const [label,setlabel] = useState(false)


    let onMap = []

    const loadAppointmentGarages = (e) =>{
        appointmentContext.loadAppointmentGarages({
            name:appointmentContext.pages.service.name,
            lat:user.location.coordinates[1],
            lng:user.location.coordinates[0]
        },e.target.name)

    }

    const garages =()=>{
        if ( appointmentContext.appointmentGarages){
            return appointmentContext.appointmentGarages.map((service , i) =>{
                onMap.push({coordinates:service.garage.location.coordinates})
             return <Row className={"appointment-garage"} key={i} lg={2} md={4} xs={6}>
                       <Col >
                           <img src={washImage}/>
                       </Col>
                       <Col >
                           <h1>garage : {service.garage.name}</h1>
                           <h4>address : {service.garage.address}</h4>
                           <h4>soum : {service.price}</h4>
                           <button  onClick={()=>{setActive(service)}} > select this </button>
                       </Col>
                    </Row>
            })
        }
    }
    return (
        <Container className="select-garage" >

            <Row>
                <button className="button-select-garage" name="1" onClick={loadAppointmentGarages}>search for garage 1 KM</button>
                <button className="button-select-garage" name="5" onClick={loadAppointmentGarages} >dans 5 Km</button>
                <button className="button-select-garage" name="10" onClick={loadAppointmentGarages} >dans 10 Km</button>
            </Row>

            <Row>
               { garages()}
            </Row>

            <button className="button-select-garage" name="10" onClick={()=>{setlabel(!label)}} >show On Map</button>
           <Map garages={onMap}/>
        </Container>
    )

};

export default SelectGarage;