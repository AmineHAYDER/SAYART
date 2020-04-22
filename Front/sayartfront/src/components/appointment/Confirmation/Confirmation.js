import React, {useContext} from 'react';
import { Col,  Row, Jumbotron, Button, Container} from "react-bootstrap";
import '../../../css/takeAppointment/Confirmation.css'
import SelectGarage from './SelectGarage'

import AppointmentContext from '../../../contexts/Appointment/appointmentContext';

const Confirmation = () => {

    const appointmentContext = useContext(AppointmentContext);
  const VerifyData = ()=>{
      if (appointmentContext.address && appointmentContext.pages.service.state && appointmentContext.pages.timing.state ){

          return <SelectGarage/>
      }else {
          return "data missing"
      }


  }
    return (
        <Container>

            <Row>{VerifyData()}</Row>
        </Container>
    )

};

export default Confirmation;