import React from "react";

import "../../../../../css/dashboard/clienDashboard/Acceuil/AppointmentSection.css"

import {Col, Row, Image, Button} from "react-bootstrap";
import DiagnosticImage from "../../../../../img/dashboard/mechanic.png";
import LavageImage from "../../../../../img/dashboard/lavage.png";
const AppointmentSection = (props) => {


    const SwitchContent = () => {
        switch (props.content) {
            case 'diagnostic':
                return <Section image={DiagnosticImage} title='Reservez un controle'
                                description="Faites inspecter votre voiture chez un de nos mecanicien partenaires"/>
            case 'lavage':
                return <Section image={LavageImage} title='Reservez un lavage'
                                description="Nettoyez votre voiture à l\'un de nos lave-auto de confiance"/>
            default:
                return null
        }
    }

    const Section = (p) => {
        return (<Row>
            <Col lg={3}>
                <Image fluid
                       src={p.image}
                       alt="mechanic image loading"
                />
            </Col>
            <Col className="appointment-section-text">
                <h1 className="h4 mb-0">{p.title}</h1>
                <p className="h6 font-weight-normal text-secondary mt-2 mb-0">
                    {p.description}
                </p>

                <Button className="appointment-button" >
                    Reservez maintenant
                </Button>
            </Col>
        </Row>)
    }

    return (
        <div className="appointment-section">
            {SwitchContent()}
        </div>
    );
}

export default AppointmentSection;