import React from 'react';
import {Col, Row} from 'react-bootstrap';
import BoxAppointment from "./BoxAppointment";

import '../../../../../css/dashboard/mechanicDashboard/onlineGarage/timingTable/TimingTable.css'

const RowTable = (props) => {

    const days = ['Ahad', 'thnin', 'tleth', 'irb3a', 'khmis', 'jemaa', 'sebt']
    let date = new Date();
    date = date.setDate(props.day)
    date = new Date(date)
    return (
        <Row className="row-table">
            <Col className="box-table">
                {days[date.getDay()]}
            </Col>
            <BoxAppointment date={date.toLocaleDateString()} hour={"8"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"9"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"10"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"11"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"12"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"13"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"14"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"15"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"16"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"17"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"18"}/>
            <BoxAppointment date={date.toLocaleDateString()} hour={"19"}/>

        </Row>

    );

}

export default RowTable;