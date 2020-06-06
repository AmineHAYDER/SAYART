import React, {useContext} from "react";
import {Col, Row, ProgressBar} from "react-bootstrap";
import AppointmentContext from '../../../../../contexts/Appointment/appointmentContext'
import Counter from "../../../../../utils/Counter";
import "../../../../../css/dashboard/clienDashboard/Acceuil/ProgressionSection.css"



const ProgressionSection = () => {
    const appointmentContext = useContext(AppointmentContext)
    const {appointments} = appointmentContext
    return (
        <div className="progression-section">
            <div>
                <div style={{"text-align": "left"}}>
                    <h2 className="mb-0">Ma progression</h2>
                    <p className="h6 font-weight-normal mt-2 mb-0">
                        Terminer ces défis vous permet de gagner des cadeaux
                    </p>
                </div>
            </div>
            <div className="progress-bar-section">
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h3> Vidanges </h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {Counter(appointments,"wash")}
                                <ProgressBar now={(Counter(appointments,"wash")%5)*20}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h3> Lavages </h3>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                {Counter(appointments,"oilChange")}
                                <ProgressBar now={(Counter(appointments,"oilChange")%5)*20}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProgressionSection;