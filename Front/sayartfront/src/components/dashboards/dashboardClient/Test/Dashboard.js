import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";

import './Dashboard.css';

import AuthContext from "../../../../contexts/Auth/authContext";
import AppointmentContext from "../../../../contexts/Appointment/appointmentContext";
import UserContext from "../../../../contexts/User/userContext";

import TopSection from "../../../dashboards/dashboardClient/Acceuil/TopSection";
import AppointmentSection from "../../../dashboards/dashboardClient/Acceuil/AppointmentSection";
import CarSection from "../../../dashboards/dashboardClient/Acceuil/CarSection";
import ActiveAppointmentSection from "../../../dashboards/dashboardClient/Acceuil/ActiveAppointmentSection"

import CarCard from './carCard';
import { Link } from "react-router-dom";
import userContext from "../../../../contexts/User/userContext";

import AddCarModal from "../myCar/AddCarModal";

const Dashboard = (props) => {

    const authContext = useContext(AuthContext);

    const userContext = useContext(UserContext);
    const { car, loadCar } = userContext;

    const [showAddCar, setShowAddCar] = useState(false);
    const handleCloseAddCar = () => setShowAddCar(false);
    const handleShowAddCar = () => setShowAddCar(true);

    useEffect(() => {
        loadCar();
    }, [])




    const nocar = (

        <div>
            <div className="h6 font-weight-normal text-secondary mt-2 mb-0">
                Vous n'avez actuellement aucune voiture ajouté dans votre compte
                </div>
            <div>
                <Button variant="info">
                    Ajouter une voiture
                </Button>
            </div>
        </div>

    )

    return (
        <div>
            <TopSection />
            <AppointmentSection content="diagnostic" />
            <CarSection car={car} showmodal={handleShowAddCar} />
            <AddCarModal show={showAddCar} onHide={handleCloseAddCar} mileageModal='{}' />
            <ActiveAppointmentSection></ActiveAppointmentSection>
            { /* <Row className="mb-5">
                <Col className="dashboard-title">
                    <h1 className="h4 mb-0">Bienvenu {authContext.user.name}!</h1>
                    <p className="h6 font-weight-normal text-secondary mt-2 mb-0">
                        C'est un plaisir de vous revoir!
                  </p>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="dashboard-title">
                    <Row><h1 className="h4 mb-0">Reservez un diagnostic</h1></Row>
                    <Row> <p className="h6 font-weight-normal text-secondary mt-2 mb-0">
                        Ne laissez pas les problèmes de voiture sans contrôle.
                    </p> </Row>
                    <Row><Link to="/takeAppointment">Reservez un service</Link></Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row><h1 className="h4 mb-0">Vos voitures</h1></Row>
                    <hr />
                    <Row>
                        <Col lg={5}>
                            <Row>
                                Voiture
                        </Row>

                            <Row>
                                {car != '' ? <CarCard mark={car.mark} model={car.model} mycar={props.mycar} /> : nocar}
                            </Row>
                        </Col>
                        <Col lg={7}>
                            <Row>Dérnier Service</Row>
                            <Row>
                                2020-5-2
                            </Row>
                        </Col></Row>
                </Col>
            </Row> */}


        </div>
    )
}

export default Dashboard;
