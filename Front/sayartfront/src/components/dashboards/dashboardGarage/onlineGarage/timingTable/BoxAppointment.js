import React, {useContext,} from 'react';
import {Col, Row} from 'react-bootstrap';
import GarageContext from '../../../../../contexts/Garage/garageContext';
import '../../../../../css/dashboard/mechanicDashboard/onlineGarage/timingTable/TimingTable.css'

const BoxAppointment = (props) => {

    const garageContext = useContext(GarageContext);
    const {appointments} = garageContext;

    const boxAppointments = appointments.map((appointment) => {
        let date = new Date(appointment.date)
        let hour = date.getHours().toString()
        let minutes = date.getMinutes().toString()
        date = date.toLocaleDateString()
        if (props.date === date) {
            if (hour === props.hour) {

                if (appointment.service.duration < 60) {
                    if (minutes === "0") {
                        return <div className="box-appointment-30mn">
                            <div className="box-appointment-content">
                                <h1>{appointment.service.duration}</h1>
                                <h1>{appointment.service.name}</h1>
                            </div>
                        </div>
                    } else return <div className="box-appointment-30mn-a30">
                        <div className="box-appointment-content">
                            <h1>{appointment.service.duration}</h1>
                            <h1>{appointment.service.name}</h1>
                        </div>
                    </div>
                } else return <div className="box-appointment-1hour">
                    <div className="box-appointment-content">
                        <h1>{appointment.service.duration}</h1>
                        <h1>{appointment.service.name}</h1>
                    </div>
                </div>
            } else return null
        } else return null

    })
    return (
        <Col className="box-table">
            <Row><Col>
                {boxAppointments}
            </Col>
                <Col>
                </Col></Row>
        </Col>
    );

}

export default BoxAppointment;