import React, {useContext, } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import GarageContext from '../../../../../contexts/Garage/garageContext';
import RowTable from "./RowTable";
import '../../../../../css/dashboard/mechanicDashboard/onlineGarage/TimingTable.css'

const TimingTable = () => {

    const garageContext = useContext(GarageContext);
    const { appointments } = garageContext ;

    const date = new Date();
    const days = ['Ahad','thnin','tleth','irb3a','khmis','jemaa','sebt']
    const hours = ["8 - 9","9 - 10","10 - 11","11 - 12","12 - 13","13 - 14","14 - 15","15 - 16","16 - 17","17 - 18","18 - 19","19 - 20"]

    return (
        <Container style={{"border-style":"solid"}}>
            <Row>
                    <Col className="box-table" >
                    </Col>
                    {hours.map(hour => <Col className="box-table" >
                        <h7 >{hour}</h7>
                    </Col>)}
            </Row>
            <RowTable day={days[(date.getDay())%7]} />
            <RowTable day={days[(date.getDay()+1)%7]} />
            <RowTable day={days[(date.getDay()+2)%7]} />
            <RowTable day={days[(date.getDay()+3)%7]} />
            <RowTable day={days[(date.getDay()+4)%7]} />
            <RowTable day={days[(date.getDay()+5)%7]} />
            <RowTable day={days[(date.getDay()+6)%7]} />
        </Container>

    );

}

export default TimingTable;