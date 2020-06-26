import React, {useContext, useState} from "react";
import {Col, Image, Row, Button} from "react-bootstrap";
import GarageContext from "../../../../../contexts/Garage/garageContext";
import "../../../../../css/dashboard/mechanicDashboard/appointments/AppointmentsTable.css";
import CarImage from'../../../../../img/cars/audi-A8.png'
import RemainingTime from "../../../../../utils/RemainingTime";

const AppointmentsTable = (props) => {
    const garageContext = useContext(GarageContext)
    const {appointments} = garageContext
    const [filter,setFilter]= useState("AppointmentRequest")

    const NoAppointments = (
        <div>

            <div>
                <h3>Pas de Rendez vous</h3>
            </div>
            <h3 className="text-secondary">
                vous n'avez aucun problem avec les article
            </h3>
        </div>
    )
    const Appointments = () => {

        if (appointments)
        return appointments.map((appointment,i)=>{
        if (appointment.state === filter)return<Row className={"appointment-row-table"} key={i} onClick={()=>{props.setAppointment(appointment)}}>
            <Col lg={2} >
                <Image fluid
                       src={CarImage}
                       style={{height: "60px"}}
                       alt="mechanic image loading"
                />
            </Col>
            <Col lg={2} className={"column-article"}>
                <h6> {appointment.car.mark} </h6>
            </Col>
            <Col lg={2} className={"column-article"} >
                <h6> {appointment.car.model} </h6>
            </Col>
            <Col lg={2} className={"column-article"}>
                <h6> {appointment.service.name} </h6>
            </Col>
            <Col lg={2} className={"column-article"}>
                <h6> {appointment.service.duration} </h6>
            </Col>
            <Col lg={2} className={"column-article"}>
                <h6> {RemainingTime(appointment.date)} </h6>
            </Col>
        </Row> })
    }


    const HasAppointments = (
        <div>
            <Row className={"article-table-header"}>

                <Col lg={2} >
                </Col>
                <Col lg={2} >
                    <h6> Modele </h6>
                </Col>
                <Col lg={2} >
                    <h6> Version </h6>
                </Col>
                <Col lg={2}>
                    <h6> Service </h6>
                </Col>
                <Col lg={2}>
                    <h6> Durée </h6>
                </Col>
                <Col lg={2}>
                    <h6> Temps </h6>
                </Col>
            </Row>
            <div className="article-table-Content">

                { Appointments("")}
            </div>
        </div>
    )

    return (
        <div  className={"article-section"}>

            <div>
                <Row>
                    <Col>

                        <h3>Mes Rendez vous </h3>
                    </Col>
                    <Col>

                        <Button onClick={()=>setFilter("AppointmentRequest")}>Request </Button>
                        <Button onClick={()=>setFilter("Done")}>Done </Button>
                        <Button onClick={()=>setFilter("Confirmed")}>Confirmed </Button>
                    </Col>
                </Row>
            </div>
            <div className={"article-table"}>
                {appointments? HasAppointments :NoAppointments }
            </div>
        </div>
    );
}

export default AppointmentsTable;