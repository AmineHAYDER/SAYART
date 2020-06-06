import React, {useContext} from "react";
import {Col, Row} from "react-bootstrap";
import GarageContext from "../../../../contexts/Garage/garageContext";

const GeneralInformation = () => {


    const garageContext = useContext(GarageContext);
    const  {garage}= garageContext
    return (
        <div>
            <Row>
                <Col lg={3} className="right-border-s ">
                    <h1 className="mb-0">
                        {garage.name}
                    </h1>
                </Col>
                <Col lg={3} className="right-border-s">
                    <h4>Clients d'aujourd'hui</h4>
                    <h6>0 Client</h6>
                </Col>
                <Col lg={2} className="right-border-s">
                    <h4 className="h6 font-weight-normal text-secondary mt-2 mb-0">Demandes de rendez vous</h4>
                    <h6>10 demandes</h6>
                </Col>

                <Col className="right-border-s">
                    <h4>Heures de travail </h4>
                    <h6>5 heures</h6>
                </Col>
            </Row>
            <hr></hr>
        </div>
    )
}

export default GeneralInformation;