import React, {useState} from "react";

import './Dashboard.css';


import TopSection from "../mainDashboard/TopSection";
import AppointmentSection from "../mainDashboard/bodySection/AppointmentSection";
import CarSection from "../mainDashboard/bodySection/CarSection";
import ActiveAppointmentSection from "../mainDashboard/bodySection/ActiveAppointmentSection"
import ProgressionSection from "../mainDashboard/bodySection/ProgressionSection"


import AddCarModal from "../mainDashboard/modals/AddCarModal";
import MileageModal from "../mainDashboard/modals/MileageModal";

const Dashboard = (props) => {


    const [showAddCar, setShowAddCar] = useState(false);
    const handleCloseAddCar = () => setShowAddCar(false);
    const handleShowAddCar = () => setShowAddCar(true);


    const [showMileage, setShowMileage] = useState(false);
    const handleCloseMileage = () => setShowMileage(false);
    const handleShowMileage = () => setShowMileage(true);


   /* const nocar = (

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

    )*/

    return (
        <div>
            <TopSection/>
            <AppointmentSection content="diagnostic"/>
            <CarSection car={props.car} showmodal={handleShowAddCar}/>
            <AddCarModal show={showAddCar} onHide={handleCloseAddCar} mileageModal={handleShowMileage}/>

            <MileageModal show={showMileage} onHide={handleCloseMileage}/>

            <ActiveAppointmentSection/>
            <ProgressionSection/>


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
                            <Row>Dérnier service</Row>
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
