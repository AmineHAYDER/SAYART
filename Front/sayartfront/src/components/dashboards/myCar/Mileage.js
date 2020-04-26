import React, {useContext, useState} from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';

import '../../../css/dashboard/myCar/Mileage.css'

import AppointmentContext from "../../../contexts/Appointment/appointmentContext";

import RemainingTime from '../../../utils/RemainingTime'
const Mileage = () => {

    const appointmentContext = useContext(AppointmentContext);
    const {mileage} = appointmentContext

    const [Mileage,setMileage] = useState(mileage.value)



    const handelChange = (e)=>{
        setMileage( e.target.value)
    }
    const handelClick = ()=>{
        if ( Mileage.match(/^[0-9]{1,6}$/) ){

            appointmentContext.updateCar({mileage:{value:Mileage,date:Date.now()}})
            setMileage(Mileage)
        }else {
            alert("must be number between : 0-500000")
            setMileage("")
        }
    }



    const setData = ()=>{
        if (!mileage.value){
       return (
           <Row>
                   <Form.Control className="mileage-input" placeholder="Entrer Votre kilometrage" value={Mileage} onChange={handelChange}/>
                   <Button  variant={"warning"} onClick={handelClick}>Update</Button>

           </Row>)}else {
            return (
               <Row>
                   <Col>
                       <h5> {mileage.value}</h5>
                       <hr></hr>
                       <h6>last change : {RemainingTime(mileage.date)}</h6>
                   </Col>
               </Row>
        )}

    }


    return (
            <Row>
                <Col className="mileage"  >
                    <h6>Kilometrage</h6>
                    { setData()}
                </Col>
            </Row>
    );

}

export default Mileage;