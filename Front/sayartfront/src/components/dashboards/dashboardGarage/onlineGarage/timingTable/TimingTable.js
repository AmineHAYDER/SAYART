import React, {useContext, } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import GarageContext from '../../../../../contexts/Garage/garageContext';
import RowTable from "./RowTable";
import '../../../../../css/dashboard/mechanicDashboard/onlineGarage/timingTable/Row-Table.css'

const TimingTable = () => {

    const garageContext = useContext(GarageContext);

    const date = new Date();
    const hours = ["8 - 9","9 - 10","10 - 11","11 - 12","12 - 13","13 - 14","14 - 15","15 - 16","16 - 17","17 - 18","18 - 19","19 - 20"]

    return (
        <Container >
            <Row className={"row-label"}>
                    <Col className="box-label-table" >
                    </Col>
                    {hours.map(hour => <Col className="box-label-table" >
                        <h7 >{hour}</h7>
                    </Col>)}
            </Row>
            <RowTable day={(date.getDate())} />
            <RowTable day={(date.getDate()+1)} />
            <RowTable day={(date.getDate()+2)} />
            <RowTable day={(date.getDate()+3)} />
            <RowTable day={(date.getDate()+4)} />
            <RowTable day={(date.getDate()+5)} />
            <RowTable day={(date.getDate()+6)} />
        </Container>

    );

}

export default TimingTable;